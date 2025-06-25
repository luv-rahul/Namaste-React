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
