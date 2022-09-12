import { DefaultPage } from "components/templates/defaultpage";
import { ICONS } from "settings/settings";
import { Card } from "components/organisms/card/card";
import { Text } from "components/atoms/text";
import { Grid } from "components/organisms/gird/grid";
import { User } from "components/molecules/user";
import ProfileImage from "./../../../assets/images/profile.png";
import { Heading } from "components/atoms/heading";
import { Container } from "components/atoms/container/container";
const AgentsReferral = () => {
  return (
    <DefaultPage
      header={{
        imgSrc: ICONS.notification,
        badgeNumber: 24,
        profileImgSrc: ProfileImage,
        altTag: "Agent Rose",
        text: "Agent Rose",
      }}
      isAgentDashboard={true}
      userType="agent"
      headingText="Agent Management Referral"
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
      <div className="p-agentReferral">
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
                <Container margin="52">
                  <Grid
                    data={[
                      {
                        checked: false,
                        gridId: "users",
                        gridValue: [
                          <Text color="primary" fontWeight="bold" type="font12">
                            Account Status
                          </Text>,
                          <Text color="primary" fontWeight="bold" type="font12">
                            User Name
                          </Text>,
                          <Text color="primary" fontWeight="bold" type="font12">
                            Email
                          </Text>,
                          <Text color="primary" fontWeight="bold" type="font12">
                            Action
                          </Text>,
                        ],
                        isCheckbox: false,
                        type: "heading",
                      },
                      {
                        checked: false,
                        dotOption: {
                          optionFirst: "Redeem Point",
                          firstUrl: "redeem",
                          optionSecond: "Clear",
                          secondUrl: "clear",
                        },
                        gridId: "users",
                        gridValue: [
                          <User
                            imageSrc={ProfileImage}
                            name="Happy Rana"
                            isChatUserType={false}
                            isStatus={false}
                            isNotification={false}
                            isBadge={false}
                          />,
                          <Text color="primary" type="font12">
                            Ramonridwan@protonmail.com
                          </Text>,
                        ],
                        isCheckbox: false,
                        status: {
                          bgColor: "pasteGreen",
                          columnPosition: "first",
                          text: "Active",
                        },
                      },

                      {
                        checked: false,
                        dotOption: {
                          optionFirst: "Redeem Point",
                          firstUrl: "redeem",
                          optionSecond: "Clear",
                          secondUrl: "clear",
                        },
                        gridId: "users",
                        gridValue: [
                          <User
                            imageSrc={ProfileImage}
                            name="Dammy Faruq"
                            isChatUserType={false}
                            isStatus={false}
                            isNotification={false}
                            isBadge={false}
                          />,
                          <Text color="primary" type="font12">
                            Ramonridwan@protonmail.com
                          </Text>,
                        ],
                        isCheckbox: false,
                        status: {
                          bgColor: "pasteGreen",
                          columnPosition: "first",
                          text: "Active",
                        },
                      },
                      {
                        checked: false,
                        dotOption: {
                          optionFirst: "Redeem Point",
                          firstUrl: "redeem",
                          optionSecond: "Clear",
                          secondUrl: "clear",
                        },
                        gridId: "users",
                        gridValue: [
                          <User
                            imageSrc={ProfileImage}
                            name="Aisha Babalola"
                            isChatUserType={false}
                            isStatus={false}
                            isNotification={false}
                            isBadge={false}
                          />,
                          <Text color="primary" type="font12">
                            Ramonridwan@protonmail.com
                          </Text>,
                        ],
                        isCheckbox: false,
                        status: {
                          bgColor: "purpleGradient",
                          columnPosition: "first",
                          text: "Pending",
                        },
                      },
                    ]}
                  />
                </Container>
              </>
            }
          />
        </Container>
      </div>
    </DefaultPage>
  );
};

export default AgentsReferral;
