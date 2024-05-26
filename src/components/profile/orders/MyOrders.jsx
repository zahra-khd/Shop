
import { useLocation } from "react-router-dom";
import { CheckId } from "../CheckId";
import { OrderStatus } from "./OrderStatus";
import { OrderHistory } from "./orderHistory/OrderHistory";


export const MyOrders = () => {

  const location=useLocation()

  function showPageBasedOnQuery() {
    switch (location.search) {
      case "in_progress":
        
       return <OrderHistory/>
    
      default:
        return <OrderHistory/>
    }
  }
 
  return (
    <>
    {

      location.search ? 
      showPageBasedOnQuery() :
      <>

      <section className="profile-container d-flex-flex-column-text-start px-3 py-2">
        <CheckId />
      </section>
  
      <div className="profile-container mt-3">
      <section className="d-flex justify-content-between p-3 fw-bold">
        <p>سفارش های من</p>
        <p className="text text-info">
          مشاهده ی همه
          <i className="bi bi-chevron-compact-left"></i>
        </p>
      </section>
      <div>
        <OrderStatus/>
      </div>
      </div>
     </>
    }
      
    </>
  );
};
