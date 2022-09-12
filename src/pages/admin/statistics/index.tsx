import { DefaultPage } from "components/templates/defaultpage";
import { ICONS } from "settings/settings";
import CoinBaseImage from "../../../assets/images/icons/coinbase.svg";
import { Heading } from "components/atoms/heading";
import { Container } from "components/atoms/container/container";
import { Column } from "components/organisms/column/column";
import Calender from "components/molecules/calender";
import { Graph } from "components/molecules/graph";
const AdminStatistics = () => {
  const showDate = () => {
    console.log("Show date");
  };
  return (
    <DefaultPage
      header={{
        imgSrc: ICONS.notification,
        badgeNumber: 24,
        profileImgSrc: CoinBaseImage,
        altTag: "CoinBase",
        text: "CoinBase",
      }}
      isAgentDashboard={true}
      userType="admin"
      headingText="Agent Management   Statistics"
      breadcrumb={{
        info: [
          {
            text: "Accounts",
            href: "#",
          },
          {
            text: "COINBASE",
            href: "#",
          },
        ],
      }}
    >
      <div className="p-adminTransactions">
        <Column
          content={[
            <Heading color="primary" type="h2">
              Statistics
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

export default AdminStatistics;
