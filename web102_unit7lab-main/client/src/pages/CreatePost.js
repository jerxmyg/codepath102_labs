import React, { useState } from "react";
import { supabase } from "../client";
import "./CreatePost.css";

const CreatePost = () => {
  const [post, setPost] = useState({ title: "", author: "", description: "" });
  const createPost = async (event) => {
    event.preventDefault();

    await supabase
      .from("Posts")
      .insert({
        title: post.title || "title",
        author: post.author || "author",
        description: post.description || "description",
      })
      .select();

    window.location = "/";
  };

  const onChange = (event) => {
    setPost((prevPost) => {
      return { ...prevPost, [event.target.name]: event.target.value };
    });
  };
  
  return (
    <div>
      <form onSubmit={createPost}>
        <label for="title">Title</label> <br />
        <input
          type="text"
          id="title"
          name="title"
          value={post.title}
          onChange={onChange}
        />
        <br />
        <br />
        <label for="author">Author</label>
        <br />
        <input
          type="text"
          id="author"
          name="author"
          value={post.author}
          onChange={onChange}
        />
        <br />
        <br />
        <label for="description">Description</label>
        <br />
        <textarea
          rows="5"
          cols="50"
          id="description"
          name="description"
          value={post.description}
          onChange={onChange}
        />
        <br />
        <input type="submit" value="Submit"/>
      </form>
    </div>
  );
};

export default CreatePost;