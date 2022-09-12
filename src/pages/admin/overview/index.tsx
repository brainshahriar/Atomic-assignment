import { useState } from "react";
import { DefaultPage } from "components/templates/defaultpage";
import { ICONS } from "settings/settings";
import CoinBaseImage from "../../../assets/images/icons/coinbase.svg";
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
import { Icon } from "components/atoms/icon/icon";
import { Modal } from "components/molecules/modal/modal";
import { Image } from "components/atoms/image";
import { User } from "components/molecules/user";
import { ServiceCard } from "components/molecules/service-card";
import { IMAGES } from "settings/settings";
import { Input } from "components/atoms/input";
const AdminOverview = () => {
  const [isOpen, setisOpen] = useState(false);
  const handleDelete = () => {
    setisOpen(true);
  };
  const addCard = () => {
    window.location.href = "/admin/addcard";
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
      headingText="Agent Management   System Overview"
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
      <div className="p-adminOverview">
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
                countCardTitle="Total Number Of Users"
                countNumber={10000}
                isGraph
                isThreeDot
                thredotFirstText="View"
                thredotSecondText="Delete"
              />,
              <CountCard
                countCardPercent="11.8"
                countCardTitle="Total Number Of Agents"
                countNumber={434}
                isGraph
                isThreeDot
                thredotFirstText="View"
                thredotSecondText="Delete"
              />,
              <CountCard
                countCardPercent="11.8"
                countCardTitle="Total Number Of Transactions"
                countNumber={40000}
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
          <Card
            buttonLink="/admin/cards"
            content={
              <Container margin="33">
                <Column
                  alignItems="center"
                  columnGap="45"
                  content={[
                    <Column
                      columnGap="10"
                      content={[
                        <ServiceCard
                          color="white"
                          bgColor="gradientBlue"
                          flagImgSrc={IMAGES.usaFlag}
                          imgSrc={IMAGES.amazon}
                          imgType="large"
                          text="Amazon Card"
                          textType="font8"
                        />,
                        <ServiceCard
                          color="white"
                          bgColor="mixedGradient"
                          flagImgSrc={IMAGES.canadaFlag}
                          imgSrc={IMAGES.music}
                          imgType="mediumSmall"
                          text="iTunes Card"
                          textType="font8"
                        />,
                        <ServiceCard
                          color="primary"
                          flagImgSrc={IMAGES.england}
                          imgSrc={IMAGES.googlePlayStore}
                          imgType="smallMedium"
                          text="Google Play Card"
                          textType="font8"
                        />,
                        <ServiceCard
                          color="white"
                          bgColor="gradientBlue"
                          flagImgSrc={IMAGES.canadaFlag}
                          imgSrc={IMAGES.amazon}
                          imgType="large"
                          text="Amazon Card"
                          textType="font8"
                        />,
                        <ServiceCard
                          color="primary"
                          flagImgSrc={IMAGES.usaFlag}
                          imgSrc={IMAGES.otherCard}
                          imgType="mediumLarge"
                          text="Other Cards"
                          textType="font8"
                        />,
                      ]}
                    />,
                    <Button
                      children=""
                      imgsrc={ICONS.plus}
                      size="rounded"
                      type="button"
                      withIcon={true}
                      onClick={addCard}
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
            title="Cards"
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
            content={
              <Container margin="33">
                <Column
                  alignItems="center"
                  columnGap="91"
                  justifyContent="left"
                  content={[
                    <Column
                      columnGap="10"
                      content={[
                        <ServiceCard
                          color="white"
                          bgColor="pinkGradient"
                          imgSrc={IMAGES.bitcoin}
                          imgType="medium"
                          text="Bitcoin"
                          textType="font12"
                          type="square"
                        />,

                        <ServiceCard
                          color="white"
                          bgColor="gradientBlue"
                          imgSrc={IMAGES.etherum}
                          imgType="medium"
                          text="Ethereum"
                          textType="font12"
                          type="square"
                        />,
                      ]}
                    />,
                    <Column
                      content={[
                        <form>
                          <div style={{display: 'flex'}}>
                          <Text color="primary" type="font14" >
                            Product
                          </Text>
                          </div>

                          <Container margin="16">
                            <Input
                              fieldType="text"
                              placeholder="Bitcoin"
                              isMargin={false}
                            />
                          </Container>

                          <Input
                            fieldType="text"
                            placeholder="1-20"
                            isMargin={false}
                          />
                          <Container margin="28">
                            <Button>Add Coin</Button>
                          </Container>
                        </form>,
                      ]}
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
            title="Bitcoin & Ethereum"
          />
        </Container>
        <Container margin="33">
          <Card
            title="Agents"
            buttonLink="/admin/agents"
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
                          name="Quadri Lawal"
                          isChatUserType={false}
                          isStatus={false}
                          isNotification={false}
                          isBadge={false}
                        />,
                        <Text color="primary" type="font12">
                          Quaderilawal@protonmail.com
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
                          name="Tusweet iyanah"
                          isChatUserType={false}
                          isStatus={false}
                          isNotification={false}
                          isBadge={false}
                        />,
                        <Text color="primary" type="font12">
                          Tusweetiyanah@protonmail.com
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
                          name="Lai Muhammed"
                          isChatUserType={false}
                          isStatus={false}
                          isNotification={false}
                          isBadge={false}
                        />,
                        <Text color="primary" type="font12">
                          Laimuhammed@protonmail.com
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
                          name="Tunde Abdul"
                          isChatUserType={false}
                          isStatus={false}
                          isNotification={false}
                          isBadge={false}
                        />,
                        <Text color="primary" type="font12">
                          Tundeabdul@protonmail.com
                        </Text>,
                      ],
                      isCheckbox: false,
                      status: {
                        bgColor: "pasteGreen",
                        columnPosition: "first",
                        text: "Active",
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
            title="Payments"
            buttonLink="/admin/payments"
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
                          User/Agent
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
                          name="Quadri Lawal"
                          isChatUserType={true}
                          isStatus={false}
                          isNotification={false}
                          isBadge={false}
                          type="agent"
                        />,
                        <Text color="primary" type="font12">
                          Quaderilawal@protonmail.com
                        </Text>,
                      ],
                      isCheckbox: false,
                      status: {
                        bgColor: "pasteGreen",
                        columnPosition: "first",
                        text: "Processing",
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
                          name="Tusweet iyanah"
                          isChatUserType={true}
                          isStatus={false}
                          isNotification={false}
                          isBadge={false}
                          type="user"
                        />,
                        <Text color="primary" type="font12">
                          Tusweetiyanah@protonmail.com
                        </Text>,
                      ],
                      isCheckbox: false,
                      status: {
                        bgColor: "red",
                        columnPosition: "first",
                        text: "Decline",
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
                          isChatUserType={true}
                          isStatus={false}
                          isNotification={false}
                          isBadge={false}
                          type="agent"
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
                          name="Lai Muhammed"
                          isChatUserType={true}
                          isStatus={false}
                          isNotification={false}
                          isBadge={false}
                          type="agent"
                        />,
                        <Text color="primary" type="font12">
                          Laimuhammed@protonmail.com
                        </Text>,
                      ],
                      isCheckbox: false,
                      status: {
                        bgColor: "red",
                        columnPosition: "first",
                        text: "Decline",
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

export default AdminOverview;
