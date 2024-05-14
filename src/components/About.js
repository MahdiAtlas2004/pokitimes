import React from "react";
import Rainbow from "../hoc/Rainbow";

const About = () => {
  return (
    <div className="container">
      <h4 className="center">About</h4>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate
        consequuntur nobis tempore libero assumenda reprehenderit ipsam beatae
        vel, sit aliquid nemo consectetur? Quaerat deserunt, nam culpa
        exercitationem repudiandae incidunt laudantium?
      </p>
    </div>
  );
};

export default Rainbow(About);
