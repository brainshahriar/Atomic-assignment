import { useState } from "react";
import { DefaultPage } from "components/templates/defaultpage";
import { ICONS } from "settings/settings";
import ProfileImage from "../../../assets/images/profile.png";
import TransactionImg from "./../../../assets/images/delete-transaction.svg";
import CalenderIcon from "../../../assets/images/icons/calender.svg";
import { Card } from "components/organisms/card/card";
import { Text } from "components/atoms/text";
import { Grid } from "components/organisms/gird/grid";
import { Column } from "components/organisms/column/column";
import { Heading } from "components/atoms/heading";
import { Container } from "components/atoms/container/container";
import { CountCard } from "components/molecules/countCard";
import { TextCard } from "components/molecules/textcard/textcard";
import { Button } from "components/atoms/button";
import { Wallet } from "components/organisms/wallet-section";
import { Icon } from "components/atoms/icon/icon";
import { Modal } from "components/molecules/modal/modal";
import { Image } from "components/atoms/image";
import { User } from "components/molecules/user";

const AgentOverview = () => {
  const [isOpen, setisOpen] = useState(false);
  const handleDelete = () => {
    setisOpen(true);
  };

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
      headingText="Agent Management   System Overview"
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
      <div className="p-agentOverview">
        <Column
          content={[
            <Heading color="primary" type="h2">
              Overview
            </Heading>,
            <img src={CalenderIcon} alt="" />,
          ]}
        />
        <Container margin="28">
          <Column
            columnGap="45"
            content={[
              <CountCard
                countCardPercent="22.8"
                countCardTitle="Total Number Of Transaction"
                countNumber={15000}
                isGraph
                isThreeDot
                thredotFirstText="View"
                thredotSecondText="Delete"
              />,
              <CountCard
                countCardPercent="11.8"
                countCardTitle="Total Number Of Trade"
                countNumber={43498}
                isGraph
                isThreeDot
                thredotFirstText="View"
                thredotSecondText="Delete"
              />,
              <CountCard
                countCardPercent="11.8"
                countCardTitle="Market Rate Value"
                countNumber={87}
                isGraph
                isThreeDot
                thredotFirstText="View"
                thredotSecondText="Delete"
              />,
            ]}
          />
        </Container>

        <Container margin="33">
          <Card
            content={
              <Container margin="33">
                <Column
                  alignItems="center"
                  columnGap="45"
                  content={[
                    <Column
                      columnGap="91"
                      content={[
                        <TextCard
                          heading="iTunes Card"
                          textitems={[
                            { name: "USA Physical", value: "N400.00" },
                            { name: "USA E-Code card", value: "N400.00" },
                            { name: "UK Physical Card", value: "N400.00" },
                            { name: "UK E-Code Card", value: "N400.00" },
                          ]}
                        />,
                        <TextCard
                          heading="iTunes Card"
                          textitems={[
                            { name: "USA Physical", value: "N400.00" },
                            { name: "USA E-Code card", value: "N400.00" },
                            { name: "UK Physical Card", value: "N400.00" },
                            { name: "UK E-Code Card", value: "N400.00" },
                          ]}
                        />,
                        <TextCard
                          heading="iTunes Card"
                          textitems={[
                            { name: "USA Physical", value: "N400.00" },
                            { name: "USA E-Code card", value: "N400.00" },
                            { name: "UK Physical Card", value: "N400.00" },
                            { name: "UK E-Code Card", value: "N400.00" },
                          ]}
                        />,
                      ]}
                    />,
                    <Button
                      children=""
                      imgsrc={ICONS.arrow}
                      size="rounded"
                      type="button"
                      withIcon={true}
                    />,
                  ]}
                />
              </Container>
            }
            dotOption={{
              firstUrl: "view",
              optionFirst: "View",
              optionSecond: "Delete",
              secondUrl: "delete",
            }}
            title="Conversion Rate to Naira"
          />
        </Container>

        <Container margin="33">
          <Wallet
            boldText="GOGE AFRICA"
            bottomTextFirst="Please note this’s the total sum of ya’ transaction here on "
            bottomTextSecond="Please note this the current balance amount left on ya’ wallet."
            btnText="Withdraw Funds"
            btnTextFirst="Total Earnings"
            btnTextSecond="Balance"
            headingFirst="#120000.00"
            headingSecond="#30000.00"
            headingText="Wallet"
          />
        </Container>
        <Container margin="33">
          <Card
            title="Users"
            buttonLink="users"
            content={
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
              </Container>
            }
          />
        </Container>
        <Container margin="33">
          <Card
            title="Transactions"
            content={
              <Container margin="52">
                <Grid
                  data={[
                    {
                      checked: false,
                      gridId: "transactions",
                      gridValue: [
                        <Text color="primary" fontWeight="bold" type="font12">
                          Date
                        </Text>,
                        <Text color="primary" fontWeight="bold" type="font12">
                          Transaction ID
                        </Text>,
                        <Text color="primary" fontWeight="bold" type="font12">
                          Type
                        </Text>,
                        <Text color="primary" fontWeight="bold" type="font12">
                          Name
                        </Text>,
                        <Text color="primary" fontWeight="bold" type="font12">
                          Value
                        </Text>,
                        <Text color="primary" fontWeight="bold" type="font12">
                          Return
                        </Text>,
                        <Text color="primary" fontWeight="bold" type="font12">
                          Status
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
                        optionFirst: "View",
                        firstUrl: "transactions",
                        optionSecond: "Delete",
                        secondEvent: handleDelete,
                      },
                      gridId: "transactions",
                      gridValue: [
                        <Text color="primary" type="font12">
                          14/01/2019
                        </Text>,
                        <Text color="primary" type="font12">
                          12345678
                        </Text>,
                        <Icon icon="bitcoin" />,
                        <Text color="primary" type="font12">
                          Bitcoin
                        </Text>,
                        <Text color="primary" type="font12">
                          $100
                        </Text>,
                        <Text color="primary" type="font12">
                          #18000
                        </Text>,
                      ],
                      isCheckbox: false,
                      status: {
                        bgColor: "pasteGreen",
                        columnPosition: "last",
                        text: "Completed",
                      },
                    },
                    {
                      checked: false,
                      dotOption: {
                        optionFirst: "View",
                        firstUrl: "transactions",
                        optionSecond: "Delete",
                        secondEvent: handleDelete,
                      },
                      gridId: "transactions",
                      gridValue: [
                        <Text color="primary" type="font12">
                          14/01/2019
                        </Text>,
                        <Text color="primary" type="font12">
                          12345678
                        </Text>,
                        <Icon icon="amazon" />,
                        <Text color="primary" type="font12">
                          Amazon
                        </Text>,
                        <Text color="primary" type="font12">
                          $100
                        </Text>,
                        <Text color="primary" type="font12">
                          #18000
                        </Text>,
                      ],
                      isCheckbox: false,
                      status: {
                        bgColor: "red",
                        columnPosition: "last",
                        text: "Failed",
                      },
                    },
                    {
                      checked: false,
                      dotOption: {
                        optionFirst: "View",
                        firstUrl: "transactions",
                        optionSecond: "Delete",
                        secondEvent: handleDelete,
                      },
                      gridId: "transactions",
                      gridValue: [
                        <Text color="primary" type="font12">
                          14/01/2019
                        </Text>,
                        <Text color="primary" type="font12">
                          12345678
                        </Text>,
                        <Icon icon="bitcoin" />,
                        <Text color="primary" type="font12">
                          Bitcoin
                        </Text>,
                        <Text color="primary" type="font12">
                          $100
                        </Text>,
                        <Text color="primary" type="font12">
                          #18000
                        </Text>,
                      ],
                      isCheckbox: false,
                      status: {
                        bgColor: "purpleGradient",
                        columnPosition: "last",
                        text: "In Progress",
                      },
                    },
                    {
                      checked: false,
                      dotOption: {
                        optionFirst: "View",
                        firstUrl: "transactions",
                        optionSecond: "Delete",
                        secondEvent: handleDelete,
                      },
                      gridId: "transactions",
                      gridValue: [
                        <Text color="primary" type="font12">
                          14/01/2019
                        </Text>,
                        <Text color="primary" type="font12">
                          12345678
                        </Text>,
                        <Icon icon="amazon" />,
                        <Text color="primary" type="font12">
                          Amazon
                        </Text>,
                        <Text color="primary" type="font12">
                          $100
                        </Text>,
                        <Text color="primary" type="font12">
                          #18000
                        </Text>,
                      ],
                      isCheckbox: false,
                      status: {
                        bgColor: "pasteGreen",
                        columnPosition: "last",
                        text: "Completed",
                      },
                    },
                  ]}
                />
              </Container>
            }
            dotOption={{
              optionFirst: "View",
              firstUrl: "transactions",
              optionSecond: "Delete",
              secondEvent: handleDelete,
            }}
            buttonLink="transactions"
          />
        </Container>
        <Modal
          content={
            <>
              <Container margin="72">
                <Image altTag="Delete Transaction?" imageSrc={TransactionImg} />
              </Container>
              <Container margin="45">
                <Heading color="secondary" type="h1">
                  Delete Transaction?
                </Heading>
              </Container>
              <Container margin="16">
                <Text color="primary" type="font12">
                  Clicking the proceed button will deny user of this
                </Text>
                <Text color="primary" type="font12">
                  particular transaction history proceed?
                </Text>
              </Container>
              <Container margin="45">
                <Button>Proceed</Button>
              </Container>
            </>
          }
          opened={isOpen}
        />
      </div>
    </DefaultPage>
  );
};

export default AgentOverview;
