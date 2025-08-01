# Namaste React Episode 7 - Finding the Path! 🚀

---

## useEffect() ⚡

If there is no dependency array, it will be called on every render of the component. 🔄

```js
useEffect(() => {
  console.log("useEffect called!");
});
```

If the dependency array is empty, useEffect is called only once on initial render. 🎯

```js
useEffect(() => {
  console.log("useEffect called!");
}, []);
```

If we have something in dependency array, then useEffect will be called if depedency changes. 🔀

```js
useEffect(() => {
  console.log("useEffect called!");
}, [btnName]);
```

## useState() 🎛️

1. Never use useState outside of the component. ❌
2. Always try to call them at the start of your component. ✅
3. Never create them inside if-else. ❌

```js
if (condition) {
  const [variable, setVariable] = useState();
}
```

4. Never create them inside for-loop. ❌

```js
for (initialization; condition; increment) {
  const [variable, setVariable] = useState();
}
```

5. Never create them inside function. ❌

```js
function () {
  const [variable, setVariable] = useState();
}
```

## Routing - createBrowserRouter, RouterProvider, useRouteError 🧭

App.js 📁

First of all, we will create routing configurations and use route provider to use our configurations in our app. ⚙️

```js
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
      <Header />
      <Body />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
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

About.js 📄

```js
const About = () => {
  return (
    <div className="about">
      <h1>About Page</h1>
      <h2>This is Namaste React Web Series</h2>
    </div>
  );
};

export default About;
```

Contact.js 📞

```js
const Contact = () => {
  return (
    <div className="about">
      <h1>Contact Page</h1>
      <h2>This is Namaste React Web Series</h2>
    </div>
  );
};

export default Contact;
```

Error.js ❌

useRouteError() hook gives details about ERROR. 🚨

```js
import { useRouteError } from "react-router";

const Error = () => {
  const err = useRouteError();
  return (
    <div className="error">
      <h1>Oops!</h1>
      <h2>Something went wrong.</h2>
      <h5>
        Error: {err.status} - {err.statusText}
      </h5>
    </div>
  );
};

export default Error;
```

## Outlet and Children Routes 🏗️

To make our Header as it is, we use children routes and outlet from react-router; 🔗

App.js 📁

```js
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
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
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
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
```

## Navigation using Nav Tabs 🧭

Using <a></a> will refresh the page. 🔄

```js
import { LOGO_URL } from "../utils/constant";
import { useState, useEffect } from "react";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <div>Home</div>
        <div>
          <a href="/about">About</a>
        </div>
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

Using **Link** from react-router will not refresh the page. It feels like a single page is changing component, therefore, **React webpages is known as Single-Page Application** 🚀

```js
import { LOGO_URL } from "../utils/constant";
import { useState, useEffect } from "react";
import { Link } from "react-router";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/about">About</Link>
        </div>
        <div>
          <Link to="/contact">Contact</Link>
        </div>
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

## Routing in WebApps 🌐

1. Client Side Routing - Pages are available on client system 💻
2. Server Side Routing - Pages comes from server 🖥️

## Dynamic Routing 🎯

App.js 📁

```js
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
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
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
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
```

RestaurantMenu.js 🍽️

```js
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_API_URL } from "../utils/constant";
import { MENU_ITEM_IMAGE_URL } from "../utils/constant";
import { useParams } from "react-router";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState([]);
  const [resName, setResName] = useState("");

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API_URL + `&restaurantId=${resId}`);

    const json = await data.json();

    setResInfo(
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards
    );
    setResName(json?.data?.cards[0]?.card?.card?.text);
  };

  if (resInfo?.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="menu">
      <h3>{resName}</h3>
      {resInfo?.map((item) => {
        const { id, name, price, imageId } = item?.card?.info;

        return (
          <div className="menu-items" key={id}>
            <div className="menu-desc">
              <div className="item-name">{name}</div>
              <div className="item-price">₹{price / 100}</div>
            </div>
            <div className="menu-image">
              <img
                className="item-image"
                src={MENU_ITEM_IMAGE_URL + imageId}
              ></img>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
```

index.css 🎨

```css
.menu {
  width: 50%;
  margin: 40px auto;
}

.menu h3 {
  padding-left: 10px;
}

.menu-items {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}

.item-name {
  font-weight: 600;
  font-size: 14px;
}

.item-price {
  font-size: 12px;
}

.item-image {
  height: 130px;
  width: 130px;
  border-radius: 10px;
}
```