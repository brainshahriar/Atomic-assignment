import { useState } from "react";
import { DefaultPage } from "components/templates/defaultpage";
import { ICONS } from "settings/settings";
import CoinBaseImage from "../../../assets/images/icons/coinbase.svg";
import ProfileImage from "./../../../assets/images/profile.png";
import ModalImage from "./../../../assets/images/circle-right-pink.png";
import { Card } from "components/organisms/card/card";
import { Text } from "components/atoms/text";
import { Grid } from "components/organisms/gird/grid";
import { Heading } from "components/atoms/heading";
import { Container } from "components/atoms/container/container";
import { Column } from "components/organisms/column/column";
import { Button } from "components/atoms/button";
import { Modal } from "components/molecules/modal/modal";
import { Image } from "components/atoms/image";
import { CountCard } from "components/molecules/countCard";
import { BankCard } from "components/molecules/bankCard";
const AdminUsersView = () => {
  const [showModal, setshowModal] = useState(false);
  const [showPayment, setshowPayment] = useState(false);

  const blockAgent = () => {
    setshowModal(true);
  };

  const handlePayment = () => {
    setshowPayment(true);
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
      <div className="p-adminUsersView">
        <Heading color="primary" type="h2">
          Users
        </Heading>
        <Column
          content={[
            <>
              <Image imageSrc={ProfileImage} type="rounded" />
              <Container margin="44">
                <Heading color="primary" type="h1">
                  Ramon Ridwan
                </Heading>
              </Container>
              <Text type="font12" color="primary">
                Ramonridwan@protonmail.com
              </Text>

              <Column
                content={[
                  <Button bgColor="red">Down</Button>,
                  <Button bgColor="purpleGradient" onClick={blockAgent}>
                    Block User
                  </Button>,
                ]}
              />
            </>,
          ]}
        />
        <Container margin="44">
          <Column
            columnGap="20"
            justifyContent="center"
            content={[
              <CountCard
                countCardPercent="22.8"
                countCardTitle="Total Number Of Transaction"
                countNumber={3000}
                isGraph={false}
                isThreeDot={false}
                thredotFirstText="View"
                thredotSecondText="Delete"
              />,
              <CountCard
                countCardPercent="22.8"
                countCardTitle="Total Amount Earned"
                countNumber={9000}
                isGraph={false}
                isThreeDot={false}
                thredotFirstText="View"
                thredotSecondText="Delete"
              />,
              <CountCard
                countCardPercent="22.8"
                countCardTitle="Total Amount In Wallet"
                countNumber={9000}
                isGraph={false}
                isThreeDot={false}
                thredotFirstText="View"
                thredotSecondText="Delete"
              />,
            ]}
          />
        </Container>

        <Container margin="40">
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
                          Transaction ID
                        </Text>,
                        <Text color="primary" fontWeight="bold" type="font12">
                          Date
                        </Text>,
                        <Text color="primary" fontWeight="bold" type="font12">
                          Products
                        </Text>,
                        <Text color="primary" fontWeight="bold" type="font12">
                          Amounts
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
                      gridValue: [
                        <Text color="primary" type="font12">
                          289272304
                        </Text>,
                        <Text color="primary" type="font12">
                          22/12/2019
                        </Text>,
                        <Container>
                          <Text color="primary" type="font12" fontWeight="bold">
                            $50-
                          </Text>
                          <Text color="primary" type="font12">
                            Amazon Giftcard
                          </Text>
                        </Container>,
                        <Text color="primary" type="font12">
                          #39,000.00
                        </Text>,
                        <Button bgColor="pasteGreen" buttonType="primary">
                          Successful
                        </Button>,
                        <Text color="primary" type="font12">
                          22/12/2019
                        </Text>,
                      ],
                      isCheckbox: false,
                      gridId: "users",
                      dotOption: {
                        optionFirst: "Payment Details",
                        firstEvent: handlePayment,
                        optionSecond: "Block User",
                        secondEvent: blockAgent,
                      },
                      checked: false,
                    },
                    {
                      gridValue: [
                        <Text color="primary" type="font12">
                          289272304
                        </Text>,
                        <Text color="primary" type="font12">
                          22/12/2019
                        </Text>,
                        <Container>
                          <Text color="primary" type="font12" fontWeight="bold">
                            $130-
                          </Text>
                          <Text color="primary" type="font12">
                            Skrill Giftcard
                          </Text>
                        </Container>,
                        <Text color="primary" type="font12">
                          #39,000.00
                        </Text>,
                        <Button bgColor="pasteGreen" buttonType="primary">
                          Successful
                        </Button>,
                        <Text color="primary" type="font12">
                          22/12/2019
                        </Text>,
                      ],
                      isCheckbox: false,
                      gridId: "users",
                      dotOption: {
                        optionFirst: "Payment Details",
                        firstEvent: handlePayment,
                        optionSecond: "Block User",
                        secondEvent: blockAgent,
                      },
                      checked: false,
                    },
                    {
                      gridValue: [
                        <Text color="primary" type="font12">
                          289272304
                        </Text>,
                        <Text color="primary" type="font12">
                          22/12/2019
                        </Text>,
                        <Container>
                          <Text color="primary" type="font12" fontWeight="bold">
                            2Btc-
                          </Text>
                          <Text color="primary" type="font12">
                            Bitcoin
                          </Text>
                        </Container>,
                        <Text color="primary" type="font12">
                          #39,000.00
                        </Text>,
                        <Button bgColor="red" buttonType="primary">
                          Decline
                        </Button>,
                        <Text color="primary" type="font12">
                          22/12/2019
                        </Text>,
                      ],
                      isCheckbox: false,
                      gridId: "users",
                      dotOption: {
                        optionFirst: "Payment Details",
                        firstEvent: handlePayment,
                        optionSecond: "Block User",
                        secondEvent: blockAgent,
                      },
                      checked: false,
                    },
                    {
                      gridValue: [
                        <Text color="primary" type="font12">
                          289272304
                        </Text>,
                        <Text color="primary" type="font12">
                          22/12/2019
                        </Text>,
                        <Container>
                          <Text color="primary" type="font12" fontWeight="bold">
                            $250-
                          </Text>
                          <Text color="primary" type="font12">
                            Steam Giftcard
                          </Text>
                        </Container>,
                        <Text color="primary" type="font12">
                          #39,000.00
                        </Text>,
                        <Button bgColor="pasteGreen" buttonType="primary">
                          Successful
                        </Button>,
                        <Text color="primary" type="font12">
                          22/12/2019
                        </Text>,
                      ],
                      isCheckbox: false,
                      gridId: "users",
                      dotOption: {
                        optionFirst: "Payment Details",
                        firstEvent: handlePayment,
                        optionSecond: "Block User",
                        secondEvent: blockAgent,
                      },
                      checked: false,
                    },
                    {
                      gridValue: [
                        <Text color="primary" type="font12">
                          289272304
                        </Text>,
                        <Text color="primary" type="font12">
                          22/12/2019
                        </Text>,
                        <Container>
                          <Text color="primary" type="font12" fontWeight="bold">
                            $134-
                          </Text>
                          <Text color="primary" type="font12">
                            Google Play Giftcard
                          </Text>
                        </Container>,
                        <Text color="primary" type="font12">
                          #39,000.00
                        </Text>,
                        <Button bgColor="pasteGreen" buttonType="primary">
                          Successful
                        </Button>,
                        <Text color="primary" type="font12">
                          22/12/2019
                        </Text>,
                      ],
                      isCheckbox: false,
                      gridId: "users",
                      dotOption: {
                        optionFirst: "Payment Details",
                        firstEvent: handlePayment,
                        optionSecond: "Block User",
                        secondEvent: blockAgent,
                      },
                      checked: false,
                    },
                    {
                      gridValue: [
                        <Text color="primary" type="font12">
                          289272304
                        </Text>,
                        <Text color="primary" type="font12">
                          22/12/2019
                        </Text>,
                        <Container>
                          <Text color="primary" type="font12" fontWeight="bold">
                            $400-
                          </Text>
                          <Text color="primary" type="font12">
                            Other Giftcard
                          </Text>
                        </Container>,
                        <Text color="primary" type="font12">
                          #39,000.00
                        </Text>,
                        <Button bgColor="purpleGradient" buttonType="primary">
                          Pending
                        </Button>,
                        <Text color="primary" type="font12">
                          22/12/2019
                        </Text>,
                      ],
                      isCheckbox: false,
                      gridId: "users",
                      dotOption: {
                        optionFirst: "Payment Details",
                        firstEvent: handlePayment,
                        optionSecond: "Block User",
                        secondEvent: blockAgent,
                      },
                      checked: false,
                    },
                    {
                      gridValue: [
                        <Text color="primary" type="font12">
                          289272304
                        </Text>,
                        <Text color="primary" type="font12">
                          22/12/2019
                        </Text>,
                        <Container>
                          <Text color="primary" type="font12" fontWeight="bold">
                            19Eth-
                          </Text>
                          <Text color="primary" type="font12">
                            Ethereum
                          </Text>
                        </Container>,
                        <Text color="primary" type="font12">
                          #39,000.00
                        </Text>,
                        <Button bgColor="pasteGreen" buttonType="primary">
                          Successful
                        </Button>,
                        <Text color="primary" type="font12">
                          22/12/2019
                        </Text>,
                      ],
                      isCheckbox: false,
                      gridId: "users",
                      dotOption: {
                        optionFirst: "Payment Details",
                        firstEvent: handlePayment,
                        optionSecond: "Block User",
                        secondEvent: blockAgent,
                      },
                      checked: false,
                    },
                    {
                      gridValue: [
                        <Text color="primary" type="font12">
                          289272304
                        </Text>,
                        <Text color="primary" type="font12">
                          22/12/2019
                        </Text>,
                        <Container>
                          <Text color="primary" type="font12" fontWeight="bold">
                            26Btc-
                          </Text>
                          <Text color="primary" type="font12">
                            Bitcoin
                          </Text>
                        </Container>,
                        <Text color="primary" type="font12">
                          #39,000.00
                        </Text>,
                        <Button bgColor="red" buttonType="primary">
                          Decline
                        </Button>,
                        <Text color="primary" type="font12">
                          22/12/2019
                        </Text>,
                      ],
                      isCheckbox: false,
                      gridId: "users",
                      dotOption: {
                        optionFirst: "Payment Details",
                        firstEvent: handlePayment,
                        optionSecond: "Block User",
                        secondEvent: blockAgent,
                      },
                      checked: false,
                    },
                  ]}
                />
              </>
            }
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
                  Block User?
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
        <Modal
          content={
            <>
              <Container margin="45">
                <Heading color="secondary" type="h1">
                  Payment Details
                </Heading>
              </Container>
              <Container margin="67">
                <Column
                  columnGap="20"
                  content={[
                    <>
                      <Button buttonType="secondary" size="secondarySmall">
                        Product
                      </Button>
                      <Text color="primary" type="font12">
                        $50-Amazon Giftcard
                      </Text>
                    </>,
                    <>
                      <Button buttonType="secondary">Exchange Rate</Button>
                      <Text color="primary" type="font12">
                        #180-per dollar
                      </Text>
                    </>,
                    <>
                      <Button buttonType="secondary" size="secondarySmall">
                        Return
                      </Button>
                      <Text color="primary" type="font12">
                        #36,000.00
                      </Text>
                    </>,
                    <>
                      <Button buttonType="secondary" size="secondarySmall">
                        Date
                      </Button>
                      <Text color="primary" type="font12">
                        21/12/2019
                      </Text>
                    </>,
                  ]}
                />
              </Container>
              <Container margin="40">
                <Column
                  columnGap="20"
                  content={[
                    <BankCard
                      accountName="United Bank Africa"
                      accountNumber="4386 XXXX XXXX XXX"
                      bankName="Shedrack Rose Neima"
                      isEditOption={false}
                    />,
                  ]}
                />
              </Container>
            </>
          }
          opened={showPayment}
        />
      </div>
    </DefaultPage>
  );
};

export default AdminUsersView;
