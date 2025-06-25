# Namaste React Episode 5 - Let's get Hooked

## Project Structure Best Practices

According to industry convention:

1. Create a `src` folder and subfolder `components`
2. Make separate file for separate component
3. While creating folder, don't worry about `.js` or `.jsx` extension

After separating the components, we will export and import the component:

```javascript
import FILE from "...path";

export default ComponentName;
```

Also we can make either `common/config/utils` folder and file named as `constant.js` to put all the static data inside it. We will never use static data inside our components.

## Types of Export/Import

### 1. Default Export/Import

When we export a single thing from a file:

```javascript
export default ComponentName;
```

For import:

```javascript
import ComponentName from "...path";
```

### 2. Named Export/Import

When we export multiple things from a file:

```javascript
export const a = 10;
```

For import:

```javascript
import { var1, var2 } from "...path";
```

## React Hooks

React is fast because it is efficient in DOM manipulation.

### React Hook is a normal JavaScript function that comes with a super power.

Two important hooks:

1. `useState()` - To create Superpowerful State Variable
2. `useEffect()`

## Problem: UI doesn't filter on clicking button

```javascript
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockdata";

const Body = () => {
  // Normal JS Variable
  let listOfRestaurant = [
    {
      info: {
        id: "1003414",
        name: "Pizza Hut",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/a1e023e4-bdf3-4bcb-b4d9-2498ba52528e_1003414.JPG",
        costForTwo: "₹350 for two",
        cuisines: ["Pizzas"],
        avgRating: 3.8,
      },
    },
    {
      info: {
        id: "1003415",
        name: "Dominos",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/a1e023e4-bdf3-4bcb-b4d9-2498ba52528e_1003414.JPG",
        costForTwo: "₹350 for two",
        cuisines: ["Pizzas"],
        avgRating: 4.5,
      },
    },
    {
      info: {
        id: "1003416",
        name: "MCD",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/a1e023e4-bdf3-4bcb-b4d9-2498ba52528e_1003414.JPG",
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
            listOfRestaurant = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4
            );
            console.log(listOfRestaurant);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurant.map((restaurant) => (
          <RestaurantCard resData={restaurant} key={restaurant.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
```

## Solution: Using State Variables

To fix above issue, we need to create a State Variable using React Hooks.

```javascript
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockdata";
import { useState } from "react";

const Body = () => {
  // State Variable
  const [listOfRestaurant, setlistOfRestaurant] = useState([
    {
      info: {
        id: "1003414",
        name: "Pizza Hut",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/a1e023e4-bdf3-4bcb-b4d9-2498ba52528e_1003414.JPG",
        costForTwo: "₹350 for two",
        cuisines: ["Pizzas"],
        avgRating: 3.8,
      },
    },
    {
      info: {
        id: "1003415",
        name: "Dominos",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/a1e023e4-bdf3-4bcb-b4d9-2498ba52528e_1003414.JPG",
        costForTwo: "₹350 for two",
        cuisines: ["Pizzas"],
        avgRating: 4.5,
      },
    },
    {
      info: {
        id: "1003416",
        name: "MCD",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/a1e023e4-bdf3-4bcb-b4d9-2498ba52528e_1003414.JPG",
        costForTwo: "₹350 for two",
        cuisines: ["Pizzas"],
        avgRating: 4.1,
      },
    },
  ]);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredListOfRestaurant = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4
            );
            console.log(filteredListOfRestaurant);
            setlistOfRestaurant(filteredListOfRestaurant);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurant.map((restaurant) => (
          <RestaurantCard resData={restaurant} key={restaurant.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
```

## Final Implementation: Using Mock Data

```javascript
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockdata";
import { useState } from "react";

const Body = () => {
  // State Variable
  const [listOfRestaurant, setlistOfRestaurant] = useState(resList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredListOfRestaurant = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4.3
            );
            console.log(filteredListOfRestaurant);
            setlistOfRestaurant(filteredListOfRestaurant);
          }}
        >
          Top Rated Restaurant
        </button>
        <button
          onClick={() => {
            setlistOfRestaurant(resList);
          }}
        >
          All
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurant.map((restaurant) => (
          <RestaurantCard resData={restaurant} key={restaurant.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
```

# React Reconciliation Algorithm (React Fiber)

The Reconciliation Algorithm, also known as React Fiber, was introduced in React 16. This algorithm is responsible for efficiently updating the user interface by comparing Virtual DOM representations and applying only the necessary changes to the actual DOM.

## Overview

Consider a scenario where we have a res-container displaying 7 cards, and we want to filter it down to show only 3 cards. The reconciliation process handles this update efficiently.

## DOM Structure

### Actual DOM

The actual DOM structure for our cards would look like:

```html
<div>
  <div>
    <img />
  </div>
</div>
```

### Virtual DOM

The Virtual DOM represents the actual DOM as JavaScript objects:

```javascript
{
    props: {},
    type: ""
}
```

## What is Virtual DOM?

**Virtual DOM is a representation of the Actual DOM.**

It's a lightweight JavaScript representation that React uses internally to track the state of your UI components.

## The Diff Algorithm

The Diff Algorithm is the core mechanism that finds differences between two Virtual DOM trees:

- **Previous Virtual DOM**: Represents the current state (7 cards in our example)
- **Updated Virtual DOM**: Represents the new desired state (3 cards after filtering)

### Process Flow

1. **Compare**: The Diff Algorithm compares the Updated Virtual DOM with the Previous Virtual DOM
2. **Identify Changes**: It identifies what has changed, been added, or been removed
3. **Update UI**: Based on the differences found, it updates only the necessary parts of the actual DOM

## Example Scenario

When filtering from 7 cards to 3 cards:

1. Previous Virtual DOM represents all 7 cards
2. New Virtual DOM represents the filtered 3 cards
3. Diff Algorithm identifies that 4 cards need to be removed
4. Only those 4 cards are removed from the actual DOM, leaving the 3 remaining cards untouched

**Note:**

```jsx
const arr = useState(resList);

//const [listOfRestaurant,setlistOfRestaurant] = arr;

const [listOfRestaurant] = arr[0];
const [setlistOfRestaurant] = arr[1];
```
