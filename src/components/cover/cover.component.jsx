import Button from "../button/button.component";

import {
  CoverContainer,
  DescriptionContainer,
  TitleText,
  CoverLink,
  TransparentBg,
} from "./cover.styles";

const Cover = () => {
  return (
    <CoverContainer>
      <DescriptionContainer>
        <TransparentBg />
        <TitleText>Spring Colletion 2022</TitleText>
        <CoverLink to="/shop">
          <Button buttonType="google-sign-in">Shop now</Button>
        </CoverLink>
      </DescriptionContainer>
    </CoverContainer>
  );
};

export default Cover;
