import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    loadData();
  }, [props.country, props.category, props.pageSize]);

  const loadData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=dcea2a5345bc43b196e3f36bb21cd1b5&page=${page}&pageSize=${props.pageSize}`;

    setLoading(true);

    let data = await fetch(url);
    let parsedData = await data.json();

    setArticles(parsedData.articles);
    setLoading(false);
    setTotalResults(parsedData.totalResults);
  };

  const handlePrevClick = async () => {
    loadData();
    setPage(page - 1);
  };

  const handleNextClick = async () => {
    if (!(page + 1 > Math.ceil(totalResults / props.pageSize))) {
      loadData();
      setPage(page + 1);
    }
  };

  return (
    <div className="container my-3">
      <h1 className="text-center">NewsMonkey - Top Headlines</h1>

      {loading && <Spinner />}

      <div className="row">
        {!loading &&
          articles.map((e) => (
            <div className="col-md-4" key={e.url}>
              <NewsItem
                title={e.title ? e.title.slice(0, 40) : ""}
                description={e.description ? e.description.slice(0, 70) : ""}
                imageUrl={e.urlToImage}
                newsUrl={e.url}
                author={e.author}
                date={e.publishedAt}
                source={e.source.name}
              />
            </div>
          ))}
      </div>
      <div className="container d-flex justify-content-between">
        <button
          type="button"
          disabled={page <= 1}
          className="btn btn-dark"
          onClick={handlePrevClick}
        >
          &larr; Previous
        </button>
        <button
          type="button"
          disabled={page + 1 > Math.ceil(totalResults / props.pageSize)}
          className="btn btn-dark"
          onClick={handleNextClick}
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
};

export default News;
