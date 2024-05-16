
import { CheckId } from "../CheckId";
import { OrderStatus } from "./OrderStatus";


export const MyOrders = () => {


  return (
    <>
      <section className="style-section text-section-start px-3 py-2">
        <CheckId />
      </section>
      <div className="d-flex justify-content-between p-3 fw-bold">
        <p>سفارش های من</p>
        <p className="text text-info">
          مشاهده ی همه
          <i className="bi bi-chevron-compact-left"></i>
        </p>
      </div>
      <div>
        <OrderStatus />
      </div>
    </>
  );
};
