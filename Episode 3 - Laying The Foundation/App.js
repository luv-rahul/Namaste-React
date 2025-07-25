import React from "react";
import ReactDOM from "react-dom/client";

// JSX
const Title = () => (
  <h1 id="heading" className="head">
    Namaste React using JSX
  </h1>
);

const HeadingComponent = () => {
  return (
    <div id="container">
      <Title />
      <Title></Title>
      {Title()}
      <h1>Namaste React from Functional Component</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
