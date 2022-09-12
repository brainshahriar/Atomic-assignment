import { DefaultPage } from "components/templates/defaultpage";
import { ICONS } from "settings/settings";
import CoinBaseImage from "../../../assets/images/icons/coinbase.svg";
import { Card } from "components/organisms/card/card";
import { Button } from "components/atoms/button";
import { ServiceCard } from "components/molecules/service-card";
import { IMAGES } from "settings/settings";
import { Heading } from "components/atoms/heading";
import { Container } from "components/atoms/container/container";
import { Column } from "components/organisms/column/column";
import { Input } from "components/atoms/input";

const AdminCards = () => {
  const addCard = () => {
    window.location.href = "addcard";
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
      headingText="Admin Management   Cards"
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
      <div className="p-adminCards">
        <Column
          content={[
            <Heading color="primary" type="h2">
              Cards
            </Heading>,
            <>
              <Column
                columnGap="20"
                content={[
                  <Input
                    type="search"
                    placeholder="Search Cards"
                    fieldType="text"
                    isMargin={false}
                    size="searchExtraSmall"
                  />,
                  <Button
                    iconWithText={true}
                    imgsrc={ICONS.addcard}
                    onClick={addCard}
                  >
                    Add Card
                  </Button>,
                ]}
              />
            </>,
          ]}
        />
        <Container margin="28">
          <Card
            content={
              <div className="p-adminCards__content">
                <div className="p-adminCards__content__item">
                  <ServiceCard
                    color="white"
                    bgColor="gradientBlue"
                    flagImgSrc={IMAGES.usaFlag}
                    imgSrc={IMAGES.amazon}
                    imgType="large"
                    text="Amazon Card"
                    textType="font8"
                  />
                </div>
                <div className="p-adminCards__content__item">
                  <ServiceCard
                    color="white"
                    bgColor="mixedGradient"
                    flagImgSrc={IMAGES.canadaFlag}
                    imgSrc={IMAGES.music}
                    imgType="mediumSmall"
                    text="iTunes Card"
                    textType="font8"
                  />
                </div>
                <div className="p-adminCards__content__item">
                  <ServiceCard
                    color="primary"
                    flagImgSrc={IMAGES.england}
                    imgSrc={IMAGES.googlePlayStore}
                    imgType="smallMedium"
                    text="Google Play Card"
                    textType="font8"
                  />
                </div>
                <div className="p-adminCards__content__item">
                  <ServiceCard
                    color="white"
                    bgColor="pinkGradient"
                    flagImgSrc={IMAGES.usaFlag}
                    imgSrc={IMAGES.streamCard}
                    imgType="smallLarge"
                    text="Steam Card"
                    textType="font8"
                  />
                </div>
                <div className="p-adminCards__content__item">
                  <ServiceCard
                    color="primary"
                    flagImgSrc={IMAGES.england}
                    imgSrc={IMAGES.otherCard}
                    imgType="mediumLarge"
                    text="Other Cards"
                    textType="font8"
                  />
                </div>
                <div className="p-adminCards__content__item">
                  <ServiceCard
                    color="white"
                    bgColor="pinkGradient"
                    flagImgSrc={IMAGES.england}
                    imgSrc={IMAGES.streamCard}
                    imgType="smallLarge"
                    text="Steam Card"
                    textType="font8"
                  />
                </div>
                <div className="p-adminCards__content__item">
                  <ServiceCard
                    color="primary"
                    flagImgSrc={IMAGES.usaFlag}
                    imgSrc={IMAGES.otherCard}
                    imgType="mediumLarge"
                    text="Other Cards"
                    textType="font8"
                  />
                </div>
                <div className="p-adminCards__content__item">
                  <ServiceCard
                    color="white"
                    bgColor="mixedGradient"
                    flagImgSrc={IMAGES.usaFlag}
                    imgSrc={IMAGES.music}
                    imgType="mediumSmall"
                    text="iTunes Card"
                    textType="font8"
                  />
                </div>
                <div className="p-adminCards__content__item">
                  <ServiceCard
                    color="primary"
                    flagImgSrc={IMAGES.canadaFlag}
                    imgSrc={IMAGES.googlePlayStore}
                    imgType="smallMedium"
                    text="Google Play Card"
                    textType="font8"
                  />
                </div>
                <div className="p-adminCards__content__item">
                  <ServiceCard
                    color="white"
                    bgColor="gradientBlue"
                    flagImgSrc={IMAGES.canadaFlag}
                    imgSrc={IMAGES.amazon}
                    imgType="large"
                    text="Amazon Card"
                    textType="font8"
                  />
                </div>
                <div className="p-adminCards__content__item">
                  <ServiceCard
                    color="white"
                    bgColor="mixedGradient"
                    flagImgSrc={IMAGES.canadaFlag}
                    imgSrc={IMAGES.music}
                    imgType="mediumSmall"
                    text="iTunes Card"
                    textType="font8"
                  />
                </div>
                <div className="p-adminCards__content__item">
                  <Button
                    children=""
                    withIcon
                    size="rounded"
                    onClick={addCard}
                    imgsrc={ICONS.plus}
                  ></Button>
                </div>
              </div>
            }
          />
        </Container>
      </div>
    </DefaultPage>
  );
};

export default AdminCards;
