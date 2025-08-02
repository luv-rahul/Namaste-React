import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props); // Compulsory

    // Creating State variable
    this.state = {
      userInfo: {
        login: "username",
        avatar_url: "https://demo-avatar.jpg/",
      },
    };

    console.log(this.props.name + " Child Constructor!");
  }

  async componentDidMount() {
    console.log(this.props.name + " Child componentDidMount");

    // API call
    try {
      const data = await fetch("https://api.github.com/users/luv-rahul");
      const json = await data.json();
      console.log(json);

      this.setState({
        userInfo: json,
      });
    } catch (error) {
      console.log("error");
    }
  }

  componentDidUpdate() {
    console.log("componentDidUpdate called!");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount called!");
  }

  render() {
    console.log(this.props.name + " Child Render!");
    const { login, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <h2>Name: {login}</h2>
        <img style={{ height: "100px" }} src={avatar_url}></img>
        <h4>Contact: @rahul</h4>
      </div>
    );
  }
}

export default UserClass;
