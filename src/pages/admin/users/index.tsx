import { Input } from "components/atoms/input";
import { DefaultPage } from "components/templates/defaultpage";
import { ICONS } from "settings/settings";
import CoinBaseImage from "../../../assets/images/icons/coinbase.svg";
import { Card } from "components/organisms/card/card";
import { Text } from "components/atoms/text";
import { Grid } from "components/organisms/gird/grid";
import { User } from "components/molecules/user";
import ProfileImage from "./../../../assets/images/profile.png";
import { Heading } from "components/atoms/heading";
import { Container } from "components/atoms/container/container";
import { Column } from "components/organisms/column/column";
const AdminUsers = () => {
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
      headingText="Admin Management Users"
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
              Users
            </Heading>,
            <Input
              type="search"
              placeholder="Search e.g card"
              fieldType="text"
              isMargin={false}
              size="searchSmall"
            />,
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
                        firstUrl: "user/id",
                        optionFirst: "View",
                        optionSecond: "Block User",
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
                        firstUrl: "user/id",
                        optionFirst: "View",
                        optionSecond: "Block User",
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
                        firstUrl: "user/id",
                        optionFirst: "View",
                        optionSecond: "Block User",
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
                        firstUrl: "user/id",
                        optionFirst: "View",
                        optionSecond: "Block User",
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
                        firstUrl: "user/id",
                        optionFirst: "View",
                        optionSecond: "Block User",
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
                        firstUrl: "user/id",
                        optionFirst: "View",
                        optionSecond: "Block User",
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
                        firstUrl: "user/id",
                        optionFirst: "View",
                        optionSecond: "Block User",
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
                      isCheckbox: true,
                      status: {
                        bgColor: "red",
                        columnPosition: "first",
                        text: "Down",
                      },
                    },
                  ]}
                />
                <Container margin="28">
                  <Text type="font12" color="primary">
                    5000 Users
                  </Text>
                </Container>
              </>
            }
            buttonLink="viewmore"
          />
        </Container>
      </div>
    </DefaultPage>
  );
};

export default AdminUsers;
