import styled from "styled-components";

export const MenuDropdownContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 64px;
  margin-right: -15px;
  padding: 15px 15px;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
  z-index: 7;

  @media screen and (min-width: 801px) {
    display: none;
  }
`;
