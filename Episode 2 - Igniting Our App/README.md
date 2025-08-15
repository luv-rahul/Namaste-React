# Namaste React: Episode 2 - Igniting Our App

---

We are going to create our own "create-react-app".

## npm

npm is a **node package manager** but it doesn't **stands for node package manager**.
npm is a repository which contains packages.

package.json

```json
{
  "name": "episode2",
  "version": "1.0.0",
  "description": "This is Namaste React taught by Akshay Saini",
  "main": "App.js",
  "scripts": {
    "test": "jest"
  },
  "keywords": ["javascript", "reactjs"],
  "author": "Rahul",
  "license": "ISC"
}
```

package.json file contains the dependencies and their versions of the project.

## parcel - a bundler

- npm install -D parcel

```json
{
  "name": "episode2",
  "version": "1.0.0",
  "description": "This is Namaste React taught by Akshay Saini",
  "main": "App.js",
  "scripts": {
    "test": "jest"
  },
  "keywords": ["javascript", "reactjs"],
  "author": "Rahul",
  "license": "ISC",
  "devDependencies": {
    "parcel": "^2.15.4"
  }
}
```

Difference between caret(^) and tilde(~) ?

- In case of minor upgrade (^) will upgrade the package version to a minor version.
- In case of major upgrade (~) will upgrade the package version to major version.

**package-lock.json locks the version of the package. So that if version of package changes, it doesn't crash our app.**

## node modules

node modules contains the data of our dependencies.

Why there are many files in node_modules?

- Actually, parcel also have their dependencies, and those dependencies also have their own dependency. This phenomena is known as transitive dependency.

- Also, don't put node_modules on GitHub. Put it into a .gitignore file.

Should i put package.json & package-lock.json ?

- Yes, they contains the configuration of packages used in our project, we can regenerate "node_modules" again with the command "npm install".

## Ignite our App

- npx parcel index.html

Parcel executes our code and hosted it on server localhost:1234

```js
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
```

These CDN scripts are not a good way to execute React.

Good way:

- npm install react
- npm i react-dom

package.json

```json
{
  "name": "namaste-react",
  "version": "1.0.0",
  "description": "This is Namaste React taught by Akshay Saini",
  "scripts": {
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
    <h1>Hello!</h1>
    <div id="root">
      <h1>Hi! Rahul</h1>
    </div>
    <h1>Bye!!</h1>

    <script type="module" src="./App.js"></script>
  </body>
</html>
```

App.js

```js
import React from "react";
import ReactDOM from "react-dom/client";

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

## parcel

- Dev Build
- Local Server
- HMR (Hot module replacement)
