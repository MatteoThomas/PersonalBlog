import styled from "styled-components";

export const NavbarContainer = styled.nav`
  background-color: #1e1e1e;
  position: fixed;
  top: 0;
  gap: 1rem;
  font-weight: 500;
  display: flex;
  color: aliceblue;
  width: 100%;
  margin: 1rem auto;
  display: flex;
  &:active {
    color: #272727;
  }
  &:focus {
    color: #c0b2b2;
  }
  &:hover {
    color: #c0b2b2;
  }
`;
