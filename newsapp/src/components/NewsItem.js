import React from "react";
import QRCode from "react-qr-code";
import "./NewsItem.css";

const NewsItem = (props) => {
  return (
    <div className="my-3">
      <div className="card">
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'90%',zIndex:'1'}}>
          {props.source}
        </span>
        <img
          src={
            props.imageUrl
              ? props.imageUrl
              : "https://nenow.in/wp-content/uploads/2022/03/Garena-Free-Fire-max.jpg"
          }
          className="card-img-top"
          alt="..."
          height={"250"}
        />
        <div className="qr-container">
          <QRCode value={props.newsUrl} size={100} />
        </div>
        <div className="card-body">
          <h5 className="card-title">{props.title}...</h5>
          <p className="card-text">
            {props.description
              ? props.description
              : "The James Webb Telescope is all set to conduct its first scientific observation"}
            ...
          </p>
          <p className="card-text">
            <small className="text-muted">
              By {props.author ? props.author : "Unknown"} on{" "}
              {new Date(props.date).toLocaleString()}
            </small>
          </p>
          <a
            href={props.newsUrl}
            rel="noreferrer"
            target="_blank"
            className="btn btn-sm btn-dark"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
