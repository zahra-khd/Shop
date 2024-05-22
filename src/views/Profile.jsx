import { Activities } from "../components/profile/Activities/Activities";
import { EditProfile } from "../components/profile/EditProfile";
import { WalletDj } from "../components/profile/WalletDj";
import { MyOrders } from "../components/profile/orders/MyOrders";
import { Comment } from "../components/profile/Activities/Comment";
import { useLocation } from "react-router-dom";
import routesUrl from "../routes/routesUrl";
import { GiftCard } from "../components/profile/Activities/GiftCard";
import { RecentVisits } from "../components/profile/Activities/RecentVisits";
import { ExitProfile } from "../components/profile/Activities/ExitProfile";
import { ProfileMe } from "../components/profile/Activities/ProfileMe";
import { Messages } from "../components/profile/Activities/Messages";

export const Profile = () => {
  const location = useLocation();

  function mainSection() {
    switch (location.pathname) {
      case routesUrl.profileMyOrders:
        return <MyOrders />;
      case routesUrl.profileComment:
        return <Comment />;
      case routesUrl.profileRecentVisits:
        return <RecentVisits />;
      case routesUrl.profileGiftCard:
        return <GiftCard />;
      case routesUrl.profileExitProfile:
        return <ExitProfile />;
      case routesUrl.profileProfileMe:
        return<ProfileMe/>;
      case routesUrl.profileMessages:
        return <Messages/>;

      default:
        return <MyOrders />;
    }
  }

  return (
    <div className="row col-xl-12 col-md-12  mt-5 p-0">
      <div className=" row col-lg-9 col-md-12 m-auto">
        <section className="col-lg-3 col-md-12 style-section text-section-start p-0">
          <EditProfile />
          <WalletDj />
          <Activities />
        </section>
        <div className="col-lg-9 col-md-12 p-0">
          <section className="me-3">
            {mainSection()}
          </section>
        </div>
      </div>
    </div>
  );
};
