import { DefaultPage } from "components/templates/defaultpage";
import { ICONS } from "settings/settings";
import ProfilePhoto from "../../../assets/images/profile.png";
import { Heading } from "components/atoms/heading";
import { Container } from "components/atoms/container/container";
import { ChatContainer } from "components/organisms/chat-container";

const UserTrade = () => {
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
      headingText="User Management   Trade"
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
      <div className="p-userTrade">
        <Heading color="primary" type="h2">
          Trade
        </Heading>
        <Container margin="28">
          <ChatContainer
            input={{
              fieldType: "text",
              isMargin: false,
              placeholder: "Start typing here",
              type: "withButton",
            }}
            isUserDashboard
            list={[
              {
                message: [],
                user: {
                  altTag: "Profile Image",
                  imageSrc: ProfilePhoto,
                  isBadge: false,
                  isChatUserType: true,
                  isNotification: false,
                  isStatus: true,
                  name: "Ramon Ridwan",
                },
              },
              {
                message: [
                  {
                    text: "Yes we currently run both on our platform here",
                    time: "Me, 10.:22 ",
                  },
                  {
                    status: true,
                    text: "Hello am new to this system can i get a breakdown on how it works?",
                    time: "Daniel, 10:24",
                  },
                  {
                    text: "Please, can you go into details bout the service",
                    time: "Me, 3 minutes ago",
                  },
                  {
                    text: "Hello am new to this system can i get a breakdown on how it works?",
                    time: "Daniel, 9 minutes ago",
                  },
                  {
                    status: true,
                    text: "Yes we currently run both on our platform here",
                    time: "Agent Rue, 9 minutes ago",
                  },
                ],
                user: {
                  altTag: "Profile Image",
                  imageSrc: ProfilePhoto,
                  isBadge: false,
                  isChatUserType: true,
                  isNotification: true,
                  isStatus: true,
                  name: "Agent Rue",
                },
              },
              {
                message: [
                  {
                    text: "Hello am new to this system can i get a breakdown on how it works?",
                    time: "Me, 10.:22 ",
                  },
                  {
                    status: true,
                    text: "Yes we currently run both on our platform here",
                    time: "Daniel, 10:24",
                  },
                  {
                    text: "Please, can you go into details bout the service",
                    time: "Me, 3 minutes ago",
                  },
                  {
                    text: "Hello am new to this system can i get a breakdown on how it works?",
                    time: "Daniel, 9 minutes ago",
                  },
                  {
                    status: true,
                    text: "Yes we currently run both on our platform here",
                    time: "Agent Rue, 9 minutes ago",
                  },
                ],
                user: {
                  altTag: "Profile Image",
                  imageSrc: ProfilePhoto,
                  isBadge: true,
                  isChatUserType: true,
                  isNotification: false,
                  isStatus: false,
                  name: "Agent Daniel",
                },
              },
              {
                message: [
                  {
                    text: "Yes we currently run both on our platform here",
                    time: "Me, 10.:22 ",
                  },
                  {
                    status: true,
                    text: "Hello am new to this system can i get a breakdown on how it works?",
                    time: "Daniel, 10:24",
                  },
                  {
                    text: "Please, can you go into details bout the service",
                    time: "Me, 3 minutes ago",
                  },
                  {
                    text: "Hello am new to this system can i get a breakdown on how it works?",
                    time: "Daniel, 9 minutes ago",
                  },
                  {
                    status: true,
                    text: "Yes we currently run both on our platform here",
                    time: "Agent Rue, 9 minutes ago",
                  },
                ],
                user: {
                  altTag: "Profile Image",
                  imageSrc: ProfilePhoto,
                  isBadge: false,
                  isChatUserType: true,
                  isNotification: false,
                  isStatus: true,
                  name: "Agent William",
                },
              },
            ]}
          />
        </Container>
      </div>
    </DefaultPage>
  );
};

export default UserTrade;
