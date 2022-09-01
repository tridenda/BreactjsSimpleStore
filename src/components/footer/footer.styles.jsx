import styled from "styled-components";

export const FooterContainer = styled.div`
  background-color: #000;
  height: 360px;
  margin-top: -360px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr auto;
  grid-template-rows: 1fr 40px;
  column-gap: 5px;
  row-gap: 5px;

  @media screen and (max-width: 800px) {
    height: auto;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(3, auto);
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5, auto);
  }
`;

export const Box = styled.div`
  padding: 50px 30px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media screen and (max-width: 500px) {
    padding: 15px;
  }
`;

export const SosmedBox = styled.div`
  padding: 50px 30px;
  display: flex;
  justify-content: flex-end;
  gap: 10px;

  @media screen and (max-width: 800px) {
    justify-content: flex-start;
  }

  @media screen and (max-width: 500px) {
    justify-content: center;
  }
`;

export const CopyrightBox = styled.div`
  padding: 0 30px;
  grid-column-start: 1;
  grid-column-end: 5;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 800px) {
    grid-column-start: 1;
    grid-column-end: 3;
  }

  @media screen and (max-width: 500px) {
    grid-column-start: 1;
    grid-column-end: 2;
  }
`;

export const UppercaseLink = styled.a`
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
  color: white;

  @media screen and (max-width: 500px) {
    text-align: center;
  }
`;

export const CapitalizeLink = styled.a`
  text-transform: capitalize;
  font-size: 12px;
  color: #ccc;

  @media screen and (max-width: 500px) {
    text-align: center;
  }
`;
