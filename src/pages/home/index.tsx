import { DefaultPage } from "components/templates/defaultpage";
import { ICONS } from "settings/settings";
import ProfilePhoto from "../../assets/images/profile.png";

const Home = () => {
  return (
    <DefaultPage
      header={{
        imgSrc: ICONS.notification,
        badgeNumber: 24,
        profileImgSrc: ProfilePhoto,
        altTag: "profile image",
        text: "Agent Rose",
      }}
      isAgentDashboard={true}
      userType="user"
      headingText="User Management System Overview"
      breadcrumb={{
        info: [
          {
            text: "Accounts",
            href: "#",
          },
          {
            text: "AGENT ROSE",
            href: "#",
          },
        ],
      }}
    >
      <div className="p-home">
        <h2>CoinBase Web Dashboard</h2>
        
      </div>
    </DefaultPage>
  );
};

export default Home;
