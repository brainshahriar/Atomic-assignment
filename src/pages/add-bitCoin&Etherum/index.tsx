import { UploadCard } from "components/molecules/upload-card";
import { DefaultPage } from "components/templates/defaultpage";
import { ICONS } from "settings/settings";
import { Heading } from "components/atoms/heading";
import { Input } from "components/atoms/input";
import { Button } from "components/atoms/button";
import ProfilePhoto from "../../assets/images/profile.png";

const AdminAddBitCoin = () => {
  return (
    <DefaultPage
      header={{
        imgSrc: ICONS.notification,
        badgeNumber: 24,
        profileImgSrc: ICONS.coinbase,
        altTag: "profile image",
        text: "CoinBase",
      }}
      isAgentDashboard={false}
      userType="admin"
      headingText="Admin Management Bitcoin & Ethereum"
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
      <div className="p-addBitcoin">
        <div className="p-addBitcoin__headingContent">
          <Heading type="h2" color="primary">
            Bitcoin & Ethereum
          </Heading>
          <div className="p-addBitcoin__inputContents">
            <div className="p-addBitcoin__input">
              <Input
                type="search"
                size="searchExtraSmall"
                fieldType="text"
                isMargin={false}
                placeholder="Search Coins"
              />
            </div>

            <Button iconWithText={true} imgsrc={ICONS.bitcoinIcon}>
              Add Coin
            </Button>
          </div>
        </div>
        <div className="p-addBitcoin__mainContent">
          <UploadCard
            labelTop={"Coin Name"}
            textTop={"Bitcoin"}
            text={"Upload card image here"}
            textMiddle="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
            labelMiddle="Generated Code"
            buttonText="Add Coin"
            fieldTypeTop="text"
            fieldTypeMiddle="password"
          />
        </div>
      </div>
    </DefaultPage>
  );
};

export default AdminAddBitCoin;
