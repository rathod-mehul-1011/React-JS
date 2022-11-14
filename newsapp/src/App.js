import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import News from "./components/News";

const App = () => {
  const pageSize = 15;
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<News pageSize={pageSize} country="in" category="" />}
        />
        <Route
          path="/home"
          element={<News pageSize={pageSize} country="in" category="general" />}
        />

        <Route
          path="/business"
          element={<News pageSize={pageSize} country="in" category="business" />}
        />
        <Route
          path="/entertainment"
          element={
            <News pageSize={pageSize} country="in" category="entertainment" />
          }
        />
        <Route
          path="/health"
          element={<News pageSize={pageSize} country="in" category="health" />}
        />
        <Route
          path="/science"
          element={<News pageSize={pageSize} country="in" category="science" />}
        />
        <Route
          path="/sports"
          element={<News pageSize={pageSize} country="in" category="sports" />}
        />
        <Route
          path="/technology"
          element={<News pageSize={pageSize} country="in" category="technology" />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
