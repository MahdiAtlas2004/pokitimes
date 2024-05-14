import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Post = () => {
  const { post_id } = useParams();
  const [id, setId] = useState(null);

  useEffect(() => {
    console.log(post_id);
    setId(post_id);
  }, [post_id]);

  return (
    <div className="container">
      <h4>{id}</h4>
    </div>
  );
};

export default Post;
