import { UploadCard } from "components/molecules/upload-card";
import { DefaultPage } from "components/templates/defaultpage";
import { ICONS } from "settings/settings";
import { Heading } from "components/atoms/heading";
import { Input } from "components/atoms/input";
import { Button } from "components/atoms/button";
import ProfilePhoto from "../../assets/images/profile.png";

const AdminAddCard = () => {
  return (
    <DefaultPage
      header={{
        imgSrc: ICONS.notification,
        badgeNumber: 24,
        profileImgSrc: ProfilePhoto,
        altTag: "profile image",
        text: "Agent Rose",
      }}
      isAgentDashboard={false}
      userType="admin"
      headingText="Admin Management Cards"
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
      <div className="p-addCard">
        <div className="p-addCard__headingContent">
          <Heading type="h2" color="primary">
            Add Card
          </Heading>
          <div className="p-addCard__inputContents">
            <div className="p-addCard__input">
              <Input
                type="search"
                size="searchExtraSmall"
                fieldType="text"
                isMargin={false}
                placeholder="Search Cards"
              />
            </div>

            <Button iconWithText={true} imgsrc={ICONS.addcard}>
              Add Card
            </Button>
          </div>
        </div>
        <div className="p-addCard__mainContent">
          <UploadCard
            labelTop="Card Name"
            textTop="Google Play E-code card"
            text="Upload card image here"
            textMiddle="USA iTunes E-Code card"
            labelMiddle="Card Type"
            textBottom="US Dollars (USD)"
            labelBottom="Card Currency"
            buttonText="Add Card"
            fieldTypeTop="text"
            fieldTypeMiddle="text"
            bottomFieldType="text"
            inputTypeBottom="withIcon"
            inputTypeMiddle="withIcon"
          />
        </div>
      </div>
    </DefaultPage>
  );
};

export default AdminAddCard;
