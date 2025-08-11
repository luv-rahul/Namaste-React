# Namaste React: Episode 1 - The Inception 🚀

---

Important tips: 💡

1. Make your own notes 📝
2. Use laptop 💻
3. Maintain a GitHub Repository 📁

## Hello World using HTML 🌐

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

## Hello World using JavaScript ⚡

```js
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
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

How does browser know document, createElement, innerHTML, getElementById ? 🤔

- Browser already knew about all terms, since it has JavaScript engine inside it. 🧠

Does browser know about React? ❓

- No. We will use React CDN links. 🔗

```js
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
```

These files contains React code. 📦

Why there are two files? 🤷‍♂️

- First file is core React codes. ⚛️
- Second file is React DOM codes. 🏠

Since, React also works on mobile, therefore, ReactDOM is a seperate file. 📱

## Hello World using React ⚛️

```js
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Namaste React</title>
</head>

<body>
    <div id="root"></div>

    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

    <script>
        const heading = React.createElement("h1", {}, "Hello World from React!");

        const root = ReactDOM.createRoot(document.getElementById("root"));

        root.render(heading);
    </script>
</body>

</html>
```

- Create a App.js file 📄
- Move script code inside App.js

Note: The most costly operation in website is DOM manipulation. 💸

## Passing Attributes and Styling 🎨

App.js

```js
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React!"
);

console.log(heading); // React Element -> JavaScript Object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading); // React Element -> JavaScript Object -> render -> HTML
```

index.css

```css
#heading {
  color: red;
}
```

Note: React.createElement -> React Element -> JavaScript Object -> render -> HTML Element 🔄

## Nested Structure 🏗️

Example 1: 1️⃣

App.js

```js
/**
 * <div id="parent">
 *      <div id="child">
 *              <h1>I'm h1 tag</h1>
 *      </div>
 * </div>
 */

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "I'm h1 tag")
  )
);

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React!"
);

console.log(parent); // React Element -> JavaScript Object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent); // React Element -> JavaScript Object -> render -> HTML
```

Example 2: 2️⃣

App.js

```js
/**
 * <div id="parent">
 *      <div id="child">
 *              <h1>I'm h1 tag</h1>
 *      </div>
 * </div>
 */

/**
 * <div id="parent">
 *      <div id="child">
 *              <h1>I'm h1 tag</h1>
 *              <h2>I'm h2 tag</h2>
 *      </div>
 * </div>
 */

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm h1 tag"),
    React.createElement("h2", {}, "I'm h2 tag"),
  ])
);

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React!"
);

console.log(parent); // React Element -> JavaScript Object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent); // React Element -> JavaScript Object -> render -> HTML
```

Example 3: 3️⃣

App.js

```js
/**
 * <div id="parent">
 *      <div id="child">
 *              <h1>I'm h1 tag</h1>
 *      </div>
 * </div>
 */

/**
 * <div id="parent">
 *      <div id="child">
 *              <h1>I'm h1 tag</h1>
 *              <h2>I'm h2 tag</h2>
 *      </div>
 * </div>
 */

/**
 * <div id="parent">
 *      <div id="child">
 *              <h1>I'm h1 tag</h1>
 *              <h2>I'm h2 tag</h2>
 *      </div>
 *      <div id="child2">
 *              <h1>I'm h1 tag</h1>
 *              <h2>I'm h2 tag</h2>
 *      </div>
 * </div>
 */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm h1 tag"),
    React.createElement("h2", {}, "I'm h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm h1 tag"),
    React.createElement("h2", {}, "I'm h2 tag"),
  ]),
]);

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React!"
);

console.log(parent); // React Element -> JavaScript Object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent); // React Element -> JavaScript Object -> render -> HTML
```

## Order matters! ⚠️

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

ERROR: React is not defined! 🚨

## Replaced! not appended 🔄

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
      <h1>Hi! Rahul</h1>
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

App.js

```js
/**
 * <div id="parent">
 *      <div id="child">
 *              <h1>I'm h1 tag</h1>
 *      </div>
 * </div>
 */

/**
 * <div id="parent">
 *      <div id="child">
 *              <h1>I'm h1 tag</h1>
 *              <h2>I'm h2 tag</h2>
 *      </div>
 * </div>
 */

/**
 * <div id="parent">
 *      <div id="child">
 *              <h1>I'm h1 tag</h1>
 *              <h2>I'm h2 tag</h2>
 *      </div>
 *      <div id="child2">
 *              <h1>I'm h1 tag</h1>
 *              <h2>I'm h2 tag</h2>
 *      </div>
 * </div>
 */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm h1 tag"),
    React.createElement("h2", {}, "I'm h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm h1 tag"),
    React.createElement("h2", {}, "I'm h2 tag"),
  ]),
]);

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React!"
);

console.log(parent); // React Element -> JavaScript Object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent); // React Element -> JavaScript Object -> render -> HTML
```

## Library or Framework 🤔

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
      <h1>Hi! Rahul</h1>
    </div>
    <h1>Bye!!</h1>

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

```js
/**
 * <div id="parent">
 *      <div id="child">
 *              <h1>I'm h1 tag</h1>
 *      </div>
 * </div>
 */

/**
 * <div id="parent">
 *      <div id="child">
 *              <h1>I'm h1 tag</h1>
 *              <h2>I'm h2 tag</h2>
 *      </div>
 * </div>
 */

/**
 * <div id="parent">
 *      <div id="child">
 *              <h1>I'm h1 tag</h1>
 *              <h2>I'm h2 tag</h2>
 *      </div>
 *      <div id="child2">
 *              <h1>I'm h1 tag</h1>
 *              <h2>I'm h2 tag</h2>
 *      </div>
 * </div>
 */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm h1 tag"),
    React.createElement("h2", {}, "I'm h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm h1 tag"),
    React.createElement("h2", {}, "I'm h2 tag"),
  ]),
]);

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React!"
);

console.log(parent); // React Element -> JavaScript Object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent); // React Element -> JavaScript Object -> render -> HTML
```

**Note: React is a library, not a framework. A library can work independently in small portion of the app, while framework is a full fledged application.** 📚

## HomeWork 📝

1. What is CDN? 🌐
2. What is crossorigin? 🔒
3. What is the difference between development and production CDN links? Can we use production links instead of development links? 🔄
