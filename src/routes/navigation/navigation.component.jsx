import { Fragment } from "react";
import { Outlet } from "react-router-dom";

import Header from "../../components/header/header.component";

import { NavigationContainer } from "./navigation.styles";

const Navigation = () => {
  return (
    <Fragment>
      <NavigationContainer>
        <Header />
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
