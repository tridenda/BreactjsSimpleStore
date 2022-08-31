import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/footer/footer.component";

import Header from "../../components/header/header.component";

import {
  MainWrapper,
  Main,
  HeaderWrapper,
  FooterWrapper,
} from "./navigation.styles";

const Navigation = () => {
  return (
    <Fragment>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <MainWrapper>
        <Main>
          <Outlet />
        </Main>
      </MainWrapper>
      {/*
      <FooterWrapper>
      <Footer />
      </FooterWrapper>
    */}
    </Fragment>
  );
};

export default Navigation;
