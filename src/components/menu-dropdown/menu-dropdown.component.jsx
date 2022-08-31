import { useDispatch, useSelector } from "react-redux";

import { selectCurrentUser } from "../../store/user/user.selector";
import { signOutStart } from "../../store/user/user.action";

import Button from "../button/button.component";
import { MenuDropdownContainer } from "./menu-dropdown.styles";
import { Link } from "react-router-dom";

const MenuDropdown = ({ menuOpenHandler }) => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);

  const signOutUser = () => dispatch(signOutStart());

  return (
    <MenuDropdownContainer>
      <Link to="shop">
        <p>Shop</p>
      </Link>
      <p>About</p>
      <p>Blog</p>
      <p>Pages</p>

      {currentUser ? (
        <Button to="#" onClick={signOutUser}>
          Logout
        </Button>
      ) : (
        <Link to="/auth">
          <Button onClick={menuOpenHandler}>Login</Button>
        </Link>
      )}
    </MenuDropdownContainer>
  );
};

export default MenuDropdown;
