import { useState } from "react";
import {useNavigate} from "react-router-dom";
import routesUrl from "../../../routes/routesUrl";


export const Activities = () => {
  const navigate = useNavigate()
  const [clicked , setClicked] = useState("orders");

  const tabs = [
    {
      title: "سفارش ها",
      icon: <i className="bi bi-bag-heart icon-size-x-large"></i>,
      route: "orders",
    },
    {
      title: "دیدگاه ها",
      icon: <i className="bi bi-chat icon-size-x-large"></i>,
      route: "comments",
    },
    {
      title: "کارت هدیه",
      icon: <i className="bi bi-gift icon-size-x-large"></i>,
      route: "GiftCard",
    },
    {
      title: "پیام ها",
      icon: <i className="bi bi-bell icon-size-x-large"></i>,
      route: "Messages",
    },
    {
      title: "بازدید های اخیر",
      icon: <i className="bi bi-clock icon-size-x-large"></i>,
      route: "RecentVisits",
    },
    {
      title: "اطلاعات نام کاربری",
      icon: <i className="bi bi-person icon-size-x-large"></i>,
      route: "ProfileMe",
    },
    {
      title: "خروج",
      icon: <i className="bi bi-box-arrow-right icon-size-x-large"></i>,
      route: "ExitProfile",
    }
  ];

  function handleClickOnTabs(tab) {

    setClicked(tab.route);
    navigate(`${routesUrl.profile}/${tab.route}`)

  }

  return (
    <div className="d-flex-flex-column-text-start">
      {tabs.map((tab, index) => (
        <div onClick={()=> handleClickOnTabs(tab)} className={clicked === tab.route ? 'd-flex h-100 activities-tab activities-border-right-red cursor-pointer' : 'd-flex h-100 activities-tab cursor-pointer'} key={index}>
          <div className="activities-tab-border-top mx-2 p-2 w-100">
            {tab.icon}
            <span className="fw-bold pe-3 pt-1">{tab.title} </span>
          </div>
        </div>
      ))}

    
    </div>
  );
};
