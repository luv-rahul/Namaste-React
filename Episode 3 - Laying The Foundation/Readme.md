# Namaste React Episode 3 - Laying the Foundation

---

## 🚀 Project Execution

To execute this project:-
Earlier we used: "npx parcel index.html".

Now, we will use scripts inside package.json. 📦

**package.json**

```json
{
  "name": "namaste-react",
  "version": "1.0.0",
  "description": "This is Namaste React Course by Akshay Saini",
  "scripts": {
    "start": "parcel index.html",
    "build": "parcel build index.html",
    "test": "jest"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/luv-rahul/Namaste-React.git"
  },
  "keywords": ["JavaScript", "React"],
  "author": "Rahul",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/luv-rahul/Namaste-React/issues"
  },
  "homepage": "https://github.com/luv-rahul/Namaste-React#readme",
  "devDependencies": {
    "parcel": "^2.15.4"
  },
  "dependencies": {
    "react": "^19.1.0",
    "react-dom": "^19.1.0"
  },
  "browserslist": ["last 2 version"]
}
```

To execute the project we will use these commands: 💻

1. **Dev mode:** 🛠️
   - npm run start
   - npm start
2. **Build mode:** 🏗️
   - npm run build

## 📚 Revision

**index.html**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Namaste React</title>
    <link rel="stylesheet" href="./index.css" />
  </head>

  <body>
    <div id="root">
      <h1>Not Rendered</h1>
    </div>

    <script src="./App.js" type="module"></script>
  </body>
</html>
```

**App.js**

```js
import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement() -> React Element -> JavaScript Object -> render -> HTML Element
const heading = React.createElement("h1", { id: "heading" }, "Namaste React!");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
```

## ✨ JSX

Earlier we use to do React.createElement(). But, the syntax was complicated. 😕

So, JSX is developed. 🎉

**JSX is not HTML inside JS. JSX is HTML like syntax** 📝

```js
import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const heading = React.createElement("h1", { id: "heading" }, "Namaste React!");
console.log(heading);

// JSX ✨
const jsxHeading = <h1 id="heading">Namaste React using JSX</h1>;
console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);
```

## 🔄 Babel is a Transpiler!

Is JSX is valid JS syntax? 🤔

- No. ❌

Then how it is working? 🧐

- **JSX is transpiled before going to JS engine. Transpilation means converting this code such that React will understand this piece of code.** 🔄

**Transpilation is done by Parcel - Babel.** ⚙️

**JSX -> Transpilation(Babel) -> React.createElement() -> React Element -> JS Object -> render -> HTML** 🎯

## ⚠️ JSX is different than HTML

We use `className` instead of `class` and also, we use camelCase. 📐

```js
import React from "react";
import ReactDOM from "react-dom/client";

// JSX ✨
const jsxHeading = (
  <h1 id="heading" className="head">
    Namaste React using JSX
  </h1>
);
console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);
```

If we want to write JSX in multiple lines we use brackets(). 🔗

```js
import React from "react";
import ReactDOM from "react-dom/client";

// JSX ✨
const jsxHeading = (
  <h1 id="heading" className="head">
    Namaste React using JSX
  </h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);
```

## 🔧 Extensions:

1. Prettier ✨
2. Bracket Pair Colorizer 🌈
3. ESlint 📋
4. Better Comments 💬

## ⚛️ React Components

1. **Class Based Component** - Old Way 📜
2. **Functional Component** - New Way 🆕

### 🔥 Functional Component

- A normal JavaScript Function which returns some JSX or React Element. 🔄

```js
import React from "react";
import ReactDOM from "react-dom/client";

// JSX ✨
const heading = (
  <h1 id="heading" className="head">
    Namaste React using JSX
  </h1>
);

const HeadingComponent = () => {
  return (
    <div id="container">
      <h1>Namaste React from Functional Component</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
```

## 🧩 Component Composition

```js
import React from "react";
import ReactDOM from "react-dom/client";

// JSX ✨
const Title = () => (
  <h1 id="heading" className="head">
    Namaste React using JSX
  </h1>
);

const HeadingComponent = () => {
  return (
    <div id="container">
      <Title />
      <h1>Namaste React from Functional Component</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
```

## 🚀 JS in React

```js
import React from "react";
import ReactDOM from "react-dom/client";

// JSX ✨
const title = (
  <h1 id="heading" className="head">
    Namaste React using JSX
  </h1>
);

const number = 10000;

const HeadingComponent = () => {
  return (
    <div id="container">
      {title}
      {number}
      <h2>{number}</h2>
      <h2>{100 + 200}</h2>
      <h2>{console.log("Hello!")}</h2>
      <h1>Namaste React from Functional Component</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
```

### 🛡️ Cross Site Scripting

Suppose an attacker sends some malicious data on calling API. So, malicious code will be run inside functional component on rendering which leads to attack on privacy. 😈

But this doesn't happen. JSX sanitize the data and avoid cross site scripting attacks. ✅

```js
import React from "react";
import ReactDOM from "react-dom/client";

// JSX ✨
const Title = () => (
  <h1 id="heading" className="head">
    Namaste React using JSX
  </h1>
);

const data = api.getData();

const HeadingComponent = () => {
  return (
    <div id="container">
      <Title />
      {data}
      <h1>Namaste React from Functional Component</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
```

### 🎭 Different ways to Render Component

```js
import React from "react";
import ReactDOM from "react-dom/client";

// JSX ✨
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
```

## 🌟 What makes React code readable?

- It is because we are using JSX. ✨
