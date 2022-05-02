import React from "react";
import ErrorImage from "assets/images/error.png";
import Container from "components/common/Container";
import Button from "components/Button";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center">
        <img src={ErrorImage} width={400} height={400} alt="error" />
        <div className="text-4xl text-secondary-500 font-bold mb-4">SORRY!</div>
        <div className="mb-8 text-md">The page you're looking for could not be found</div>
        <Link to="/">
          <Button text="Go back home"></Button>
        </Link>
      </div>
    </Container>
  );
};

export default Error;
