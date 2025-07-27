# Namaste React Episode 5 - Let's get Hooked! 🚀

---

### Best Practices: 📝

1. Create a src folder. 📁
2. Move App.js inside src folder. 📂
3. Make components folder inside src folder. 🧩
4. Move all components inside components folder. 📦
5. Make utils folder inside src folder. 🔧
6. Make constant.js file inside utils folder and move all constants inside constant.js. 📋

## Import / Export 📤📥

There are two types of export / import:

1. Default export / import (Single Thing) 🎯

- export default Component;
- import Component from "./path";

2. Named export / import (Multiple Things) 🎪

- export const Component;
- import {Component} from "./path";

## Structured Code 🏗️

index.html 📄

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Namaste React</title>
    <link rel="stylesheet" href="./index.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
      rel="stylesheet"
    />
  </head>

  <body>
    <div id="root">
      <h1>Not Rendered</h1>
    </div>

    <script src="./src/App.js" type="module"></script>
  </body>
</html>
```

App.js ⚛️

```js
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
```

Header.js 🏠

```js
import { LOGO_URL } from "../utils/constant";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <div>Home</div>
        <div>About</div>
        <div>Contact</div>
        <div>Cart</div>
      </div>
    </div>
  );
};

export default Header;
```

Body.js 💪

```js
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
```

Restaurant Card.js 🍽️

```js
import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, costForTwo, cuisines, areaName } =
    resData?.info;
  return (
    <div className="res-card">
      <div className="res-image">
        <img className="res-logo" src={CDN_URL + cloudinaryImageId}></img>
      </div>
      <div className="res-desc">
        <div className="res-name">{name}</div>
        <div className="res-rating-time">
          &#9733; {avgRating} - {costForTwo}
        </div>
        <div className="res-cuisines">{cuisines.join(", ")}</div>
        <div className="res-area">{areaName}</div>
      </div>
    </div>
  );
};

export default RestaurantCard;
```

constant.js 📊

```js
export const LOGO_URL =
  "https://cdn.brandfetch.io/ideeTxiKQK/w/800/h/1181/theme/dark/symbol.png?c=1bxid64Mup7aczewSAYMX&t=1668517464348";

export const CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
```

mockData.js 🧪

```js
q;
```

### Filtering Restaurants 🔍

Normal JavaScript Variable don't update the UI on clicking button. ❌

```js
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {
  let listOfRestaurants = [
    {
      info: {
        id: "16865",
        name: "Pizza Hut",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/ad775229-6f24-4858-8234-b974d501c013_16865.JPG",
        areaName: "Connaught Place",
        costForTwo: "₹350 for two",
        cuisines: ["Pizzas"],
        avgRating: 4.3,
      },
    },
    {
      info: {
        id: "16866",
        name: "Dominos",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/ad775229-6f24-4858-8234-b974d501c013_16865.JPG",
        areaName: "Connaught Place",
        costForTwo: "₹350 for two",
        cuisines: ["Pizzas"],
        avgRating: 4.5,
      },
    },
    {
      info: {
        id: "16867",
        name: "MacDonalds",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/ad775229-6f24-4858-8234-b974d501c013_16865.JPG",
        areaName: "Connaught Place",
        costForTwo: "₹350 for two",
        cuisines: ["Pizzas"],
        avgRating: 4.1,
      },
    },
  ];

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // Filter Logic
            listOfRestaurants = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.4
            );

            console.log(listOfRestaurants);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
```

## React Hooks 🎣

- React Hooks are a normal JavaScript function. 🔧
- React Hooks are used to create React State Variable. 📊

1. useState() 📊
2. useEffect() ⚡

Body.js 💪

```js
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  // State Variable 📊
  const [listOfRestaurants, setListOfRestaurants] = useState([
    {
      info: {
        id: "16865",
        name: "Pizza Hut",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/ad775229-6f24-4858-8234-b974d501c013_16865.JPG",
        areaName: "Connaught Place",
        costForTwo: "₹350 for two",
        cuisines: ["Pizzas"],
        avgRating: 4.3,
      },
    },
    {
      info: {
        id: "16866",
        name: "Dominos",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/ad775229-6f24-4858-8234-b974d501c013_16865.JPG",
        areaName: "Connaught Place",
        costForTwo: "₹350 for two",
        cuisines: ["Pizzas"],
        avgRating: 4.5,
      },
    },
    {
      info: {
        id: "16867",
        name: "MacDonalds",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/ad775229-6f24-4858-8234-b974d501c013_16865.JPG",
        areaName: "Connaught Place",
        costForTwo: "₹350 for two",
        cuisines: ["Pizzas"],
        avgRating: 4.1,
      },
    },
  ]);

  // Normal JS Variable 📝
  // let listOfRestaurants = [
  //   {
  //     info: {
  //       id: "16865",
  //       name: "Pizza Hut",
  //       cloudinaryImageId:
  //         "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/ad775229-6f24-4858-8234-b974d501c013_16865.JPG",
  //       areaName: "Connaught Place",
  //       costForTwo: "₹350 for two",
  //       cuisines: ["Pizzas"],
  //       avgRating: 4.3,
  //     },
  //   },
  //   {
  //     info: {
  //       id: "16866",
  //       name: "Dominos",
  //       cloudinaryImageId:
  //         "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/ad775229-6f24-4858-8234-b974d501c013_16865.JPG",
  //       areaName: "Connaught Place",
  //       costForTwo: "₹350 for two",
  //       cuisines: ["Pizzas"],
  //       avgRating: 4.5,
  //     },
  //   },
  //   {
  //     info: {
  //       id: "16867",
  //       name: "MacDonalds",
  //       cloudinaryImageId:
  //         "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/ad775229-6f24-4858-8234-b974d501c013_16865.JPG",
  //       areaName: "Connaught Place",
  //       costForTwo: "₹350 for two",
  //       cuisines: ["Pizzas"],
  //       avgRating: 4.1,
  //     },
  //   },
  // ];

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // Filter Logic 🔍
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.4
            );

            setListOfRestaurants(filteredList);
            console.log(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
```

**Whenever a state variable updates, React will re-render my component.** 🔄

### Using resList 📋

```js
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  // State Variable 📊
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  // Normal JS Variable 📝
  // let listOfRestaurants = [
  //   {
  //     info: {
  //       id: "16865",
  //       name: "Pizza Hut",
  //       cloudinaryImageId:
  //         "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/ad775229-6f24-4858-8234-b974d501c013_16865.JPG",
  //       areaName: "Connaught Place",
  //       costForTwo: "₹350 for two",
  //       cuisines: ["Pizzas"],
  //       avgRating: 4.3,
  //     },
  //   },
  //   {
  //     info: {
  //       id: "16866",
  //       name: "Dominos",
  //       cloudinaryImageId:
  //         "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/ad775229-6f24-4858-8234-b974d501c013_16865.JPG",
  //       areaName: "Connaught Place",
  //       costForTwo: "₹350 for two",
  //       cuisines: ["Pizzas"],
  //       avgRating: 4.5,
  //     },
  //   },
  //   {
  //     info: {
  //       id: "16867",
  //       name: "MacDonalds",
  //       cloudinaryImageId:
  //         "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/ad775229-6f24-4858-8234-b974d501c013_16865.JPG",
  //       areaName: "Connaught Place",
  //       costForTwo: "₹350 for two",
  //       cuisines: ["Pizzas"],
  //       avgRating: 4.1,
  //     },
  //   },
  // ];

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // Filter Logic 🔍
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.4
            );

            setListOfRestaurants(filteredList);
            console.log(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
```

## Reconciliation Algorithm (React Fiber) 🎯

This algorithm came in React 16. ⚛️

Conside a situation:- 🤔
Suppose we have 7 restaurant cards. Now, my UI changes from 7 cards to 3 cards after filtering.

Actual DOM: 🌳

```html
<div>
  <div>
    <img />
  </div>
</div>
```

React creates a Virtual DOM of Actual DOM. 🌐

**Virtual DOM is a representation of Actual DOM. Virtual DOM is a JavaScript Object.** 📦
Note: Since Component returns JSX, which is eventually a React Element which is again a JS Object. That Object tree is Virtual DOM.

**Diff Algorithm** 🔍
This algorithm finds out the difference between previous virtual dom and updated virtual dom. Once it found out the difference, it will update the UI.

### HomeWork: 📚

Read about React Fiber Architecture on github. 🔗

**Note:** 📝
We can also do this:

```js
const arr = useState(resList);
// const [listOfRestaurants, setListOfRestaurants] = arr;

const listOfRestaurants = arr[0];
const setListOfRestaurants = arr[1];
```
