import React from "react";

const Rainbow = (WrappedComponent) => {
  const colours = ["pink", "red", "orange", "blue", "yellow", "green"];
  const randomColour = colours[Math.floor(Math.random() * 5)];
  const className = randomColour + "-text";

  return (props) => {
    return (
      <div className={className}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default Rainbow;
