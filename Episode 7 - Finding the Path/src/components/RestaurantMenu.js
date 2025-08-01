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
