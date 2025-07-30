# Namaste React Episode 6 - Exploring the World! 🚀

---

## Monolith vs Microservices 🏗️

1. **Monolith Architecture** 🏢

- In this architecture, all the code of Frontend, Backend, API, Auth, Database, Notifications etc. are written in a single service.

- If we have to change a single line, then we have to build the whole project again. 🔄

2. **Microservice Architecture** 🧩

- In this architecture, we have multiple services (Backend, Frontend, Auth, Database, SMS, Email) i.e. different service for different work.
- All these services, combine to form a big app. 🔗

**Note: This architecture follows single responsibility principle or seperation of concern.** ⚖️

- We can use different tech stack for different services. 🛠️
- Also, these services are deployed on different port. 🌐

## API Call 📡

There are two ways:

1. Load → API → Render 📥
2. Load → Render → API → Render 🎨

In react, we will always be using second approach. This approach will give better UX. ✨

**React is fast because it's render cycle is very fast.** ⚡

## useEffect 🎯

```js
useEffect(() => {
  console.log("useEffect Called!");
}, []);
```

This hook is called after the component is rendered. 🔄

```js
useEffect(() => {
  console.log("useEffect Called!");
}, []);

console.log("Body Rendered");
```

## Dynamic Data using API 📊

Body.js

```js
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import { API_URL } from "../utils/constant";

const Body = () => {
  // State Variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    console.log("useEffect Called!");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(API_URL);
    const json = await data.json();
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // Filter Logic
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

## Shimmer UI ✨

```js
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import { API_URL } from "../utils/constant";

const Body = () => {
  // State Variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    console.log("useEffect Called!");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(API_URL);
    const json = await data.json();
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (listOfRestaurants.length === 0) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // Filter Logic
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

Shimmer.js

```js
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
    </div>
  );
};

export default Shimmer;
```

## Conditional Rendering 🔀

Body.js

```js
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import { API_URL } from "../utils/constant";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    console.log("useEffect Called!");
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(API_URL);
      const json = await data.json();
      setListOfRestaurants(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch {
      console.warn("Error Fetching Cards");
    }
  };

  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // Filter Logic
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

```js
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import { API_URL } from "../utils/constant";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(API_URL);
      const json = await data.json();
      setListOfRestaurants(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (err) {
      alert("Error Fetching Cards");
    }
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // Filter Logic
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.4
            );

            setListOfRestaurants(filteredList);
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

### useState in Header 📝

Normal JavaScript Variable doesn't work: ❌

```js
import { LOGO_URL } from "../utils/constant";

const Header = () => {
  let btnName = "Login";

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
        <div>
          <button
            className="login-btn"
            onClick={() => {
              btnName = "Logout";
              console.log(btnName);
            }}
          >
            {btnName}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
```

**React will re-render the page when state variable changes.** 🔄

Header.js

**On clicking button, React re-renders the component again.** 🔄

```js
import { LOGO_URL } from "../utils/constant";
import { useState } from "react";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  console.log("Header Rendered");

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
        <div>
          <button
            className="login-btn"
            onClick={() => {
              setBtnName("Logout");
            }}
          >
            {btnName}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
```

How we are changing a const variable value in React? 🤔

```js
const [btnName, setBtnName] = useState("Login");
```

- React will re-render the component again when state variable changes. At that time, new state variable is made again. 🆕

### Toggle Button 🔄

Header.js

```js
import { LOGO_URL } from "../utils/constant";
import { useState } from "react";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  console.log("Header Rendered");

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
        <div>
          <button
            className="login-btn"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
```

## React re-render the component whenever state changes 🔄

Body.js

```js
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import { API_URL } from "../utils/constant";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(API_URL);
      const json = await data.json();
      setListOfRestaurants(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (err) {
      alert("Error Fetching Cards");
    }
  };

  console.log("Body Rendered");

  return listOfRestaurants.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // Filter Logic
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.4
            );

            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
        <div className="search">
          <input
            className="search-input"
            type="text"
            placeholder="Search Restaurants"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="search-btn"
            onClick={() => {
              console.log(searchText);
            }}
          >
            Search
          </button>
        </div>
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

### Search Functionality 🔍

```js
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import { API_URL } from "../utils/constant";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState(
    []
  );
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(API_URL);
      const json = await data.json();
      setListOfRestaurants(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredListOfRestaurants(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (err) {
      alert("Error Fetching Cards");
    }
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // Filter Logic
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.4
            );

            setFilteredListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
        <div className="search">
          <input
            className="search-input"
            type="text"
            placeholder="Search Restaurants"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="search-btn"
            onClick={() => {
              console.log(searchText);
              const filteredList = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredListOfRestaurants(filteredList);
              console.log(listOfRestaurants);
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className="res-container">
        {filteredListOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
```
**Code slow! Take less time!!** ⚡