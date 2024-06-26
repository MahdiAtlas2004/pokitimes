import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Pokeball from "../pokeball.png";

class Home extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      this.setState({
        posts: res.data.slice(0, 10),
      });
    });
  }

  render() {
    const { posts } = this.state;
    const postList = posts.length ? (
      posts.map((post) => {
        return (
          <div className="card post" key={post.id}>
            <img src={Pokeball} alt={"photo" + Math.random} />
            <div className="card-content">
              <Link to={"/" + post.id}>
                <div className="card-title red-text">{post.title}</div>
              </Link>
              <p>{post.body}</p>
            </div>
          </div>
        );
      })
    ) : (
      <div className="center">No posts yet</div>
    );
    return (
      <div className="container home">
        <h4 className="center">Home</h4>
        {postList}
      </div>
    );
  }
}

export default Home;
