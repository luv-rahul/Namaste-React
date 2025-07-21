# 🙏 Namaste React - Episode 1 - The Inception

**💡 Tips:**

1. 📝 Make your own notes
2. 💻 Use your laptop
3. 📂 Maintain a GitHub Repository

## 👋 Hello World using HTML

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Namaste React</title>
  </head>

  <body>
    <div id="root">
      <h1>Hello World!</h1>
    </div>
  </body>
</html>
```

## 🚀 Hello World using JavaScript

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Namaste React</title>
  </head>

  <body>
    <div id="root"></div>
    <script>
      const heading = document.createElement("h1");
      heading.innerHTML = "Hello World from JavaScript!";

      const root = document.getElementById("root");
      root.appendChild(heading);
    </script>
  </body>
</html>
```

❓ How does browser know about document, createElement, innerHTML, getElementById, appendChild?

- 🌐 Browser know these things already as it has JS engine in it.

❓ Does browser know about React?

- ❌ No. To use React, we will use React CDN links.

```html
<script
  crossorigin
  src="https://unpkg.com/react@18/umd/react.development.js"
></script>
<script
  crossorigin
  src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
></script>
```

###### 📚 Home Work

1. ❓ What is CDN?
2. ❓ What is crossorigin?

❓ Why there are two files?

- 📦 First file contains core React code.
- 🌐 Second file contains code for DOM manipulation using React.

❓ Why they don't club code into one file?

- 📱 It is because React also used to make mobile apps.

## ⚛️ Hello World using React

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Namaste React</title>
  </head>

  <body>
    <div id="root"></div>

    <script
      crossorigin
      src="https://unpkg.com/react@18/umd/react.development.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
    ></script>

    <script>
      const heading = React.createElement("h1", {}, "Hello World from React!");

      const root = ReactDOM.createRoot(document.getElementById("root"));

      root.render(heading);
    </script>
  </body>
</html>
```

- 📁 Create a App.js folder.
- 📤 Move all script code in App.js

**⚠️ Note: The most costly operation is DOM manipulation.**

📄 App.js

```js
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React!"
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
```

- 🎨 Make a CSS File index.css

```css
#heading {
  color: red;
}
```

📄 App.js

```js
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React!"
);

console.log(heading); // React Element -> JavaScript Object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading); // React Element -> JavaScript Object -> HTML Element
```

**⚛️ React.createElement() -> React Element -> JavaScript Object -> render() -> HTML Element**

📄 App.js

```js
/**
 * <div id="parent">
 *      <div id="child">
 *          <h1>I'm h1 tag.</h1>
 *      </div>
 * </div>
 */

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "I'm h1 tag.")
  )
);

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React!"
);

console.log(parent); // React Element -> JavaScript Object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent); // React Element -> JavaScript Object -> HTML Element
```

📄 App.js

```js
/**
 * <div id="parent">
 *      <div id="child">
 *          <h1>I'm h1 tag.</h1>
 *      </div>
 * </div>
 *
 *
 *
 * <div id="parent">
 *      <div id="child">
 *          <h1>I'm h1 tag.</h1>
 *          <h2>I'm h2 tag.</h2>
 *      </div>
 * </div>
 */

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm h1 tag."),
    React.createElement("h2", {}, "I'm h2 tag."),
  ])
);

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React!"
);

console.log(parent); // React Element -> JavaScript Object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent); // React Element -> JavaScript Object -> HTML Element
```

📄 App.js

```js
/**
 * <div id="parent">
 *      <div id="child">
 *          <h1>I'm h1 tag.</h1>
 *      </div>
 * </div>
 *
 *
 *
 * <div id="parent">
 *      <div id="child">
 *          <h1>I'm h1 tag.</h1>
 *          <h2>I'm h2 tag.</h2>
 *      </div>
 * </div>
 *
 *
 *
 *<div id="parent">
 *      <div id="child">
 *          <h1>I'm h1 tag.</h1>
 *          <h2>I'm h2 tag.</h2>
 *      </div>
 *      <div id="child2">
 *          <h1>I'm h1 tag.</h1>
 *          <h2>I'm h2 tag.</h2>
 *      </div>
 * </div>
 */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm h1 tag."),
    React.createElement("h2", {}, "I'm h2 tag."),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm h1 tag."),
    React.createElement("h2", {}, "I'm h2 tag."),
  ]),
]);

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React!"
);

console.log(parent); // React Element -> JavaScript Object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent); // React Element -> JavaScript Object -> HTML Element
```

### 📋 Order of files matters!

⚠️ This code will throw error!!

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
    <div id="root"></div>

    <script src="./App.js"></script>

    <script
      crossorigin
      src="https://unpkg.com/react@18/umd/react.development.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
    ></script>
  </body>
</html>
```

### 📚 HomeWork

1. ❓ Can we put CDN links inside head tag?
2. ❓ Can we use production CDN links?

## 🔄 Replaced! not Append!!

📄 index.html

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
      <h1>Rahul here!</h1>
    </div>

    <script
      crossorigin
      src="https://unpkg.com/react@18/umd/react.development.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
    ></script>

    <script src="./App.js"></script>
  </body>
</html>
```

📄 App.js

```js
/**
 * <div id="parent">
 *      <div id="child">
 *          <h1>I'm h1 tag.</h1>
 *      </div>
 * </div>
 *
 *
 *
 * <div id="parent">
 *      <div id="child">
 *          <h1>I'm h1 tag.</h1>
 *          <h2>I'm h2 tag.</h2>
 *      </div>
 * </div>
 *
 *
 *
 *<div id="parent">
 *      <div id="child">
 *          <h1>I'm h1 tag.</h1>
 *          <h2>I'm h2 tag.</h2>
 *      </div>
 *      <div id="child2">
 *          <h1>I'm h1 tag.</h1>
 *          <h2>I'm h2 tag.</h2>
 *      </div>
 * </div>
 */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm h1 tag."),
    React.createElement("h2", {}, "I'm h2 tag."),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm h1 tag."),
    React.createElement("h2", {}, "I'm h2 tag."),
  ]),
]);

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React!"
);

console.log(parent); // React Element -> JavaScript Object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent); // React Element -> JavaScript Object -> HTML Element
```

## 📚 React is a library, not a framework

📄 index.html

✨ Only the root content is rendered by React. Other content remains same,

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
    <h1>Hello!</h1>
    <div id="root">
      <h1>Rahul here!</h1>
    </div>
    <h1>Bye!</h1>

    <script
      crossorigin
      src="https://unpkg.com/react@18/umd/react.development.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
    ></script>

    <script src="./App.js"></script>
  </body>
</html>
```

📄 App.js

```js
/**
 * <div id="parent">
 *      <div id="child">
 *          <h1>I'm h1 tag.</h1>
 *      </div>
 * </div>
 *
 *
 *
 * <div id="parent">
 *      <div id="child">
 *          <h1>I'm h1 tag.</h1>
 *          <h2>I'm h2 tag.</h2>
 *      </div>
 * </div>
 *
 *
 *
 *<div id="parent">
 *      <div id="child">
 *          <h1>I'm h1 tag.</h1>
 *          <h2>I'm h2 tag.</h2>
 *      </div>
 *      <div id="child2">
 *          <h1>I'm h1 tag.</h1>
 *          <h2>I'm h2 tag.</h2>
 *      </div>
 * </div>
 */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm h1 tag."),
    React.createElement("h2", {}, "I'm h2 tag."),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm h1 tag."),
    React.createElement("h2", {}, "I'm h2 tag."),
  ]),
]);

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React!"
);

console.log(parent); // React Element -> JavaScript Object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent); // React Element -> JavaScript Object -> HTML Element
```

**⚛️ React is a library. It can be used in small portion of the app. While framework is a full fledged thing to make app.**