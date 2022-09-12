import { UploadCard } from "components/molecules/upload-card";
import { DefaultPage } from "components/templates/defaultpage";
import { ICONS } from "settings/settings";
import ProfilePhoto from "../../../assets/images/profile.png";
import { Heading } from "components/atoms/heading";
import { Container } from "components/atoms/container/container";
import { Column } from "components/organisms/column/column";
import { Graph } from "components/molecules/graph";
import Calender from "components/molecules/calender";
const UserStatistics = () => {
  const showDate = () => {
    console.log("Show date");
  };
  return (
    <DefaultPage
      header={{
        imgSrc: ICONS.notification,
        badgeNumber: 24,
        profileImgSrc: ProfilePhoto,
        altTag: "profile image",
        text: "Ramon Ridwan",
      }}
      isAgentDashboard={true}
      userType="user"
      headingText="User Management   Statistics"
      breadcrumb={{
        info: [
          {
            text: "Accounts",
            href: "#",
          },
          {
            text: "RAMON RIDWAN",
            href: "#",
          },
        ],
      }}
    >
      <div className="p-userReferral">
        <Column
          content={[
            <Heading color="primary" type="h2">
              Overview
            </Heading>,
            <Calender onChange={showDate} onClick={showDate}></Calender>,
          ]}
        />
        <Container margin="28">
          <Graph
            userData={[
              {
                id: 1,
                usedApp: "Amazon",
                usingLabel: 40,
                x: 0,
                y: 0,
              },
              {
                id: 2,
                usedApp: "Google",
                usingLabel: 50,
                x: 0,
                y: 0,
              },
              {
                id: 3,
                usedApp: "iTunes",
                usingLabel: 20,
                x: 0,
                y: 0,
              },
              {
                id: 4,
                usedApp: "Payoneer",
                usingLabel: 35,
                x: 0,
                y: 0,
              },
              {
                id: 5,
                usedApp: "Bitcoin",
                usingLabel: 40,
                x: 0,
                y: 0,
              },
              {
                id: 6,
                usedApp: "Ethereum",
                usingLabel: 35,
                x: 0,
                y: 0,
              },
              {
                id: 7,
                usedApp: "Tecno",
                usingLabel: 25,
                x: 0,
                y: 0,
              },
              {
                id: 8,
                usedApp: "Paypal",
                usingLabel: 40,
                x: 0,
                y: 0,
              },
              {
                id: 9,
                usedApp: "Aliexpress",
                usingLabel: 48,
                x: 0,
                y: 0,
              },
              {
                id: 10,
                usedApp: "Konga",
                usingLabel: 49,
                x: 0,
                y: 0,
              },
              {
                id: 11,
                usedApp: "Jumia",
                usingLabel: 47,
                x: 0,
                y: 0,
              },
            ]}
          />
        </Container>
      </div>
    </DefaultPage>
  );
};

export default UserStatistics;
