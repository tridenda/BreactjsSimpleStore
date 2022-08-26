import { Fragment } from "react";
import { Outlet } from "react-router-dom";

import Header from "../../components/header/header.component";

import { MainContainer, NavigationContainer } from "./navigation.styles";

const Navigation = () => {
  return (
    <Fragment>
      <NavigationContainer>
        <Header />
      </NavigationContainer>
      <MainContainer>
        <Outlet />
      </MainContainer>
    </Fragment>
  );
};

export default Navigation;
