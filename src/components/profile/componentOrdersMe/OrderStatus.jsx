import returnOrder from "../../../assets/images/returnOrder.png";
import currentOrder from "../../../assets/images/currentOrder.png";
import deliveryOrder from "../../../assets/images/deliveryOrder.png";
export const OrderStatus = () => {
  const orderStatusMe = [
    {

      Image: <img src={returnOrder} alt="returnOrder" className="img-fluid" />,
      title: "0سفارش ",
      description: "مرجوع شده",
    },
    {
      Image: <img src={currentOrder} alt="returnOrder" className="img-fluid" />,
      title: "0سفارش ",
      description: "جاری",
    },
    {
      Image: <img src={deliveryOrder} alt="returnOrder" className="img-fluid" />,
      title: "0سفارش ",
      description: "تحویل شده",
    },
  ];
  return (
    <div className=" d-flex align-items-center">
      {orderStatusMe.map((orderStatusMe, index) => (
        <div className="col-4  d-flex"  key={index}>
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
