import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Post = () => {
  const { post_id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/" + post_id)
      .then((res) => {
        setPost(res.data);
        // console.log(res);
      });
  }, [post_id]);

  const postView = post ? (
    <div className="post">
      <div className="center">{post.title}</div>
      <p>{post.body}</p>
    </div>
  ) : (
    <div className="center">Loading post...</div>
  );
  return <div className="container">{postView}</div>;
};

export default Post;
