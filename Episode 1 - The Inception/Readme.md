# Namaste React Episode 1 - The Inception

## Tips to Make the Best Out of This Course

1. Make your own notes
2. Use your laptop
3. Maintain a GitHub repository

---

## 🌐 Hello World Using HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Namaste React - Episode 1</title>
</head>
<body>
    <div id="root">
        <h1>Hello World!</h1>
    </div>
</body>
</html>
```

---

## 🌐 Hello World Using JavaScript

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Namaste React - Episode 1</title>
</head>
<body>
    <div id="root"></div>
    <script>
        const heading = document.createElement("h1");
        console.log(heading);
        heading.innerHTML = "Hello World using JavaScript!";

        const root = document.getElementById("root");
        console.log(root);

        root.appendChild(heading);
    </script>
</body>
</html>
```

### Understanding React Dependencies

Our browser doesn't know about React by default. We need to inject React into our project using CDN links:

```html
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
```

**Why two separate files?**
- **First file**: Core React library
- **Second file**: React DOM for DOM manipulation

React is also used for mobile development (React Native), so the code is kept modular and separated.

---

## 🌐 Hello World Using React

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Namaste React - Episode 1</title>
</head>
<body>
    <div id="root"></div>
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script>
        const heading = React.createElement("h1", {}, "Hello World using React!");
        
        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(heading);
    </script>
</body>
</html>
```

### Separating Code into Files

**App.js**
```javascript
const heading = React.createElement(
    "h1",
    { id: "heading" },
    "Hello World using React!"
);

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
```

**index.css**
```css
#heading {
    color: red;
}
```

---

## Creating Nested Structures

### Example 1: Simple Nesting

```html
<div id="parent">
    <div id="child">
        <h1>I'm h1 tag</h1>
    </div>
</div>
```

```javascript
const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
        "div",
        { id: "child" },
        React.createElement("h1", {}, "I'm h1 tag")
    )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
```

### Example 2: Multiple Siblings

```html
<div id="parent">
    <div id="child">
        <h1>I'm h1 tag</h1>
        <h2>I'm h2 tag</h2>
    </div>
</div>
```

```javascript
const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement("div", { id: "child" }, [
        React.createElement("h1", {}, "I'm h1 tag"),
        React.createElement("h2", {}, "I'm h2 tag"),
    ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
```

### Example 3: Complex Nested Structure

```html
<div id="parent">
    <div id="child1">
        <h1>I'm h1 tag</h1>
        <h2>I'm h2 tag</h2>
    </div>
    <div id="child2">
        <h1>I'm h1 tag</h1>
        <h2>I'm h2 tag</h2>
    </div>
</div>
```

```javascript
const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child1" }, [
        React.createElement("h1", {}, "I'm h1 tag"),
        React.createElement("h2", {}, "I'm h2 tag"),
    ]),
    React.createElement("div", { id: "child2" }, [
        React.createElement("h1", {}, "I'm h1 tag"),
        React.createElement("h2", {}, "I'm h2 tag"),
    ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
```

---

## React Replaces, Not Appends

When React renders content, it **replaces** the existing content in the root element, rather than appending to it.

### Example: Content Replacement

**index.html**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Namaste React - Episode 1</title>
    <link rel="stylesheet" href="./index.css">
</head>
<body>
    <h1>Hello!</h1>
    <div id="root">
        <h1>Namaste React!!</h1>
    </div>
    <h1>Bye!</h1>
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="./App.js"></script>
</body>
</html>
```

The content "Namaste React!!" inside the root div will be replaced by whatever React renders. The "Hello!" and "Bye!" elements outside the root div will remain unchanged.

---

## Library vs Framework

| Library | Framework |
|---------|-----------|
| A piece of code that can be used in existing apps or small portions of an app | A full-fledged solution used to build entire applications |
| **React is a library** | Examples: Flutter |

React gives you the flexibility to integrate into existing projects or use it for specific parts of your application, making it a powerful library rather than a restrictive framework.