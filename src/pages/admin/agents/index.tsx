import { useState } from "react";
import { Input } from "components/atoms/input";
import { DefaultPage } from "components/templates/defaultpage";
import { ICONS } from "settings/settings";
import CoinBaseImage from "../../../assets/images/icons/coinbase.svg";
import ProfileImage from "./../../../assets/images/profile.png";
import ModalImage from "./../../../assets/images/circle-right-pink.png";
import { Card } from "components/organisms/card/card";
import { Text } from "components/atoms/text";
import { Grid } from "components/organisms/gird/grid";
import { User } from "components/molecules/user";
import { Heading } from "components/atoms/heading";
import { Container } from "components/atoms/container/container";
import { Column } from "components/organisms/column/column";
import { Button } from "components/atoms/button";
import { Modal } from "components/molecules/modal/modal";
import { Image } from "components/atoms/image";
const AdminAgents = () => {
  const [showModal, setshowModal] = useState(false);

  const blockAgent = () => {
    setshowModal(true);
  };

  return (
    <DefaultPage
      header={{
        imgSrc: ICONS.notification,
        badgeNumber: 24,
        profileImgSrc: CoinBaseImage,
        altTag: "CoinBase",
        text: "CoinBase",
      }}
      isAgentDashboard={true}
      userType="admin"
      headingText="Admin Management   Agents"
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
      <div className="p-adminUsers">
        <Column
          content={[
            <Heading color="primary" type="h2">
              Agents
            </Heading>,
            <>
              <Column
                content={[
                  <Input
                    type="search"
                    placeholder="Search Agents"
                    fieldType="text"
                    isMargin={false}
                    size="searchSmall"
                  />,
                  <Button iconWithText={true} imgsrc={ICONS.userIcon}>
                    Add Agent
                  </Button>,
                ]}
              />
            </>,
          ]}
        />

        <Container margin="28">
          <Card
            content={
              <>
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
                      isCheckbox: true,
                      type: "heading",
                    },
                    {
                      checked: false,
                      dotOption: {
                        firstUrl: "agents/id",
                        optionFirst: "View",
                        optionSecond: "Block Agent",
                        secondEvent: blockAgent,
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
                      isCheckbox: true,
                      status: {
                        bgColor: "pasteGreen",
                        columnPosition: "first",
                        text: "Active",
                      },
                    },
                    {
                      checked: false,
                      dotOption: {
                        firstUrl: "agents/id",
                        optionFirst: "View",
                        optionSecond: "Block Agent",
                        secondEvent: blockAgent,
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
                      isCheckbox: true,
                      status: {
                        bgColor: "red",
                        columnPosition: "first",
                        text: "Down",
                      },
                    },
                    {
                      checked: false,
                      dotOption: {
                        firstUrl: "agents/id",
                        optionFirst: "View",
                        optionSecond: "Block Agent",
                        secondEvent: blockAgent,
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
                      isCheckbox: true,
                      status: {
                        bgColor: "pasteGreen",
                        columnPosition: "first",
                        text: "Active",
                      },
                    },
                    {
                      checked: false,
                      dotOption: {
                        firstUrl: "agents/id",
                        optionFirst: "View",
                        optionSecond: "Block Agent",
                        secondEvent: blockAgent,
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
                      isCheckbox: true,
                      status: {
                        bgColor: "purpleGradient",
                        columnPosition: "first",
                        text: "Pending",
                      },
                    },
                    {
                      checked: false,
                      dotOption: {
                        firstUrl: "agents/id",
                        optionFirst: "View",
                        optionSecond: "Block Agent",
                        secondEvent: blockAgent,
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
                      isCheckbox: true,
                      status: {
                        bgColor: "red",
                        columnPosition: "first",
                        text: "Down",
                      },
                    },
                    {
                      checked: false,
                      dotOption: {
                        firstUrl: "agents/id",
                        optionFirst: "View",
                        optionSecond: "Block Agent",
                        secondEvent: blockAgent,
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
                      isCheckbox: true,
                      status: {
                        bgColor: "pasteGreen",
                        columnPosition: "first",
                        text: "Active",
                      },
                    },
                    {
                      checked: false,
                      dotOption: {
                        firstUrl: "agents/id",
                        optionFirst: "View",
                        optionSecond: "Block Agent",
                        secondEvent: blockAgent,
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
                      isCheckbox: true,
                      status: {
                        bgColor: "red",
                        columnPosition: "first",
                        text: "Down",
                      },
                    },
                    {
                      checked: false,
                      dotOption: {
                        firstUrl: "agents/id",
                        optionFirst: "View",
                        optionSecond: "Block Agent",
                        secondEvent: blockAgent,
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
                      isCheckbox: true,
                      status: {
                        bgColor: "pasteGreen",
                        columnPosition: "first",
                        text: "Active",
                      },
                    },
                    {
                      checked: false,
                      dotOption: {
                        firstUrl: "agents/id",
                        optionFirst: "View",
                        optionSecond: "Block Agent",
                        secondEvent: blockAgent,
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
                      isCheckbox: true,
                      status: {
                        bgColor: "purpleGradient",
                        columnPosition: "first",
                        text: "Pending",
                      },
                    },
                    {
                      checked: false,
                      dotOption: {
                        firstUrl: "agents/id",
                        optionFirst: "View",
                        optionSecond: "Block Agent",
                        secondEvent: blockAgent,
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
                      isCheckbox: true,
                      status: {
                        bgColor: "red",
                        columnPosition: "first",
                        text: "Down",
                      },
                    },
                    {
                      checked: false,
                      dotOption: {
                        firstUrl: "user/id",
                        optionFirst: "View",
                        optionSecond: "Block User",
                        secondEvent: blockAgent,
                      },
                      gridId: "users",
                      gridValue: [
                        <Container margin="16">
                          <Text type="font12" color="primary" fontWeight="bold">
                            230 Agents
                          </Text>
                        </Container>,
                        <></>,
                      ],
                      isCheckbox: false,
                      type: "heading",
                    },
                  ]}
                />
              </>
            }
            buttonLink="viewmore"
          />
        </Container>
        <Modal
          content={
            <>
              <Container margin="72">
                <Image altTag="Block User?" imageSrc={ModalImage} />
              </Container>
              <Container margin="45">
                <Heading color="secondary" type="h1">
                  Delete Transaction?
                </Heading>
              </Container>
              <Container margin="16">
                <Text color="primary" type="font12">
                  Clicking the proceed button will deny agent access
                </Text>
                <Text color="primary" type="font12">
                  into the entire system proceed?
                </Text>
              </Container>
              <Container margin="45">
                <Button>Proceed</Button>
              </Container>
            </>
          }
          opened={showModal}
        />
      </div>
    </DefaultPage>
  );
};

export default AdminAgents;
