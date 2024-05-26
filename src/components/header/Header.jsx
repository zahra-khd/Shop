import headerLogo from "../../assets/images/headerLogo.png"
import { Cart } from "./Cart";
import { Profile } from "./Profile";
import { Search } from "./Search";

export const Header = () => {
  return (
    <div className="header">
      <div className="row col-xl-12 m-0 p-0">
        <div className="col-2 bg-light p-0">
          <img
            src={headerLogo}
            className="img-fluid w-100 img-header"
            alt="logo"
          />
        </div>
        <div className="col-8">
          <Search />
        </div>
        <div className="col-2 d-flex justify-content-end p-3">
          <Profile />
          <p className="line-between-cart-person ms-2">|</p>
          <Cart />
        </div>
      </div>
    </div>
  );
};
