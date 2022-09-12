import { useState } from "react";
import { DefaultPage } from "components/templates/defaultpage";
import { ICONS } from "settings/settings";
import ProfilePhoto from "../../../assets/images/profile.png";
import { Card } from "components/organisms/card/card";
import { Text } from "components/atoms/text";
import { Grid } from "components/organisms/gird/grid";
import { Icon } from "components/atoms/icon/icon";
import { Heading } from "components/atoms/heading";
import { Container } from "components/atoms/container/container";
import { Modal } from "components/molecules/modal/modal";
import { Image } from "components/atoms/image";
import { Button } from "components/atoms/button";
import TransactionImg from "./../../../assets/images/delete-transaction.svg";
const AgentTransactions = () => {
  const [isOpen, setisOpen] = useState(false);
  const handleDelete = () => {
    setisOpen(true);
  };
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
      headingText="Agent Management Transactions"
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
      <div className="p-agentTransactions">
        <Heading color="primary" type="h2">
          Transactions
        </Heading>
        <Container margin="28">
          <Card
            content={
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
                      optionFirst: "Delete",
                      firstEvent: handleDelete,
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
                      optionFirst: "Delete",
                      firstEvent: handleDelete,
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
                      optionFirst: "Delete",
                      firstEvent: handleDelete,
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
                      optionFirst: "Delete",
                      firstEvent: handleDelete,
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
                  {
                    checked: false,
                    dotOption: {
                      optionFirst: "Delete",
                      firstEvent: handleDelete,
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
                      optionFirst: "Delete",
                      firstEvent: handleDelete,
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
                      optionFirst: "Delete",
                      firstEvent: handleDelete,
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
                  {
                    checked: false,
                    dotOption: {
                      optionFirst: "Delete",
                      firstEvent: handleDelete,
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
            }
            buttonLink="viewmore"
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

export default AgentTransactions;
