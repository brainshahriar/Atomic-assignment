import { DefaultPage } from "components/templates/defaultpage";
import { ICONS } from "settings/settings";
import CoinBaseImage from "../../../assets/images/icons/coinbase.svg";
import { Card } from "components/organisms/card/card";
import { Text } from "components/atoms/text";
import { Grid } from "components/organisms/gird/grid";
import { Heading } from "components/atoms/heading";
import { Container } from "components/atoms/container/container";
import { Column } from "components/organisms/column/column";
import { Button } from "components/atoms/button";

const AdminPayments = () => {
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
      headingText="Admin Management   Payments"
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
      <div className="p-adminPayments">
        <Column
          content={[
            <Heading color="primary" type="h2">
              Payments
            </Heading>,
            <Text color="primary" type="font14" fontWeight="bold">
              FILTER
            </Text>,
          ]}
        />

        <Container margin="28">
          <Card
            content={
              <>
                <Grid
                  data={[
                    {
                      gridValue: [
                        <Text color="primary" fontWeight="bold" type="font12">
                          Payment ID
                        </Text>,
                        <Text color="primary" fontWeight="bold" type="font12">
                          Type
                        </Text>,
                        <Text color="primary" fontWeight="bold" type="font12">
                          Amount
                        </Text>,
                        <Text color="primary" fontWeight="bold" type="font12">
                          Date
                        </Text>,
                        <Text color="primary" fontWeight="bold" type="font12">
                          Status
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
                      checked: false,
                      gridId: "users",
                    },
                    {
                      gridValue: [
                        <Text color="primary" type="font12">
                          #29840981
                        </Text>,
                        <Text color="primary" type="font12">
                          User
                        </Text>,
                        <Text color="primary" type="font12">
                          #39,000.00
                        </Text>,
                        <Text color="primary" type="font12">
                          19/08/2019
                        </Text>,
                        <Button
                          buttonType="primary"
                          type="button"
                          bgColor="pasteGreen"
                          isPadding
                        >
                          Paid
                        </Button>,
                        <Text color="primary" type="font12">
                          Ramonridwan@protonmail.com
                        </Text>,
                      ],
                      isCheckbox: false,
                      checked: false,
                      dotOption: {
                        firstUrl: "delete/id",
                        optionFirst: "Delete",
                      },
                      gridId: "users",
                    },
                    {
                      gridValue: [
                        <Text color="primary" type="font12">
                          #29840981
                        </Text>,
                        <Text color="primary" type="font12">
                          Agent
                        </Text>,
                        <Text color="primary" type="font12">
                          #39,000.00
                        </Text>,
                        <Text color="primary" type="font12">
                          19/08/2019
                        </Text>,
                        <Button
                          buttonType="primary"
                          type="button"
                          bgColor="pasteGreen"
                          isPadding
                        >
                          Pending
                        </Button>,
                        <Text color="primary" type="font12">
                          Ramonridwan@protonmail.com
                        </Text>,
                      ],
                      isCheckbox: false,
                      checked: false,
                      dotOption: {
                        firstUrl: "release/id",
                        optionFirst: "Release",
                      },
                      gridId: "users",
                    },
                    {
                      gridValue: [
                        <Text color="primary" type="font12">
                          #29840981
                        </Text>,
                        <Text color="primary" type="font12">
                          Agent
                        </Text>,
                        <Text color="primary" type="font12">
                          #39,000.00
                        </Text>,
                        <Text color="primary" type="font12">
                          19/08/2019
                        </Text>,
                        <Button
                          buttonType="primary"
                          type="button"
                          bgColor="purpleGradient"
                          isPadding
                        >
                          Processing
                        </Button>,
                        <Text color="primary" type="font12">
                          Ramonridwan@protonmail.com
                        </Text>,
                      ],
                      isCheckbox: false,
                      checked: false,
                      dotOption: {
                        firstUrl: "delete/id",
                        optionFirst: "Delete",
                      },
                      gridId: "users",
                    },
                    {
                      gridValue: [
                        <Text color="primary" type="font12">
                          #29840981
                        </Text>,
                        <Text color="primary" type="font12">
                          User
                        </Text>,
                        <Text color="primary" type="font12">
                          #39,000.00
                        </Text>,
                        <Text color="primary" type="font12">
                          19/08/2019
                        </Text>,
                        <Button
                          buttonType="primary"
                          type="button"
                          bgColor="pasteGreen"
                          isPadding
                        >
                          Paid
                        </Button>,
                        <Text color="primary" type="font12">
                          Ramonridwan@protonmail.com
                        </Text>,
                      ],
                      isCheckbox: false,
                      checked: false,
                      dotOption: {
                        firstUrl: "delete/id",
                        optionFirst: "Delete",
                      },
                      gridId: "users",
                    },
                    {
                      gridValue: [
                        <Text color="primary" type="font12">
                          #29840981
                        </Text>,
                        <Text color="primary" type="font12">
                          Agent
                        </Text>,
                        <Text color="primary" type="font12">
                          #39,000.00
                        </Text>,
                        <Text color="primary" type="font12">
                          19/08/2019
                        </Text>,
                        <Button
                          buttonType="primary"
                          type="button"
                          bgColor="pasteGreen"
                          isPadding
                        >
                          Paid
                        </Button>,
                        <Text color="primary" type="font12">
                          Ramonridwan@protonmail.com
                        </Text>,
                      ],
                      isCheckbox: false,
                      checked: false,
                      dotOption: {
                        firstUrl: "delete/id",
                        optionFirst: "Delete",
                      },
                      gridId: "users",
                    },
                    {
                      gridValue: [
                        <Text color="primary" type="font12">
                          #29840981
                        </Text>,
                        <Text color="primary" type="font12">
                          User
                        </Text>,
                        <Text color="primary" type="font12">
                          #39,000.00
                        </Text>,
                        <Text color="primary" type="font12">
                          19/08/2019
                        </Text>,
                        <Button
                          buttonType="primary"
                          type="button"
                          bgColor="red"
                          isPadding
                        >
                          Cancelled
                        </Button>,
                        <Text color="primary" type="font12">
                          Ramonridwan@protonmail.com
                        </Text>,
                      ],
                      isCheckbox: false,
                      checked: false,
                      dotOption: {
                        firstUrl: "delete/id",
                        optionFirst: "Delete",
                      },
                      gridId: "users",
                    },
                    {
                      gridValue: [
                        <Text color="primary" type="font12">
                          #29840981
                        </Text>,
                        <Text color="primary" type="font12">
                          User
                        </Text>,
                        <Text color="primary" type="font12">
                          #39,000.00
                        </Text>,
                        <Text color="primary" type="font12">
                          19/08/2019
                        </Text>,
                        <Button
                          buttonType="primary"
                          type="button"
                          bgColor="pasteGreen"
                          isPadding
                        >
                          Paid
                        </Button>,
                        <Text color="primary" type="font12">
                          Ramonridwan@protonmail.com
                        </Text>,
                      ],
                      isCheckbox: false,
                      checked: false,
                      dotOption: {
                        firstUrl: "delete/id",
                        optionFirst: "Delete",
                      },
                      gridId: "users",
                    },
                    {
                      gridValue: [
                        <Text color="primary" type="font12">
                          #29840981
                        </Text>,
                        <Text color="primary" type="font12">
                          User
                        </Text>,
                        <Text color="primary" type="font12">
                          #39,000.00
                        </Text>,
                        <Text color="primary" type="font12">
                          19/08/2019
                        </Text>,
                        <Button
                          buttonType="primary"
                          type="button"
                          bgColor="purpleGradient"
                          isPadding
                        >
                          Paid
                        </Button>,
                        <Text color="primary" type="font12">
                          Ramonridwan@protonmail.com
                        </Text>,
                      ],
                      isCheckbox: false,
                      checked: false,
                      dotOption: {
                        firstUrl: "delete/id",
                        optionFirst: "Delete",
                      },
                      gridId: "users",
                    },
                    {
                      gridValue: [
                        <Text color="primary" type="font12">
                          #29840981
                        </Text>,
                        <Text color="primary" type="font12">
                          User
                        </Text>,
                        <Text color="primary" type="font12">
                          #39,000.00
                        </Text>,
                        <Text color="primary" type="font12">
                          19/08/2019
                        </Text>,
                        <Button
                          buttonType="primary"
                          type="button"
                          bgColor="pasteGreen"
                          isPadding
                        >
                          Paid
                        </Button>,
                        <Text color="primary" type="font12">
                          Ramonridwan@protonmail.com
                        </Text>,
                      ],
                      isCheckbox: false,
                      checked: false,
                      dotOption: {
                        firstUrl: "delete/id",
                        optionFirst: "Delete",
                      },
                      gridId: "users",
                    },
                  ]}
                />
              </>
            }
            buttonLink="viewmore"
          />
        </Container>
      </div>
    </DefaultPage>
  );
};

export default AdminPayments;
