import { Settings } from "components/organisms/settings";
import { DefaultPage } from "components/templates/defaultpage";
import { ICONS } from "../../settings/settings";
import ProfilePhoto from "../../assets/images/profile.png";
import { Heading } from "components/atoms/heading";

const AgentSettings = () => {
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
      userType="agent"
      headingText="Agent Management  Settings"
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
      <div className="p-agentSettings">
        <div className="p-agentSettings__heading">
          <Heading type="h2" color="primary">
            Settings
          </Heading>
        </div>
        <Settings
          btnText="Save Changes"
          headingFirst="Profile"
          headingSecond="Password"
          subText="* The uploaded image must be 500px wide and 500px long"
          fieldTypeTop="text"
          fieldTypeMiddle="text"
          textName="Name"
          labelName="Name"
          textEmail="Email"
          labelEmail="Ramonridwan@gogeafrica.com"
          bottomFieldType="+234 813344969221"
          textPhone="Phone"
          labelPhone="Phone"
          textNationality="Lagos, Nigeria"
          labelNationality="Nationality"
          inputTypeBottom="withIcon"
          textOldPassword="Old Password"
          labelOldPassword="Old Password"
          textNewPassword="New Password"
          labelNewPassword="New Password"
          headingThird="Billing Information"
          noteText="Fill in the bank information into which you would want your transaction return and bonuses."
          bankName="United Bank Africa"
          accountName="Shedrack Rose Neima"
          accountNumber="4386 XXXX XXXX XXX"
          isEditOption={false}
        />
      </div>
    </DefaultPage>
  );
};

export default AgentSettings;
