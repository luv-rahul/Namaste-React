import React from "react";
import ReactDOM from "react-dom/client";

/* JSX */
const heading = <h1 className="heading">Namaste React using JSX</h1>;

/* React Functional Component */
const Title = () => {
  return <h1>Hello React!</h1>;
};

const HeadingComponent = () => {
  return (
    <div id="container">
      <Title />
      <Title></Title>
      {Title()}
      {heading}
      <h1 className="heading">Namaste React using Functional Component</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
