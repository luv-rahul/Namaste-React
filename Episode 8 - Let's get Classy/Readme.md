# Namaste React Episode 8 - Let's get Classy! 🚀

---

## Class Based Components 📚

1. Functional Component 🔧

```js
const User = () => {
  return (
    <div className="user-card">
      <h2>Name: Rahul</h2>
      <h3>Location: Delhi</h3>
      <h4>Contact: @rahul</h4>
    </div>
  );
};

export default User;
```

2. Class Based Component 🏗️

```js
import React from "react";

class UserClass extends React.Component {
  render() {
    return (
      <div className="user-card">
        <h2>Name: Rahul</h2>
        <h3>Location: Delhi</h3>
        <h4>Contact: @rahul</h4>
      </div>
    );
  }
}

export default UserClass;
```

About.js 📄

```js
import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div className="about">
      <h1>About Page</h1>
      <h2>This is Namaste React Web Series</h2>
      <User />
      <UserClass />
    </div>
  );
};

export default About;
```

index.css 🎨

```css
.user-card {
  width: 200px;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  margin: 5px;
}
```

### Passing Props 📦

About.js

```js
import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div className="about">
      <h1>About Page</h1>
      <h2>This is Namaste React Web Series</h2>
      <User
        name="Rahul (Functional Component)"
        location="Delhi (Functional Component)"
      />
      <UserClass
        name="Rahul (Class Component)"
        location="Delhi (Class Component)"
      />
    </div>
  );
};

export default About;
```

User.js 👤

```js
const User = ({ name, location }) => {
  return (
    <div className="user-card">
      <h2>Name: {name}</h2>
      <h3>Location: {location}</h3>
      <h4>Contact: @rahul</h4>
    </div>
  );
};

export default User;
```

UserClass.js 🏛️

```js
import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props); // Compulsory

    console.log(props);
  }

  render() {
    return (
      <div className="user-card">
        <h2>Name: {this.props.name}</h2>
        <h3>Location: {this.props.location}</h3>
        <h4>Contact: @rahul</h4>
      </div>
    );
  }
}

export default UserClass;
```

```js
import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props); // Compulsory

    console.log(props);
  }

  render() {
    const { name, location } = this.props;
    return (
      <div className="user-card">
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @rahul</h4>
      </div>
    );
  }
}

export default UserClass;
```

### HomeWork 📝

1. Why we need super() in constructor? 🤔

### State Variable 🔄

```js
import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props); // Compulsory

    // Creating State variable
    this.state = {
      count: 0,
    };
  }

  render() {
    const { name, location } = this.props;
    const { count } = this.state;

    return (
      <div className="user-card">
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @rahul</h4>
        <h5>{count}</h5>
        <button
          onClick={() => {
            this.setState({
              count: count + 1,
            });
          }}
        >
          Click
        </button>
      </div>
    );
  }
}

export default UserClass;
```

## LifeCycle Methods 🔄

First, constructor is called -> Then, render is called 📊

About.js

```js
import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);

    console.log("Parent Constructor!");
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
```

UserClass.js

```js
import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props); // Compulsory

    // Creating State variable
    this.state = {
      count: 0,
    };

    console.log("Child Constructor!");
  }

  render() {
    console.log("Child Render!");
    const { name, location } = this.props;
    const { count } = this.state;

    return (
      <div className="user-card">
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @rahul</h4>
        <h5>{count}</h5>
        <button
          onClick={() => {
            this.setState({
              count: count + 1,
            });
          }}
        >
          Click
        </button>
      </div>
    );
  }
}

export default UserClass;
```

Steps: 👣

- Parent Constructor!
- Parent Render!
- Child Constructor!
- Child Render!

**componentDidMount** 🏔️

About.js

```js
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
```

UserClass.js

```js
import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props); // Compulsory

    // Creating State variable
    this.state = {
      count: 0,
    };

    console.log("Child Constructor!");
  }

  componentDidMount() {
    console.log("Child componentDidMount");
  }

  render() {
    console.log("Child Render!");
    const { name, location } = this.props;
    const { count } = this.state;

    return (
      <div className="user-card">
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @rahul</h4>
        <h5>{count}</h5>
        <button
          onClick={() => {
            this.setState({
              count: count + 1,
            });
          }}
        >
          Click
        </button>
      </div>
    );
  }
}

export default UserClass;
```

Steps: 👣

- Parent Constructor!
- Parent Render!
- Child Constructor!
- Child Render!
- Child componentDidMount
- Parent componentDidMount

**Two child Class Component usecase** 👥

About.js

```js
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
        <UserClass
          name="Krishna (Class Component)"
          location="Delhi (Class Component)"
        />
      </div>
    );
  }
}

export default About;
```

UserClass.js

```js
import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props); // Compulsory

    // Creating State variable
    this.state = {
      count: 0,
    };

    console.log(this.props.name + " Child Constructor!");
  }

  componentDidMount() {
    console.log(this.props.name + " Child componentDidMount");
  }

  render() {
    console.log(this.props.name + " Child Render!");
    const { name, location } = this.props;
    const { count } = this.state;

    return (
      <div className="user-card">
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @rahul</h4>
        <h5>{count}</h5>
        <button
          onClick={() => {
            this.setState({
              count: count + 1,
            });
          }}
        >
          Click
        </button>
      </div>
    );
  }
}

export default UserClass;
```

Expected Steps: 📝

- Parent Constructor!
- Parent Render!
- Rahul (Class Component) Child Constructor!
- Rahul (Class Component) Child Render!
- Rahul (Class Component) Child componentDidMount
- Krishna (Class Component) Child Constructor!
- Krishna (Class Component) Child Render!
- Krishna (Class Component) Child componentDidMount
- Parent componentDidMount

But this doesn't happen. This is because of **React lifecycle methods. Visit: https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/** 📈

Actual Steps: ✅

- Parent Constructor!
- Parent Render!

......React render phase...... ⚛️

- Rahul (Class Component) Child Constructor!
- Rahul (Class Component) Child Render!
- Krishna (Class Component) Child Constructor!
- Krishna (Class Component) Child Render!

.......DOM updated -> React batch the commit phase...... 🔄

- Rahul (Class Component) Child componentDidMount
- Krishna (Class Component) Child componentDidMount

- Parent componentDidMount

**Why componentDidMount is used?** 🤔

- componentDidMount is used to make API calls. Since it is called after the component is finally render and now we can fetch data and show to the user. 🌐

- This act similar as useEffect (which is called after component is render). ⚡
- But useEffect != componentDidMount. useEffect **doesn't** use componentDidMount behind the scene. ❌

### API call 📡

UserClass.js

```js
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

  // Called when component updates
  componentDidUpdate() {
    console.log("componentDidUpdate called!");
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
```

Lifecycle Steps: 🔄

.....Mounting Cycle...... ⬆️

- Constructor Called 🏗️
- Render Called (dummy data) 🎭
- componentDidMount Called 🏔️
  - API call 📞
  - setState called 📝

.......Update Cycle...... 🔄

- Render Called (re-render) 🔄
- DOM updated 🌐
- componentDidUpdate called ⬆️

**Note: componentDidUnmount will be called when we moved on to other page.** 📋
UserClass.js

```js
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
```