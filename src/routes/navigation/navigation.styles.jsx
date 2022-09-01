import styled from "styled-components";

export const HeaderWrapper = styled.div`
  width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1130px) {
    width: calc(100% - 30px);
    margin: 0 15px;
  }
`;

export const MainWrapper = styled.div`
  min-height: 100%;
`;

export const Main = styled.div`
  width: 1100px;
  margin: 0 auto;
  overflow: auto;
  padding-bottom: 360px;

  @media screen and (max-width: 1130px) {
    width: calc(100% - 30px);
    margin: 0 15px;
  }
`;

export const FooterWrapper = styled.div`
  width: 1100px;
  margin: 0 auto;
`;
