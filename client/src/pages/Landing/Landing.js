import React from "react";
import { Link } from "react-router-dom";
import {
  LandingMotion,
  Jumbotron,
  Title,
  SubTitle,
  Button,
} from "./Landing.style";

const Landing = () => {
  const container = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
    },
  };

  return (
    <LandingMotion
      variants={container}
      initial="hidden"
      animate="show"
      transition={{ delay: 0.5 }}
    >
      <Jumbotron>
        <Title>
          Welcome <br />
          to my <br />
          blog <br />
          <SubTitle>
            Coding, Graphics, and Audio stuff by Matthew Elliott
          </SubTitle>
        </Title>
      </Jumbotron>
      <Link className="link" to="/Explore">
        <Button buttonLabel="Enter">Check it out</Button>
      </Link>
    </LandingMotion>
  );
};

export default Landing;
