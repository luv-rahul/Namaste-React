# Namaste React: Episode 3 - Laying The Foundation 🚀

---

## Scripts 📝

To execute our project:

- npx parcel index.html

Now we will use scripts to execute our project.

package.json

```json
{
  "name": "namaste-react",
  "version": "1.0.0",
  "description": "This is Namaste React taught by Akshay Saini",
  "scripts": {
    "start": "parcel index.html",
    "build": "parcel build index.html",
    "test": "jest"
  },
  "keywords": ["javascript", "reactjs"],
  "author": "Rahul",
  "license": "ISC",
  "devDependencies": {
    "parcel": "^2.15.4"
  },
  "dependencies": {
    "react": "^19.1.1",
    "react-dom": "^19.1.1"
  }
}
```

Now use commands:

- Dev mode: npm start or npm run start 🔥
- Prod mode: npm run build 🏗️

## React Element ⚛️

index.html

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

    <script type="module" src="./App.js"></script>
  </body>
</html>
```

App.js

```js
import React from "react";
import ReactDOM from "react-dom/client";

/* React Element */
// React.createElement -> React Element -> JavaScript Object -> render -> HTML Element
const heading = React.createElement("h1", { id: "heading" }, "Namaste React!");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
```

## JSX ✨

App.js

```js
import React from "react";
import ReactDOM from "react-dom/client";

/* React Element */
// React.createElement -> React Element -> JavaScript Object -> render -> HTML Element
const heading = React.createElement("h1", { id: "heading" }, "Namaste React!");

console.log(heading);

/* JSX */
// JSX != HTML inside JS. JSX is HTML like syntax.
const jsxHeading = <h1 id="heading">Namaste React from JSX!</h1>;

console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);
```

### Babel is a Transpiler 🔄

Does JSX is a valid JavaScript? How JSX is working then?

- No. JS only understands ES6 code.

**JSX is transpiled before reaching to browser. Transpilation is done by Parcel (Babel).**

Note:
**JSX -> React.createElement -> React Element -> JavaScript Object -> HTML Element** 📋

### JSX != HTML 🚫

App.js

```js
import React from "react";
import ReactDOM from "react-dom/client";

/* JSX */
const jsxHeading = (
  <h1 id="heading" className="head">
    Namaste React from JSX!
  </h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);
```

- We pass "className" instead of "class". Also we use camelCase structure. 🐪
- If we want to have multiple lines then wrap using ( ). 🎁

**Extensions:** 🔧

- Prettier
- Bracket Pair Colorizer
- ESlint
- Better Comments

App.js

```js
import React from "react";
import ReactDOM from "react-dom/client";

/* JSX */
// JSX -> Transpilation(Babel) -> React.createElement -> React Element -> JavaScript Object -> Render -> HTML
const jsxHeading = (
  <h1 id="heading" className="head">
    Namaste React from JSX!
  </h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);
```

## React Component 🧩

There are two types of React Components:

1. Functional Component - New Way 🆕
2. Class Based Component - Old Way 📜

**Functional Component:**
A JavaScript function which returns React Element or some piece of JSX. 🎯

App.js

```js
import React from "react";
import ReactDOM from "react-dom/client";

/* JSX */
// JSX -> Transpilation(Babel) -> React.createElement -> React Element -> JavaScript Object -> Render -> HTML
const jsxHeading = (
  <h1 id="heading" className="head">
    Namaste React from JSX!
  </h1>
);

/*Functional Component*/
const HeadingComponent = () => {
  return (
    <div>
      <h1 className="heading">Namaste React from Component</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
```

### Component Composition 🔗

App.js

```js
import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => {
  return <h1 id="heading">Namaste React!</h1>;
};

/*Functional Component*/
const HeadingComponent = () => {
  return (
    <div id="container">
      <Title />
      <h1 className="heading">Namaste React from Component</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
```

**Note:** 📌

We can also use "function" keyword.

```js
const Title = function () {
  return <h1 id="heading">Namaste React!</h1>;
};
```

We can use JavaScript expression inside JSX. ➕

```js
const HeadingComponent = () => {
  return (
    <div id="container">
      <Title />
      <h2>{100 + 200}</h2>
      <h1 className="heading">Namaste React from Component</h1>
    </div>
  );
};
```

```js
import React from "react";
import ReactDOM from "react-dom/client";

const title = <h1 id="heading">Namaste React!</h1>;

/*Functional Component*/
const HeadingComponent = () => {
  return (
    <div id="container">
      {title}
      <h1 className="heading">Namaste React from Component</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
```

## Cross-Sites-Scripting Attack 🛡️

JSX also prevents us from cross-sites-scripting attacks. JSX also sanitizes the data and then push to UI. 🧹

```js
import React from "react";
import ReactDOM from "react-dom/client";

const title = <h1 id="heading">Namaste React!</h1>;

const data = api.getData(); // malicious data

/*Functional Component*/
const HeadingComponent = () => {
  return (
    <div id="container">
      {data}
      <h1 className="heading">Namaste React from Component</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
```

## Methods to Compose Components 🎨

```js
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
```

**Our code is more readable because of JSX.** 📖✨
