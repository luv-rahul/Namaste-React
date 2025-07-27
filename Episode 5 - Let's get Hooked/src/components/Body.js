import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  // State Variable
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  // Normal JS Variable
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
