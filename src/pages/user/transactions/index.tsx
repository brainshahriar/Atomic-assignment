import { Heading } from "components/atoms/heading";
import { GridRow } from "components/molecules/gridrow/gridrow";
import { DefaultPage } from "components/templates/defaultpage";
import { ICONS } from "settings/settings";
import ProfilePhoto from "../../../assets/images/profile.png";
import { Text } from "components/atoms/text";
import { Icon } from "components/atoms/icon/icon";
import { Button, ButtonProps } from "components/atoms/button";
import { ThreeDotMenuProps } from "components/atoms/threeDotMenu";
export type Grid = {
  gridValue: React.ReactNode[];
  dotOption: ThreeDotMenuProps;
  status: {
    text: string;
    bgColor: ButtonProps["bgColor"];
    columnPosition: "first" | "last";
  };
  isCheckbox: boolean;
}[];

const UserTransactions = () => {
  const TransactionsList: Grid = [
    {
      gridValue: [
        <Text children="14/01/2019" type="font12" color="primary" />,
        <Text children="12345678" type="font12" color="primary" />,
        <Icon icon="bitcoin" />,
        <Text children="Bitcoin" type="font12" color="primary" />,
        <Text children="$100" type="font12" color="primary" />,
        <Text children="#18000" type="font12" color="primary" />,
      ],
      dotOption: {
        optionFirst: "View",
        firstUrl: "view",
        optionSecond: "Delete",
        secondUrl: "delete",
      },
      status: {
        text: "Completed",
        bgColor: "pasteGreen",
        columnPosition: "last",
      },
      isCheckbox: false,
    },
    {
      gridValue: [
        <Text children="14/01/2019" type="font12" color="primary" />,
        <Text children="12345678" type="font12" color="primary" />,
        <Icon icon="bitcoin" />,
        <Text children="Bitcoin" type="font12" color="primary" />,
        <Text children="$100" type="font12" color="primary" />,
        <Text children="#18000" type="font12" color="primary" />,
      ],
      dotOption: {
        optionFirst: "View",
        firstUrl: "view",
        optionSecond: "Delete",
        secondUrl: "delete",
      },
      status: {
        text: "Failed",
        bgColor: "red",
        columnPosition: "last",
      },
      isCheckbox: false,
    },
    {
      gridValue: [
        <Text children="14/01/2019" type="font12" color="primary" />,
        <Text children="12345678" type="font12" color="primary" />,
        <Icon icon="bitcoin" />,
        <Text children="Bitcoin" type="font12" color="primary" />,
        <Text children="$100" type="font12" color="primary" />,
        <Text children="#18000" type="font12" color="primary" />,
      ],
      dotOption: {
        optionFirst: "View",
        firstUrl: "view",
        optionSecond: "Delete",
        secondUrl: "delete",
      },
      status: {
        text: "In Progress",
        bgColor: "purpleGradient",
        columnPosition: "last",
      },
      isCheckbox: false,
    },
    {
      gridValue: [
        <Text children="14/01/2019" type="font12" color="primary" />,
        <Text children="12345678" type="font12" color="primary" />,
        <Icon icon="bitcoin" />,
        <Text children="Bitcoin" type="font12" color="primary" />,
        <Text children="$100" type="font12" color="primary" />,
        <Text children="#18000" type="font12" color="primary" />,
      ],
      dotOption: {
        optionFirst: "View",
        firstUrl: "view",
        optionSecond: "Delete",
        secondUrl: "delete",
      },
      status: {
        text: "Completed",
        bgColor: "pasteGreen",
        columnPosition: "last",
      },
      isCheckbox: false,
    },
    {
      gridValue: [
        <Text children="14/01/2019" type="font12" color="primary" />,
        <Text children="12345678" type="font12" color="primary" />,
        <Icon icon="bitcoin" />,
        <Text children="Bitcoin" type="font12" color="primary" />,
        <Text children="$100" type="font12" color="primary" />,
        <Text children="#18000" type="font12" color="primary" />,
      ],
      dotOption: {
        optionFirst: "View",
        firstUrl: "view",
        optionSecond: "Delete",
        secondUrl: "delete",
      },
      status: {
        text: "Completed",
        bgColor: "pasteGreen",
        columnPosition: "last",
      },
      isCheckbox: false,
    },
    {
      gridValue: [
        <Text children="14/01/2019" type="font12" color="primary" />,
        <Text children="12345678" type="font12" color="primary" />,
        <Icon icon="bitcoin" />,
        <Text children="Bitcoin" type="font12" color="primary" />,
        <Text children="$100" type="font12" color="primary" />,
        <Text children="#18000" type="font12" color="primary" />,
      ],
      dotOption: {
        optionFirst: "View",
        firstUrl: "view",
        optionSecond: "Delete",
        secondUrl: "delete",
      },
      status: {
        text: "Failed",
        bgColor: "red",

        columnPosition: "last",
      },
      isCheckbox: false,
    },
    {
      gridValue: [
        <Text children="14/01/2019" type="font12" color="primary" />,
        <Text children="12345678" type="font12" color="primary" />,
        <Icon icon="bitcoin" />,
        <Text children="Bitcoin" type="font12" color="primary" />,
        <Text children="$100" type="font12" color="primary" />,
        <Text children="#18000" type="font12" color="primary" />,
      ],
      dotOption: {
        optionFirst: "View",
        firstUrl: "view",
        optionSecond: "Delete",
        secondUrl: "delete",
      },
      status: {
        text: "In Progress",
        bgColor: "purpleGradient",

        columnPosition: "last",
      },
      isCheckbox: false,
    },
    {
      gridValue: [
        <Text children="14/01/2019" type="font12" color="primary" />,
        <Text children="12345678" type="font12" color="primary" />,
        <Icon icon="bitcoin" />,
        <Text children="Bitcoin" type="font12" color="primary" />,
        <Text children="$100" type="font12" color="primary" />,
        <Text children="#18000" type="font12" color="primary" />,
      ],
      dotOption: {
        optionFirst: "View",
        firstUrl: "view",
        optionSecond: "Delete",
        secondUrl: "delete",
      },
      status: {
        text: "Completed",
        bgColor: "pasteGreen",

        columnPosition: "last",
      },
      isCheckbox: false,
    },
  ];
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
      headingText="User Management Transactions"
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
      <div className="p-userTransactions">
        <Heading type="h2" color="primary">
          Transactions
        </Heading>
        <div className="p-userTransactions__list">
          <div className="p-userTransactions__content">
            <div className="p-userTransactions__heading">
              <GridRow
                gridValue={[
                  <Text
                    children="Date"
                    type="font12"
                    fontWeight="bold"
                    color="primary"
                  />,
                  <Text
                    children="Transaction ID"
                    type="font12"
                    fontWeight="bold"
                    color="primary"
                  />,
                  <Text
                    children="Type"
                    type="font12"
                    fontWeight="bold"
                    color="primary"
                  />,
                  <Text
                    children="Name"
                    type="font12"
                    fontWeight="bold"
                    color="primary"
                  />,
                  <Text
                    children="Value"
                    type="font12"
                    fontWeight="bold"
                    color="primary"
                  />,
                  <Text
                    children="Return"
                    type="font12"
                    fontWeight="bold"
                    color="primary"
                  />,
                  <Text
                    children="Status"
                    type="font12"
                    fontWeight="bold"
                    color="primary"
                  />,
                  <Text
                    children="Action"
                    type="font12"
                    fontWeight="bold"
                    color="primary"
                  />,
                ]}
                type="heading"
                isCheckbox={false}
                checked={false}
                gridId="1"
              />
            </div>
            <div className="p-userTransactions__transactions">
              {TransactionsList.map((SingleTransaction, index) => {
                return (
                  <div className="p-userTransactions__transaction">
                    <GridRow
                      gridValue={SingleTransaction.gridValue}
                      dotOption={SingleTransaction.dotOption}
                      status={SingleTransaction.status}
                      isCheckbox={SingleTransaction.isCheckbox}
                      gridId="1"
                      checked={false}
                    />
                  </div>
                );
              })}
            </div>
            <div className="p-userTransactions__button">
                <Button type="button" isPadding={false}>
                  View More
                </Button>
            </div>
          </div>
        </div>
      </div>
    </DefaultPage>
  );
};

export default UserTransactions;
