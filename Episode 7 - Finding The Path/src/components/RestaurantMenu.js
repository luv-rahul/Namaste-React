import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { MENU_API } from "../utils/constant";
import { MENU_IMAGE_URL } from "../utils/constant";

const RestaurantMenu = () => {
  const [resInfo, setresInfo] = useState(null);

  const { resId } = useParams();
  console.log(resId);

  const fetchMenu = async () => {
    const data = await fetch(`${MENU_API}restaurantId=${resId}`);

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
              <img src={`${MENU_IMAGE_URL}${item.card.info.imageId}`}></img>
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
