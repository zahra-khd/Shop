import { CurrentOrder } from "./CurrentOrder";
import { DeliveryOrder } from "./DeliveryOrder";
import { ReturnOrder } from "./ReturnOrder";
export const OrderStatus = () => {
  return (
    <div className=" d-flex align-items-center">
      <CurrentOrder />
      <DeliveryOrder />
      <ReturnOrder />
    </div>
  );
};
