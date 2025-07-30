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
              const filteredList = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredListOfRestaurants(filteredList);
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
