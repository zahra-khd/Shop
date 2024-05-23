import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import routesUrl from "../../routes/routesUrl";
import UseOutsideClick from "../../utils/hooks/UseOutsideClick";

export const Profile = () => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  const dropdownRef = useRef(undefined);

  function openProfileDropdown() {
    setShowDropdown(true);
  }

  function goToProfileMe() {
    //todo send user to profile
    navigate(routesUrl.profile)
  }

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
        <i className="bi bi-person icon-size"></i>
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
