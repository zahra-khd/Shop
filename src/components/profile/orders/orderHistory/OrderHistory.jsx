//react
import { useState } from "react";

// routes
import { useLocation, useNavigate } from "react-router-dom";
import routesUrl from "../../../../routes/routesUrl";

//components
import { InProgress } from "./InProgress";
import { Sent } from "./Sent";
import { Returned } from "./Returned";
import { Cancelled } from "./Cancelled";

export const OrderHistory = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const valueOrderHistory = [
    {
      title: "جاری",
      value: "in_progress",
    },
    {
      title: "تحویل شده",
      value: "sent",
      count: 2,
    },
    {
      title: "مرجوع شده",
      value: "returned",
      count: 1,
    },
    {
      title: "ارسال شده",
      value: "cancelled",
      count: 2,
    },
  ];

  const [clickTabOrder, setClickTabOrder] = useState("");

  // set's the activeTab and gives value to state
  function onClickTabsOrders(value) {
    setClickTabOrder(value);
    navigate(`${routesUrl.profileMyOrders}?activeTab=${value}`);
  }

  function switchTabsOrders() {
    const params = new URLSearchParams(location.search);
    const activeTab = params.get("activeTab");

    switch (activeTab) {
      case "in_progress":
        return <InProgress />;
      case "sent":
        return <Sent />;
      case "returned":
        return <Returned />;
      case "cancelled":
        return <Cancelled />;
      default:
        return <InProgress />;
    }
  }

  return (
    <>
      <section className="profile-container d-flex-flex-column-text-start h-100">
        <div className="mx-3 my-4 d-flex justify-content-between">
          <h6>تاریخچه سفارشات</h6>
          <div className="cursor-pointer">
            <i className="bi bi-search search-icon"></i>
          </div>
        </div>
        <ul className="nav nav-underline pe-3 cursor-pointer border-bottom">
          {valueOrderHistory.map((valueOrder, index) => (
            <li
              className={
                clickTabOrder === valueOrder.value
                  ? "nav-item d-flex pb-3 orderHistory-tab-active-red"
                  : "nav-item d-flex pb-3"
              }
              key={index}
              onClick={() => onClickTabsOrders(valueOrder.value)}
            >
              {valueOrder.title}
              <>
                {valueOrder.count && (
                  <div
                    className={
                      clickTabOrder === valueOrder.value
                        ? "ordersHistory-count bg-danger"
                        : "ordersHistory-count"
                    }
                  >
                    <p className="m-0">{valueOrder.count}</p>
                  </div>
                )}
              </>
            </li>
          ))}
        </ul>
        {switchTabsOrders()}
      </section>
    </>
  );
};
