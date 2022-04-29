import styled from "styled-components";
import { motion } from "framer-motion/dist/framer-motion";
import { css } from "styled-components";

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 416px) {
      ${props}
    }
  `;
};

export const LandingMotion = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Jumbotron = styled.div`
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 4px;
  height: 50%;
  color: aliceblue;
  padding: 7rem 0.5rem 4rem 0;
  ${mobile({ padding: "6rem 0.5rem 0 0" })}/* margin: 6rem 0.5rem 4rem 0; */
  /* ${mobile({ margin: "4rem 0.5rem 0 0" })} */
`;

export const Title = styled.div`
  margin: 0 auto;
  width: 60%;
  background-color: blue;
  text-align: left;
  font-family: "Raleway", sans-serif;
  font-size: 8rem;
  font-weight: 600;
  letter-spacing: -0.2rem;
  line-height: 0.7em;
`;

export const SubTitle = styled.div`
  font-family: "Raleway", sans-serif;
  line-height: 2rem;
  font-size: 1rem;
  letter-spacing: 0.1em;
`;

export const Button = styled.div`
  font-weight: 600;
  color: black;
  font-family: "Raleway", sans-serif;
  line-height: 2rem;
  font-size: 1rem;
  letter-spacing: 0.1em;
  border-radius: 10px;
  background-color: darkgray;
  width: 120px;
  text-align: center;
  &:hover {
    transition: all 0.4s;
    color: aliceblue;
    background-color: darkgrey;
  }
  &:active {
    border: 1px black solid;
    background-color: black;
  }
`;
