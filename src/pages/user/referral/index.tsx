import { UploadCard } from "components/molecules/upload-card";
import { DefaultPage } from "components/templates/defaultpage";
import { ICONS } from "settings/settings";
import ProfilePhoto from "../../../assets/images/profile.png";
import { Card } from "components/organisms/card/card";
import { Text } from "components/atoms/text";
import { Heading } from "components/atoms/heading";
import { Container } from "components/atoms/container/container";
const UserReferral = () => {
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
      headingText="User Management Referral"
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
        <Heading color="primary" type="h2">
          Referral
        </Heading>
        <Container margin="28">
          <Card
            title="Affiliate"
            content={
              <>
                <Container margin="33">
                  <Text color="primary" type="font12">
                    Get referal bonuses by sharing your referal link with
                    friends
                  </Text>
                </Container>
                <Container margin="28">
                  <Text color="primary" type="font12" isCopy={true}>
                    https://gogeafrica.com/register/agentrose
                  </Text>
                </Container>
                <Container margin="33"></Container>
              </>
            }
          />
        </Container>
      </div>
    </DefaultPage>
  );
};

export default UserReferral;
