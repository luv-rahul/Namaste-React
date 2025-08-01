import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, costForTwo, cuisines, areaName } =
    resData?.info;
  return (
    <div className="res-card">
      <div className="res-image">
        <img className="res-logo" src={CDN_URL + cloudinaryImageId}></img>
      </div>
      <div className="res-desc">
        <div className="res-name">{name}</div>
        <div className="res-rating-time">
          &#9733; {avgRating} - {costForTwo}
        </div>
        <div className="res-cuisines">{cuisines.join(", ")}</div>
        <div className="res-area">{areaName}</div>
      </div>
    </div>
  );
};

export default RestaurantCard;
