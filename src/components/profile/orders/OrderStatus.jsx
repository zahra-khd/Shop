import returnOrder from "../../../assets/images/returnOrder.png";
import currentOrder from "../../../assets/images/currentOrder.png";
import deliveryOrder from "../../../assets/images/deliveryOrder.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import routesUrl from "../../../routes/routesUrl"

export const OrderStatus = () => {
  
  const navigate=useNavigate()

  const[clickedOnOrder,setClickedOnOrder]=useState('')



  function handleClickOnOrder() {
    
    setClickedOnOrder(clickedOnOrder);
    navigate(`${routesUrl.profile}/${orderStatusMe.route}`)
  }


  const orderStatusMe = [
    {
      Image: <img src={returnOrder} alt="returnOrder" className="img-fluid" />,
      title: "0سفارش ",
      description: "مرجوع شده",
      route: "OrderHistory"
    },
    {
      Image: <img src={currentOrder} alt="returnOrder" className="img-fluid" />,
      title: "0سفارش ",
      description: "جاری",
      route:'OrderHistory'
    },
    {
      Image: (
        <img src={deliveryOrder} alt="returnOrder" className="img-fluid" />
      ),
      title: "0سفارش ",
      description: "تحویل شده",
      route:'OrderHistory'
    },
  ];

  return (
    <div className=" d-flex align-items-center">
      {orderStatusMe.map((orderStatusMe, index) => (
        <div key={index} onClick={()=> handleClickOnOrder(orderStatusMe)}
        className="col-4 d-flex cursor-pointer ">
          {orderStatusMe.Image}
          <div className="p-2">
            <span className="fw-bold"> {orderStatusMe.title} </span>
            <br />
            <span className="text-muted">{orderStatusMe.description}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
