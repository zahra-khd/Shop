import currentOrder from "../../../assets/images/currentOrder.png";
export const CurrentOrder = () => {
  return (
    <div className="col-4  d-flex">
      <img src={currentOrder} alt="currentOrder" className="img-fluid" />
      <div className="p-2">
        <span className="fw-bold"> 0سفارش </span>
        <br />
        <span className="text-muted">جاری</span>
      </div>
    </div>
  );
};
