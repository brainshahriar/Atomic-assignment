import { DefaultPage } from "components/templates/defaultpage";
import { ICONS } from "settings/settings";
import { ChatContainer } from "components/organisms/chat-container";
import ProfileImage from "./../../../assets/images/profile.png";
import { Heading } from "components/atoms/heading";
import { Container } from "components/atoms/container/container";
const AgentsTrade = () => {
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
      headingText="Agent Management   Tradel"
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
          Trade
        </Heading>
        <Container margin="28">
          <ChatContainer
            isUserDashboard={false}
            input={{
              fieldType: "text",
              isMargin: false,
              placeholder: "Start typing here",
              type: "withButton",
            }}
            list={[
              {
                message: [],
                user: {
                  altTag: "Profile Image",
                  imageSrc: ProfileImage,
                  isBadge: false,
                  isChatUserType: true,
                  isNotification: false,
                  isStatus: true,
                  name: "Agent Rose",
                  BadgeProps: {
                    BadgeNumber: 10,
                  },
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
                  imageSrc: ProfileImage,
                  isBadge: false,
                  isChatUserType: true,
                  isNotification: true,
                  isStatus: true,
                  name: "Daniel",
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
                  imageSrc: ProfileImage,
                  isBadge: true,
                  isChatUserType: true,
                  isNotification: false,
                  isStatus: false,
                  name: "Patience",
                  BadgeProps: {
                    BadgeNumber: 10,
                  },
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
                  imageSrc: ProfileImage,
                  isBadge: true,
                  isChatUserType: true,
                  isNotification: false,
                  isStatus: true,
                  name: "Evlyne",
                  BadgeProps: {
                    BadgeNumber: 9,
                  },
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
                  imageSrc: ProfileImage,
                  isBadge: true,
                  isChatUserType: true,
                  isNotification: false,
                  isStatus: false,
                  name: "Petaaa",                  
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
                  imageSrc: ProfileImage,
                  isBadge: true,
                  isChatUserType: true,
                  isNotification: false,
                  isStatus: false,
                  name: "Daniella",
                  
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
                  imageSrc: ProfileImage,
                  isBadge: true,
                  isChatUserType: true,
                  isNotification: false,
                  isStatus: true,
                  name: "Evlyne",
                  BadgeProps: {
                    BadgeNumber: 9,
                  },
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
                  imageSrc: ProfileImage,
                  isBadge: true,
                  isChatUserType: true,
                  isNotification: false,
                  isStatus: false,
                  name: "Sharone",
                  BadgeProps: {
                    BadgeNumber: 11,
                  },
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
                  imageSrc: ProfileImage,
                  isBadge: true,
                  isChatUserType: true,
                  isNotification: false,
                  isStatus: true,
                  name: "Layla",                 
                },
              },
            ]}
          />
        </Container>
      </div>
    </DefaultPage>
  );
};

export default AgentsTrade;
