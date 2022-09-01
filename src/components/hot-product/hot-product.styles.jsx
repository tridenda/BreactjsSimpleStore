import styled from "styled-components";

export const HotProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto;
  margin-bottom: 95px;

  @media screen and (max-width: 800px) {
    width: 500px;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
  }

  @media screen and (max-width: 580px) {
    margin: 20px auto;
    width: 100%;
  }
`;

export const BigImage = styled.div`
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-position: center;
  background-size: cover;
  width: 500px;
  height: 500px;

  @media screen and (max-width: 500px) {
    height: 450px;
  }
`;

export const RightImage = styled.div`
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-position: top;
  width: 200px;
  height: 200px;
  position: absolute;
  margin-top: 30px;
  margin-left: 550px;

  @media screen and (max-width: 1130px) {
    margin-left: 50%;
  }

  @media screen and (max-width: 800px) {
    width: 250px;
    height: 250px;
    position: unset;
    margin: unset;
  }

  @media screen and (max-width: 580px) {
    display: none;
  }
`;

export const LeftImage = styled.div`
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-position: top;
  background-color: red;
  width: 200px;
  height: 200px;
  position: absolute;
  margin-top: 350px;
  margin-right: 550px;

  @media screen and (max-width: 1130px) {
    margin-right: 50%;
  }

  @media screen and (max-width: 800px) {
    position: unset;
    margin: unset;
    width: 250px;
    height: 250px;
  }

  @media screen and (max-width: 580px) {
    display: none;
  }
`;

export const TopTextContainer = styled.div`
  width: 350px;
  height: 250px;
  z-index: 5 !important;
  position: absolute;
  margin-right: 400px;

  @media screen and (max-width: 1130px) {
    width: 330px;
    margin-right: 35%;
  }

  @media screen and (max-width: 800px) {
    margin: unset;
  }

  @media screen and (max-width: 500px) {
    width: 90vw;
    height: auto;
  }
`;

export const BottomTextContainer = styled.div`
  width: 350px;
  height: 250px;
  z-index: 5 !important;
  position: absolute;
  margin-top: 250px;
  margin-left: 550px;

  @media screen and (max-width: 1130px) {
    width: 330px;
    margin-left: 50%;
  }

  @media screen and (max-width: 800px) {
    margin-left: unset;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media screen and (max-width: 500px) {
    width: 80vw;
    height: auto;
    margin-top: 220px;
  }
`;

export const TitleText = styled.p`
  font-size: 32px;
  font-weight: bold;
  text-transform: uppercase;

  @media screen and (max-width: 800px) {
    text-align: center;
  }

  @media screen and (max-width: 500px) {
    margin: 20px 0;
    font-size: 26px;
  }
`;

export const DescriptionText = styled.p`
  font-size: 18px;
  text-align: left;

  @media screen and (max-width: 800px) {
    text-align: center;
  }

  @media screen and (max-width: 500px) {
    font-size: 16px;
  }
`;
