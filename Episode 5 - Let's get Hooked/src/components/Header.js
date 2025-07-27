import { LOGO_URL } from "../utils/constant";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <div>Home</div>
        <div>About</div>
        <div>Contact</div>
        <div>Cart</div>
      </div>
    </div>
  );
};

export default Header;
