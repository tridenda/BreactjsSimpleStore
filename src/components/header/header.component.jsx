import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectCurrentUser } from "../../store/user/user.selector";
import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { signOutStart } from "../../store/user/user.action";

import CartIcon from "../cart-icon/cart-icon.component";
import {
  AccountButtom,
  HeaderContainer,
  LeftNavContainer,
  MiddleNavContainer,
  RightNavContainer,
  NavLink,
  TitleLink,
  HamburgerButton,
  CloseButton,
} from "./header.styles";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import MenuDropdown from "../menu-dropdown/menu-dropdown.component";

const Header = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  const signOutUser = () => dispatch(signOutStart());

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuOpenHandler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HeaderContainer>
      <LeftNavContainer>
        <TitleLink to="/">Breactjs Store</TitleLink>
      </LeftNavContainer>
      <MiddleNavContainer>
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="#">About</NavLink>
        <NavLink to="#">Blog</NavLink>
        <NavLink to="#">Pages</NavLink>
      </MiddleNavContainer>
      <RightNavContainer>
        <CartIcon />
        {currentUser ? (
          <AccountButtom to="#" onClick={signOutUser}>
            Logout
          </AccountButtom>
        ) : (
          <AccountButtom to="/auth">Login</AccountButtom>
        )}

        {isCartOpen && <CartDropdown />}
        {isMenuOpen ? (
          <CloseButton onClick={menuOpenHandler} />
        ) : (
          <HamburgerButton onClick={menuOpenHandler} />
        )}

        {isMenuOpen && <MenuDropdown menuOpenHandler={menuOpenHandler} />}
      </RightNavContainer>
    </HeaderContainer>
  );
};

export default Header;
