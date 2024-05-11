import deliveryOrder from "../../../assets/images/deliveryOrder.png";
export const DeliveryOrder = () => {
    return (
        <div className="col-4 d-flex">
        <img src={deliveryOrder} alt="deliveryOrder" className="img-fluid" />
        <div className="p-2">
          <span className="fw-bold"> 0سفارش </span>
          <br />
          <span className="text-muted">تحویل شده</span>
        </div>
      </div>
    );
  };
  