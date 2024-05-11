import returnOrder from "../../../assets/images/returnOrder.png";
export const ReturnOrder = () => {
  return (
    <div className="col-4  d-flex">
      <img src={returnOrder} alt="returnOrder" className="img-fluid" />
      <div className="p-2">
        <span className="fw-bold"> 0سفارش </span>
        <br />
        <span className="text-muted">مرجوع شده</span>
      </div>
    </div>
  );
};
