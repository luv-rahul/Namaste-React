import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);

    console.log("Parent Constructor!");
  }

  componentDidMount() {
    console.log("Parent componentDidMount");
  }

  render() {
    console.log("Parent Render!");
    return (
      <div className="about">
        <h1>About Page</h1>
        <h2>This is Namaste React Web Series</h2>
        <UserClass
          name="Rahul (Class Component)"
          location="Delhi (Class Component)"
        />
      </div>
    );
  }
}

export default About;
