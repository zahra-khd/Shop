import { Comments } from "./Comments";
import { ExitProfile } from "./ExitProfile";
import { GiftCard } from "./GiftCard";
import { Messages } from "./Messages";
import { Orders } from "./Orders";
import { ProfileMe } from "./ProfileMe";
import { RecentVisits } from "./RecentVisits";

export const Activities = () => {
  return (
    <div className="text-section-start">
      <Orders />
      <Comments />
      <GiftCard />
      <Messages />
      <RecentVisits />
      <ProfileMe />
      <ExitProfile/>
    </div>
  );
};
