import { DefaultPage } from "components/templates/defaultpage";
import LogoIcon from "../../assets/images/logo.png";
import { ICONS } from "../../../settings/settings";
import ProfilePhoto from "../../../assets/images/profile.png";
import { Wallet } from "components/organisms/wallet-section";
import { Heading } from "components/atoms/heading";
import { Container } from "components/atoms/container/container";
const AgentWallet = () => {
  return (
    <DefaultPage
      header={{
        imgSrc: ICONS.notification,
        badgeNumber: 24,
        profileImgSrc: ProfilePhoto,
        altTag: "Agent Rose",
        text: "Agent Rose",
      }}
      isAgentDashboard={true}
      userType="agent"
      headingText="Agent Management Wallet"
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
      <div className="p-agentWallet">
        <Heading color="primary" type="h2">
          Wallet
        </Heading>
        <Container margin="33">
          <Wallet
            btnText="Withdraw Funds"
            headingText="Wallet"
            headingFirst="#120000.00"
            headingSecond="#30000.00"
            btnTextFirst="Total Earnings"
            btnTextSecond="Balance"
            bottomTextFirst="Please note this’s the total sum of ya’ transaction here on"
            boldText=" GOGE AFRICA"
            bottomTextSecond="Please note this the current balance amount left on ya’ wallet."
          />
        </Container>
      </div>
    </DefaultPage>
  );
};

export default AgentWallet;
