import styled from "styled-components";

export const HotProductContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 1fr 1fr;
  margin: 50px auto;
  margin-bottom: 100px;
`;

export const BigImage = styled.div`
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-position: center;
  background-size: cover;
  grid-row: 1 / span 2;
  grid-column: 2 / span 1;
  width: 500px;
  height: 500px;
  margin: 0 auto;
`;

export const RightImage = styled.div`
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-position: top;
  width: 200px;
  height: 200px;
  position: absolute;
  margin-top: 20px;
  margin-left: 750px;
`;

export const LeftImage = styled.div`
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-position: top;
  background-color: red;
  width: 200px;
  height: 200px;
  position: absolute;
  margin-top: 350px;
  margin-left: 150px;
`;

export const TopTextContainer = styled.div`
  width: 350px;
  height: 250px;
  position: absolute;
  margin-left: 100px;
  z-index: 5 !important;
`;

export const BottomTextContainer = styled.div`
  width: 350px;
  height: 250px;
  position: absolute;
  margin-left: 700px;
  margin-top: 280px;
  z-index: 5 !important;
`;

export const TitleText = styled.p`
  font-size: 32px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const DescriptionText = styled.p`
  font-size: 18px;
  text-align: left;
  background-color: transparent;
`;
