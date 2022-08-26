import Button from "../button/button.component";

import {
  CoverContainer,
  DescriptionContainer,
  TitleText,
} from "./cover.styles";

const Cover = () => {
  return (
    <CoverContainer>
      <DescriptionContainer>
        <TitleText>Spring Colletion 2022</TitleText>
        <Button buttonType="google-sign-in">Shop now</Button>
      </DescriptionContainer>
    </CoverContainer>
  );
};

export default Cover;
