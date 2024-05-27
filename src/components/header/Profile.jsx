//rect
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

//route
import routesUrl from "../../routes/routesUrl";

//utils
import UseOutsideClick from "../../utils/hooks/UseOutsideClick";

export const Profile = () => {
  const navigate = useNavigate();
  const dropdownRef = useRef(undefined);

  const [showDropdown, setShowDropdown] = useState(false);

  //نمایش منوی پروفایل
  function openProfileDropdown() {
    setShowDropdown(true);
  }

//رفتن به صفحه ی ورود به حساب کاربری 
  function goToProfileMe() {
    navigate(routesUrl.profile);
  }

//بستن منوی پروفایل
  UseOutsideClick(dropdownRef, () => {
    setShowDropdown(false);
  });

  return (
    <div className="dropdown">
      <button
        onClick={openProfileDropdown}
        className="btn btn-white"
        type="button"
      >
        <i className="bi bi-person icon-size-x-large"></i>
      </button>
      {showDropdown ? (
        <div className="dropdown-menu show start-50 rounded" ref={dropdownRef}>
          <span className="dropdown-item text-muted" onClick={goToProfileMe}>
            ورود به حساب کاربری
          </span>
          <hr />
          <span className="dropdown-item text-muted">خروج از حساب کاربری</span>
        </div>
      ) : null}
    </div>
  );
};
