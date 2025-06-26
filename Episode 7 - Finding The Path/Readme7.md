# Namaste React Episode 7 - Finding The Path

# useEffect

**Note:**
If no depedency array is present, then useEffect is called on every render of component.

```jsx
useEffect(() => {
  console.log("useEffect Called");
});
```

But, if dependency array is present, it will be called (just once) only when it is initialised on first render.

```jsx
useEffect(() => {
  console.log("useEffect Called");
}, []);
```

And it will only be called when the dependency changes.

```jsx
useEffect(() => {
  console.log("useEffect Called");
}, [btnName]);
```

# useState

**Note:**
Never call Hook outside the component. Always call Hook inside the component.

!!Wrong!!

```jsx
const[var,setvar] = useState();

const Component = () => {
    return <h1>Hello</h1>;
};
```

Never create the Hook inside the if-else/ for loop / function

!!Wrong!!

```jsx
if () {
    const[var,setvar] = useState();
}

for() {
    const[var,setvar] = useState();
}

function() {
    const[var,setvar] = useState();
}
```

# Routing

## App.js

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider } from "react-router"; // React Router Library
import About from "./components/About";
import Contact from "./components/Contact";

const AppLayout = () => {
  return (
    <div className="app">
      {/* Header */}
      <Header />
      <hr></hr>
      {/* Body */}
      <Body />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
```

# Error Route and Page

## App.js

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider } from "react-router";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";

const AppLayout = () => {
  return (
    <div className="app">
      {/* Header */}
      <Header />
      <hr></hr>
      {/* Body */}
      <Body />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />, // Error Route
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
```

## Error Page
Note: useRouteError is a special Hook provided by react-router which gives details about Error in form of an object.

```jsx
import { useRouteError } from "react-router";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>Oops!</h1>
      <h2>Something went wrong!!</h2>
      <h2>
        {err.status}: {err.statusText}
      </h2>
    </div>
  );
};

export default Error;
```
# Children Routes using Outlet
Suppose, I want to intact header as it is and want to render components using routes. We can do so using "children routes" and "Outlet".

## App.js
```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";

const AppLayout = () => {
  return (
    <div className="app">
      {/* Header */}
      <Header />
      <hr></hr>
      {/* Children */}
      <Outlet/>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
```

**Note:**
When linking a thing to route to another page, Never use <a href=""></a> tag. It is because it will refresh the whole page. I don't want that to navigate to other page with reloading the whole page.

I want to navigate to other page without reloading.

So, we will use "Link" from react-router. 

## Header.js
```jsx
import { useState, useEffect } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");

  useEffect(() => {
    console.log("useEffect Called");
  }, [btnName]);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
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
## Note: Since, only the component is updating without refreshing (using <Link></Link>) React Applications are known as Single Page Applications.

# Types of Routing in Web-Apps
1. Client Side Routing (Page is already present on the client side)
2. Server Side Routing (Make a network call, and page coming from server)

# Dynamic Routing
We are going to make page for Restaurant Menu and each Restaurant will have its own route(which will be dynamic).

## App.js
```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

const AppLayout = () => {
  return (
    <div className="app">
      {/* Header */}
      <Header />
      <hr></hr>
      {/* Body */}
      <Outlet/>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId", // Dynamic Routing
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
```

## RestaurantMenu.jsx
Here, we used "useParams" given by react-router to use the url parameters.

Also, we have hardcoded url (cards[18]) which is not a good thing. Sometimes it is bringing data and sometimes not. So, we have to use find() approach. Learn by Yourself.

```jsx
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { MENU_API } from "../utils/constant";
const RestaurantMenu = () => {
  const [resInfo, setresInfo] = useState(null);

  const { resId } = useParams();
  console.log(resId);

  const fetchMenu = async () => {
    const data = await fetch(
      `${MENU_API}restaurantId=${resId}`
    );

    const json = await data.json();
    console.log(json);
    setresInfo(json);
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  if (resInfo === null) return <Shimmer />;

  const { name } =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[18]?.card
      ?.card ?? "";

  const menuItem =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card?.itemCards;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h2>Menu</h2>
      <ul
        style={{
          display: "flex",
          flexWrap: "wrap",
          listStyle: "none",
        }}
      >
        {menuItem.map((item) => {
          return (
            <div style={{ margin: "10px" }} key={item.card.info.id}>
              <img
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${item.card.info.imageId}`}
              ></img>
              <li>{item.card.info.name}</li>
              <li>₹{item.card.info.defaultPrice / 100}</li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
```

## Body.js
```jsx
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";

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
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRestaurant(
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
          <Link
            to={`/restaurant/${restaurant.info.id}`}
            key={restaurant.info.id}
            style={{ textDecoration: "none", color: "black" }}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
```