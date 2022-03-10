import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import PostId from "./pages/PostId";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/post/:postId" exact element={<PostId />} />
        <Route>404 Not Found</Route>
      </Routes>
    </>
  );
}

export default App;