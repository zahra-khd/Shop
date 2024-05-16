import { OrderStatus } from "./OrderStatus";

export const OrdersMe = () => {
  return (
    <div>
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
    </div>
  );
};
