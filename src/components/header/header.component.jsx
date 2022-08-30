import { useSelector, useDispatch } from "react-redux";

import { selectCurrentUser } from "../../store/user/user.selector";
import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { signOutStart } from "../../store/user/user.action";

import CartIcon from "../cart-icon/cart-icon.component";
import {
  AccountButtom,
  AccountContainer,
  HeaderContainer,
  LinksContainer,
  NavLink,
  TitleContainer,
  TitleLink,
} from "./header.styles";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

const Header = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  const signOutUser = () => dispatch(signOutStart());

  return (
    <HeaderContainer>
      <TitleContainer>
        <TitleLink to="/">Breactjs SimpleStore</TitleLink>
      </TitleContainer>
      <LinksContainer>
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="#">About</NavLink>
        <NavLink to="#">Blog</NavLink>
        <NavLink to="#">Pages</NavLink>
      </LinksContainer>
      <AccountContainer>
        <CartIcon />
        {currentUser ? (
          <AccountButtom to="#" onClick={signOutUser}>
            Logout
          </AccountButtom>
        ) : (
          <AccountButtom to="/auth">Login</AccountButtom>
        )}

        {isCartOpen && <CartDropdown />}
      </AccountContainer>
    </HeaderContainer>
  );
};

export default Header;
