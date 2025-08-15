import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => <h1 id="heading">Namaste React!</h1>;

/*Functional Component*/
const HeadingComponent = () => {
  return (
    <div id="container">
      <Title />
      <Title></Title>
      {Title()}
      <h1 className="heading">Namaste React from Component</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
