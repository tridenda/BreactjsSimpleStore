import styled from "styled-components";
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
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 5px;
  padding: 30px;
`;

export const TitleText = styled.p`
  color: white;
  font-size: 32px;
  font-family: Monserrat;
  font-weight: bold;
`;
