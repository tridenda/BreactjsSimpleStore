import styled from "styled-components";
import { Link } from "react-router-dom";

import coverUrl from "../../assets/cover.jpg";

export const CoverContainer = styled.div`
  background: url(${coverUrl}) center no-repeat;
  background-size: cover;
  height: 500px;
  margin-bottom: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 350px;
  height: 200px;

  @media screen and (max-width: 420px) {
    width: calc(100% - 65px);
  }
`;

export const TransparentBg = styled.div`
  background-color: black;
  opacity: 0.5;
  width: 350px;
  height: 200px;
  border-radius: 15px;
  position: absolute;

  @media screen and (max-width: 420px) {
    width: calc(100% - 65px);
  }
`;

export const TitleText = styled.p`
  color: white;
  font-size: 32px;
  font-family: Monserrat;
  font-weight: bold;
  z-index: 1;
  text-align: center;

  @media screen and (max-width: 420px) {
    font-size: 26px;
  }
`;

export const CoverLink = styled(Link)`
  z-index: 1;
`;
