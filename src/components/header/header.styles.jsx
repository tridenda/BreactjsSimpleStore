import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 64px;
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

export const TitleContainer = styled.div`
  width: 33%;
`;

export const TitleLink = styled(Link)`
  font-family: Monserrat;
  font-size: 25px;
  font-weight: bold;
  margin: unset;
`;

export const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 33%;
  display: flex;
  gap: 15px;
`;

export const NavLink = styled(Link)`
  font-size: 20px;
  font-family: Monserrat;
`;

export const AccountContainer = styled.div`
  width: 33%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 5px;
`;

export const AccountButtom = styled(Link)`
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: black;
  color: white;
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Monserrat;
  font-size: 20px;
  min-width: 140px;
  width: auto;
  height: 40px;
  text-transform: capitalize;
  border-radius: 10px;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;
