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
