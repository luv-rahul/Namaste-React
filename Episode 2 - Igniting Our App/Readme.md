# 🙏 Namaste React - Episode 2 - Igniting Our App 🔥

---

### 📦 npm

npm doesn't stands for "node package manager".

But it is a package manager for node. 📝

We are going to initialise it using "npm init" command. This will create package.json file.

**📄 package.json is a configuration for npm.**

Our project depends on libraries or dependencies, package.json manages those dependencies. 🔗

### 📦 Bundler

1. 🔧 webpack
2. 📦 parcel
3. ⚡ vite

We will use parcel. Install parcel using "npm install -D parcel" 🚀

📄 package.json

```json
{
  "name": "namaste-react",
  "version": "1.0.0",
  "description": "This is Namaste React Course by Akshay Saini",
  "main": "App.js",
  "scripts": {
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
  }
}
```

### 🤔 What is the difference between caret(^) and tilda(~)?

- 🔺 Caret(^) is used for minor upgrades.
- 🔸 Tilda(~) is used for major upgrades.

### 🔒 Why there is package-lock.json?

It keeps the exact version of dependency. It maintains the same version in dev and production mode. ⚖️

### 📁 node_modules

It contains code of all dependencies used in our project. There are many files because one dependency can have their own dependency. 📚

Eg. Parcel have other dependencies, and those dependencies eventually have their own dependencies. This phenomena is known as "Transitive Dependency". 🔄

**⚠️ Note: We don't push bulky node_modules code onto GitHub. We use .gitignore file.**

If we have package.json and package-lock.json files. We can regenerate node_modules folder again using "npm install". ♻️

### 🚀 Igniting Our App

To execute our project: `npx parcel index.html` ⚡

This command will make parcel to execute our project.

Now, we are going to install react and react-dom packages instead of CDN links. 📡

###### 🤷‍♂️ Why we are not using CDN links now?

- 🌐 It is because we have to make network call to fetch React and then use it.
- 🔄 Also, If React versions upgrade, the URL needs to be changed which can be easily handled by package.json.

To install React and React-DOM we can run the command: 💻

- `npm install react`
- `npm install react-dom`

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

    <script src="./App.js" type="module"></script>
  </body>
</html>
```

📄 App.js

```js
import React from "react";
import ReactDOM from "react-dom/client";

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

### 🦾 Parcel is a Beast!!

- 🏗️ Dev Build
- 🖥️ Local Server
- 🔥 HMR = Hot Module Replacement (Automatic Refresh)
- 👀 Uses File Watching Algorithm (Written in C++)
- 💾 Caching (Faster Build)
- 🖼️ Image Optimization
- 🗜️ Minification of Files (Production Build)
- 📦 Bundling
- 🗜️ Compress File
- 🔐 Consistent Hashing
- ✂️ Code Splitting
- 🌐 Differential Bundling (Support Older Browsers)
- 🩺 Diagnostic
- ⚠️ Error Handling
- 🔒 HTTPs
- 🌳 Tree Shaking - Remove Unused Code
- 🔄 Different dev and prod Bundles

**📝 Note:** dist folder is maintained by parcel while building dev build or production build. We will not put .parcel-cache and dist on GitHub. They generate automatically while running project. 🔄

##### 🌐 browserslist configuration

visit browserslist.dev 🔗

📄 package.json

```json
{
  "name": "namaste-react",
  "version": "1.0.0",
  "description": "This is Namaste React Course by Akshay Saini",
  "scripts": {
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

---

### 🎯 Key Takeaways

- ✅ Learned about npm and package.json configuration
- ✅ Set up Parcel as our bundler
- ✅ Understood the difference between ^ and ~ in version control
- ✅ Explored the power of Parcel's features
- ✅ Successfully ignited our React app! 🎉