import React from "react";
import Header from "./Header";
import blogData from "../data/blog";
import About from "./About";
import ArticleList from "./ArticleList";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name={blogData.name}/>
      <About image={blogData.image} about = {blogData.about}/>
      <ArticleList posts={blogData.posts}/>
    </div>
  );
}

export default App;