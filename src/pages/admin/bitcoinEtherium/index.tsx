import { Input } from "components/atoms/input";
import { DefaultPage } from "components/templates/defaultpage";
import { ICONS, IMAGES } from "settings/settings";
import CoinBaseImage from "../../../assets/images/icons/coinbase.svg";
import bitcoin from "./../../../assets/images/icons/addcoin.svg";
import { Heading } from "components/atoms/heading";
import { Container } from "components/atoms/container/container";
import { Column } from "components/organisms/column/column";
import { Button } from "components/atoms/button";
import { ServiceCard } from "components/molecules/service-card";
import { Card } from "components/organisms/card/card";

const AdminBitcoinEtherium = () => {
  const addCard = () => {
    window.location.href = "/admin/addbitcoin";
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
      headingText="Admin Management Bitcoin & Ethereum"
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
      <div className="p-adminBitcoinEtherium">
        <Column
          content={[
            <Heading color="primary" type="h2">
              Bitcoin & Ethereum
            </Heading>,
            <>
              <Column
                columnGap="20"
                content={[
                  <Input
                    type="search"
                    placeholder="Search Coins"
                    fieldType="text"
                    isMargin={false}
                    size="searchExtraSmall"
                  />,
                  <Button
                    iconWithText={true}
                    imgsrc={bitcoin}
                    onClick={addCard}
                  >
                    Add Coin
                  </Button>,
                ]}
              />
            </>,
          ]}
        />

        <Container margin="28">
          <Card
            content={
              <Container>
                <Column
                  alignItems="center"
                  columnGap="91"
                  justifyContent="left"
                  content={[
                    <Column
                      columnGap="45"
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
                    <></>,
                    <Column
                      content={[
                        <Button
                          children=""
                          imgsrc={ICONS.plus}
                          size="rounded"
                          type="button"
                          withIcon={true}
                          onClick={addCard}
                        />,
                      ]}
                    />,
                  ]}
                />
              </Container>
            }
          />
        </Container>
      </div>
    </DefaultPage>
  );
};

export default AdminBitcoinEtherium;
