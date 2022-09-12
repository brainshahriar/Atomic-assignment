import { Input } from "components/atoms/input";
import { DefaultPage } from "components/templates/defaultpage";
import { ICONS } from "settings/settings";
import ProfileImage from "./../../../assets/images/profile.png";
import { Card } from "components/organisms/card/card";
import { Text } from "components/atoms/text";
import { Heading } from "components/atoms/heading";
import { Container } from "components/atoms/container/container";
import { Column } from "components/organisms/column/column";
import { Button } from "components/atoms/button";
const UserLogout = () => {
  return (
    <DefaultPage
      header={{
        imgSrc: ICONS.notification,
        badgeNumber: 24,
        profileImgSrc: ProfileImage,
        altTag: "Ramon Ridwan",
        text: "Ramon Ridwan",
      }}
      isAgentDashboard={true}
      userType="user"
      headingText="User Management Logout"
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
      <div className="p-userLogout">
        <Heading color="primary" type="h2">
          Logout
        </Heading>
        <Container margin="33">
          <Card
            content={
              <Column
                content={[
                  <>
                    <form>
                      <Container margin="28">
                        <Text type="font16" fontWeight="bold" color="primary">
                          You’re bout to logout of the system
                        </Text>
                      </Container>
                      <Container margin="52">
                        <Input
                          fieldType="email"
                          isMargin={false}
                          label="Email"
                          placeholder="Email"
                        />
                      </Container>
                      <Container margin="28">
                        <Input
                          fieldType="password"
                          isMargin={false}
                          label="Password"
                          placeholder="XXXXXXXXXX"
                        />
                      </Container>
                      <Container margin="33">
                        <Button>Logout</Button>
                      </Container>
                      <Container margin="33"></Container>
                    </form>
                  </>,
                ]}
              />
            }
          />
        </Container>
      </div>
    </DefaultPage>
  );
};

export default UserLogout;
