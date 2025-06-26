import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo } = resData?.info;
  return (
    <div className="res-card">
      <div className="res-image">
        <img src={`${CDN_URL}${resData.info.cloudinaryImageId}`}></img>
      </div>
      <div className="res-desc">
        <div className="res-name">{name}</div>
        <div className="res-cuisine">{cuisines.join(", ")}</div>
        <div className="res-rating">{avgRating} stars</div>
        <div className="res-delivery">{costForTwo}</div>
      </div>
    </div>
  );
};

export default RestaurantCard;
