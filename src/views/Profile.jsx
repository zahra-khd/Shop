import { Activities } from "../components/profile/Activities/Activities";
import { CheckId } from "../components/profile/CheckId";
import { DjClub } from "../components/profile/DJClub";
import { EditProfile } from "../components/profile/EditProfile";
import { OrdersMe } from "../components/profile/componentOrdersMe/OrdersMe";
import { Wallet } from "../components/profile/Wallet";

export const Profile = () => {
  return (
    <div className="row col-xl-12 col-md-12  mt-5 p-0">
      <div className=" row col-lg-9 col-md-12 m-auto">
        <section className="col-lg-3 col-md-12 style-section text-section-start p-0">
          <EditProfile />
          <Wallet />
          <DjClub />
          <Activities />
        </section>
        <div className="col-lg-9 col-md-12">
          <section className="style-section text-section-start px-3 py-2">
            <CheckId />
          </section>
          <section className="style-section text-section-start px-3 py-2 mt-3">
            <OrdersMe />
          </section>
        </div>
      </div>
    </div>
  );
};
