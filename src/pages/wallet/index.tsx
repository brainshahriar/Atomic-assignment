import { DefaultPage } from "components/templates/defaultpage";
import LogoIcon from "../../assets/images/logo.png";
import { ICONS } from "../../settings/settings";
import ProfilePhoto from "../../assets/images/profile.png";
import { Wallet } from "components/organisms/wallet-section";
import { Text } from "components/atoms/text";
const WalletPage = () => {
  return (
    <DefaultPage
      header={{
        imgSrc: ICONS.notification,
        badgeNumber: 24,
        profileImgSrc: ProfilePhoto,
        altTag: "profile image",
        text: "RAMON RIDWAN",
      }}
      isAgentDashboard={true}
      userType="user"
      headingText="User Management Wallet"
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
      <div className="p-wallet">
        <div className="p-wallet__sub-title">
          <Text type="font16" color="primary" fontWeight="bold">
            Wallet
          </Text>
        </div>

        <Wallet
          btnText="Withdraw Funds"
          headingText="Wallet"
          headingFirst="#120000.00"
          headingSecond="#30000.00"
          btnTextFirst="Total Earnings"
          btnTextSecond="Balance"
          bottomTextFirst="Please note this’s the total sum of ya’ transaction here on"
          boldText="GOGE AFRICA"
          bottomTextSecond="Please note this the current balance amount left on ya’ wallet."
        />
      </div>
    </DefaultPage>
  );
};

export default WalletPage;
