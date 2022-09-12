import { UploadCard } from "components/molecules/upload-card";
import { DefaultPage } from "components/templates/defaultpage";
import { ICONS } from "settings/settings";
import ProfilePhoto from "../../../assets/images/profile.png";
import { Card } from "components/organisms/card/card";
import { Text } from "components/atoms/text";
import { Grid } from "components/organisms/gird/grid";
import { User } from "components/molecules/user";
import ProfileImage from "./../../../assets/images/profile.png";
import { Heading } from "components/atoms/heading";
import { Container } from "components/atoms/container/container";
const AgentUsers = () => {
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
      headingText="Agent Management   Users"
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
      <div className="p-agentUsers">
        <Heading color="primary" type="h2">
          Users
        </Heading>
        <Container margin="28">
          <Card
            content={
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
                      firstUrl: "chat",
                      optionFirst: "Chat",
                      optionSecond: "Report User",
                      secondUrl: "report",
                    },
                    gridId: "users",
                    gridValue: [
                      <User
                        imageSrc={ProfileImage}
                        name="Ramon Ridwan"
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
                      firstUrl: "chat",
                      optionFirst: "Chat",
                      optionSecond: "Report User",
                      secondUrl: "report",
                    },
                    gridId: "users",
                    gridValue: [
                      <User
                        imageSrc={ProfileImage}
                        name="Ramon Ridwan"
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
                      bgColor: "red",
                      columnPosition: "first",
                      text: "Down",
                    },
                  },
                  {
                    checked: false,
                    dotOption: {
                      firstUrl: "chat",
                      optionFirst: "Chat",
                      optionSecond: "Report User",
                      secondUrl: "report",
                    },
                    gridId: "users",
                    gridValue: [
                      <User
                        imageSrc={ProfileImage}
                        name="Ramon Ridwan"
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
                      firstUrl: "chat",
                      optionFirst: "Chat",
                      optionSecond: "Report User",
                      secondUrl: "report",
                    },
                    gridId: "users",
                    gridValue: [
                      <User
                        imageSrc={ProfileImage}
                        name="Ramon Ridwan"
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
                  {
                    checked: false,
                    dotOption: {
                      firstUrl: "chat",
                      optionFirst: "Chat",
                      optionSecond: "Report User",
                      secondUrl: "report",
                    },
                    gridId: "users",
                    gridValue: [
                      <User
                        imageSrc={ProfileImage}
                        name="Ramon Ridwan"
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
                      bgColor: "red",
                      columnPosition: "first",
                      text: "Down",
                    },
                  },
                  {
                    checked: false,
                    dotOption: {
                      firstUrl: "chat",
                      optionFirst: "Chat",
                      optionSecond: "Report User",
                      secondUrl: "report",
                    },
                    gridId: "users",
                    gridValue: [
                      <User
                        imageSrc={ProfileImage}
                        name="Ramon Ridwan"
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
                      firstUrl: "chat",
                      optionFirst: "Chat",
                      optionSecond: "Report User",
                      secondUrl: "report",
                    },
                    gridId: "users",
                    gridValue: [
                      <User
                        imageSrc={ProfileImage}
                        name="Ramon Ridwan"
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
                      bgColor: "red",
                      columnPosition: "first",
                      text: "Down",
                    },
                  },
                  {
                    checked: false,
                    dotOption: {
                      firstUrl: "chat",
                      optionFirst: "Chat",
                      optionSecond: "Report User",
                      secondUrl: "report",
                    },
                    gridId: "users",
                    gridValue: [
                      <User
                        imageSrc={ProfileImage}
                        name="Ramon Ridwan"
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
                      firstUrl: "chat",
                      optionFirst: "Chat",
                      optionSecond: "Report User",
                      secondUrl: "report",
                    },
                    gridId: "users",
                    gridValue: [
                      <User
                        imageSrc={ProfileImage}
                        name="Ramon Ridwan"
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
                  {
                    checked: false,
                    dotOption: {
                      firstUrl: "chat",
                      optionFirst: "Chat",
                      optionSecond: "Report User",
                      secondUrl: "report",
                    },
                    gridId: "users",
                    gridValue: [
                      <User
                        imageSrc={ProfileImage}
                        name="Ramon Ridwan"
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
                      bgColor: "red",
                      columnPosition: "first",
                      text: "Down",
                    },
                  },
                ]}
              />
            }
          />
        </Container>
      </div>
    </DefaultPage>
  );
};

export default AgentUsers;
