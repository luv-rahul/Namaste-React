# Namaste React Episode 6 - Exploring the World

## Monolith vs Microservice Architecture

### Monolith Architecture
An architecture which contains multiple services such as API codes, UI codes, Auth codes, DB, SMS codes etc. in the same project.

If we want to change one thing in the code, we have to again build the project to reflect those changes.

All teams members working on same project folder.

### Microservice Architecture
An architecture which have different services for different work. Backend Service, UI Service, Auth Service, DB Service, SMS Service, Email Notification Service.

All these microservices talk to each other depending upon use cases & combined to form a full project.

**Follows Single Responsibility Principle**

All teams members working independently on their respective service. Even these microservices can be written in different language depending on use case. Also, these independent services run on different port.

## Approaches to getData from an API

1. **Page Loads → API → Render**
2. **Page Loads → Render UI → API → Render** *(Better Approach - Better UX)*

> React is popular because its rendering cycle is very fast.

## useEffect Hook

The `useEffect(()=>{}, [])` callback function is called after the component renders.

### Basic Implementation

```jsx
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockdata";
import { useState, useEffect } from "react";

const Body = () => {
  const [listOfRestaurant, setlistOfRestaurant] = useState(resList);

  useEffect(() => {
    console.log("useEffect called!");
  }, []);

  console.log("Body Rendered!");

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

> The `fetch()` method to make an API call is provided by browsers, not by JavaScript.

## Swiggy API Integration

### Fetching Data from API

```jsx
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";

const Body = () => {
  const [listOfRestaurant, setlistOfRestaurant] = useState([]);

  const fetchData = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6139298&lng=77.2088282&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
    );
    const json = await data.json();
    console.log(json);

    setlistOfRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  useEffect(() => {
    console.log("useEffect called!");
    fetchData();
  }, []);

  console.log("Body Rendered!");

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

### Adding Loading State

```jsx
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";

const Body = () => {
  const [listOfRestaurant, setlistOfRestaurant] = useState([]);

  const fetchData = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6139298&lng=77.2088282&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
    );
    const json = await data.json();
    console.log(json);

    setlistOfRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  useEffect(() => {
    console.log("useEffect called!");
    fetchData();
  }, []);

  console.log("Body Rendered!");

  if (listOfRestaurant.length === 0) {
    return <h1>Loading...</h1>;
  }

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

# Shimmer UI

## Shimmer.js
const Shimmer = () => {
  return (
    <div className="shimmer-container">
      <div className="shimmer-card"></div>
      <div className="shimmer-card"></div>
      <div className="shimmer-card"></div>
      <div className="shimmer-card"></div>
      <div className="shimmer-card"></div>
      <div className="shimmer-card"></div>
      <div className="shimmer-card"></div>
      <div className="shimmer-card"></div>
      <div className="shimmer-card"></div>
      <div className="shimmer-card"></div>
      <div className="shimmer-card"></div>
      <div className="shimmer-card"></div>
      <div className="shimmer-card"></div>
      <div className="shimmer-card"></div>
      <div className="shimmer-card"></div>
    </div>
  );
};

export default Shimmer;

## index.css
.shimmer-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.shimmer-card {
  height: 300px;
  width: 250px;
  background-color: rgba(128, 128, 128, 0.582);
  border-radius: 10px;
  padding: 5px;
  margin: 5px;
}

## Body.js
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  // State Variable
  const [listOfRestaurant, setlistOfRestaurant] = useState([]);

  const fetchData = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6139298&lng=77.2088282&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
    );
    const json = await data.json();
    console.log(json);

    setlistOfRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  useEffect(() => {
    console.log("useEffect called!");
    // fetchData
    fetchData();
  }, []);

  console.log("Body Rendered!"); // Printed Body Rendered! before than useEffect called!

  if (listOfRestaurant.length === 0) {
    return <Shimmer/>;
  }

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // Filter Logic
            const filteredListOfRestaurant = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4.3
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

### Conditional Rendering

if (listOfRestaurant.length === 0) {
    return <Shimmer />;
}

## Optimized Code using Conditional Rendering
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  // State Variable
  const [listOfRestaurant, setlistOfRestaurant] = useState([]);

  const fetchData = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6139298&lng=77.2088282&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
    );
    const json = await data.json();

    setlistOfRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  useEffect(() => {
    // fetchData
    fetchData();
  }, []);

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // Filter Logic
            const filteredListOfRestaurant = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4.3
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

## Note:
Whenever the state changes, React re-renders the whole component again.

Also, how const variable value get's updated using setbtnName even if it is declared as const? Doesn't it invalidate the rule of JavaScript?

Basically, React will create a new variable btnName, when it re - renders. Also, with updated value.

```jsx 
const [btnName, setbtnName] = useState("Login");
```
## Toggle Login / Logout Button
```jsx
import { useState } from "react";
import { LOGO_URL } from "../utils/constant";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnName == "Login" ? setbtnName("Logout") : setbtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
```

## Note: Whenever state variable changes/updates, React re - renders the component (Triggers Re-conciliation cycle), but only updates the changed thing. Also, React is faster beacuse of efficient DOM manipulation due to faster Reconciliation cycle. 

# Search Functionality
```jsx
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  // State Variable
  const [listOfRestaurant, setlistOfRestaurant] = useState([]);
  const [searchText, setsearchText] = useState("");

  const fetchData = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6139298&lng=77.2088282&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
    );
    const json = await data.json();
    console.log(json);
    setlistOfRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  useEffect(() => {
    // fetchData
    fetchData();
  }, []);

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          ></input>
          <button
            onClick={() => {
              // Filter the Restaurant Cards and Update the UI
              console.log(searchText);

              const filteredRestaurant = listOfRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setlistOfRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            // Filter Logic
            const filteredListOfRestaurant = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4.3
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

## In previous code, there was a bug that we were updating list of restaurants on searching. Since on our first search our list of restaurants were updating and on second time searching our UI won't able to find the element. 

# Fix: 
```jsx
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  // State Variable
  const [listOfRestaurant, setlistOfRestaurant] = useState([]);
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);
  const [searchText, setsearchText] = useState("");

  const fetchData = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6139298&lng=77.2088282&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
    );
    const json = await data.json();
    console.log(json);
    setlistOfRestaurant(
      json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRestaurant(
      json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  useEffect(() => {
    // fetchData
    fetchData();
  }, []);

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          ></input>
          <button
            onClick={() => {
              // Filter the Restaurant Cards and Update the UI
              console.log(searchText);

              const filteredRestaurant = listOfRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            // Filter Logic
            const filteredListOfRestaurant = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4.3
            );
            setfilteredRestaurant(filteredListOfRestaurant);
          }}
        >
          Top Rated Restaurant
        </button>
        <button
          onClick={() => {
            setfilteredRestaurant(listOfRestaurant);
          }}
        >
          All
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard resData={restaurant} key={restaurant.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
```