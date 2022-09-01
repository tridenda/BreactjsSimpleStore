import { Link } from "react-router-dom";
import Button from "../button/button.component";
import {
  BigImage,
  BottomTextContainer,
  DescriptionText,
  HotProductContainer,
  LeftImage,
  RightImage,
  TitleText,
  TopTextContainer,
} from "./hot-product.styles";

const HotProduct = () => {
  return (
    <HotProductContainer>
      <BigImage imageUrl="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1072&q=80" />
      <LeftImage imageUrl="https://i.ibb.co/mh3VM1f/polka-dot-shirt.png" />
      <RightImage imageUrl="https://i.ibb.co/RvwnBL8/pink-shirt.png" />

      <TopTextContainer>
        <TitleText>Clothes For Modern Cool Mens</TitleText>
        <DescriptionText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        </DescriptionText>
      </TopTextContainer>
      <BottomTextContainer>
        <DescriptionText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        </DescriptionText>
        <Link to="/shop/mens">
          <Button>Shop Now</Button>
        </Link>
      </BottomTextContainer>
    </HotProductContainer>
  );
};

export default HotProduct;
