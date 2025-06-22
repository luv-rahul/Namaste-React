# Namaste React Episode 3 - Laying the Foundation

## Setup and Configuration

Initially, we were running the project using command `npx parcel index.html`. Now, we can configure the `package.json` file with the following scripts:

```json
"scripts": {
  "test": "jest",
  "start": "parcel index.html",
  "build": "parcel build index.html"
}
```

Now we can use:
- `npm start` or `npm run start` to start the project in development mode
- `npm run build` for production build

## Initial Project Structure

### index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Namaste React</title>
    <link rel="stylesheet" href="./index.css">
</head>
<body>
    <div id="root">
        <h1>Not Rendered</h1>
    </div>
    <script src="./App.js" type="module"></script>
</body>
</html>
```

### index.css
```css
#heading {
  color: red;
}
```

### App.js
```javascript
import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", { id: "heading" }, "Namaste React");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
```

## Introduction to JSX

JSX is a syntax extension that makes creating React elements easier than using `React.createElement()`. It provides an HTML-like syntax that gets transpiled to JavaScript.

### JSX vs React.createElement()

```javascript
import React from "react";
import ReactDOM from "react-dom/client";

// Using React.createElement
const heading = React.createElement("h1", { id: "heading" }, "Namaste React");

// Using JSX
const jsxHeading = <h1 id="heading">Namaste React using JSX</h1>;

console.log(heading); // ReactElement => JavaScript Object
console.log(jsxHeading); // ReactElement => JavaScript Object

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);
```

## Babel Transpilation

JSX is not valid JavaScript by itself. Babel transpiles JSX into `React.createElement()` calls:

**JSX → React.createElement → React Element → Object → render → HTML**

```javascript
import React from "react";
import ReactDOM from "react-dom/client";

const jsxHeading = <h1 id="heading">Namaste React using JSX</h1>; 

console.log(jsxHeading); // ReactElement => JavaScript Object

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);
```

## JSX Syntax Rules

### Use className instead of class
```javascript
const jsxHeading = <h1 className="heading">Namaste React using JSX</h1>;
```

### Multi-line JSX should be wrapped in parentheses
```javascript
const jsxHeading = (
    <h1 className="heading">
        Namaste React using JSX
    </h1>
);
```

## Recommended VS Code Extensions

1. Prettier
2. Bracket Pair Colorizer
3. ESLint
4. Better Comments

## React Components

There are two types of React Components:
1. **Class Based Component** - Legacy approach
2. **Functional Component** - Modern approach

### Functional Component

A React Functional Component is a JavaScript function that returns JSX or a React Element.

```javascript
import React from "react";
import ReactDOM from "react-dom/client";

const HeadingComponent = () => {
  return (
    <div id="container">
      <h1 className="heading">Namaste React using Functional Component</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);
```

## Component Composition

Component composition involves using one component inside another component.

```javascript
import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => {
  return <h1>Hello React!</h1>;
};

const HeadingComponent = () => {
  return (
    <div id="container">
      <Title />
      <h1 className="heading">Namaste React using Functional Component</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
```

## JavaScript Expressions in JSX

Use curly braces `{}` to embed JavaScript expressions inside JSX:

```javascript
import React from "react";
import ReactDOM from "react-dom/client";

const heading = <h1 className="heading">Namaste React using JSX</h1>;

const Title = () => {
  return <h1>Hello React!</h1>;
};

const HeadingComponent = () => {
  return (
    <div id="container">
      <Title />
      {heading} 
      <h1 className="heading">Namaste React using Functional Component</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
```

## Cross-Site Scripting (XSS) Prevention

JSX automatically sanitizes data to prevent XSS attacks:

```javascript
const data = api.getData();

const HeadingComponent = () => {
  return (
    <div id="container">
      {data}
      <h1 className="heading">Namaste React using Functional Component</h1>
    </div>
  );
};
```

## Different Ways to Render Components

```javascript
import React from "react";
import ReactDOM from "react-dom/client";

const heading = <h1 className="heading">Namaste React using JSX</h1>;

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
```

## Key Takeaway

JSX makes React code more readable and maintainable by providing an HTML-like syntax for creating React elements.