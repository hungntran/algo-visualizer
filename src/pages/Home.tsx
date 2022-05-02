import React from "react";
import Container from "components/common/Container";
import { Link } from "react-router-dom";
import SortingImage from "assets/images/sorting.png";

const Home = () => {
  return (
    <Container>
      <div className="text-center mb-8">
        <h1 className="text-3xl mt-8 mb-4 font-semibold">
          <span className="text-secondary-500">Simple</span> and&nbsp;
          <span className="text-primary-500">modern</span>
        </h1>
        <p>Visualizing data structures and algorithms through animation</p>
        <input
          type="text"
          placeholder="Search"
          className="px-4 py-2 my-2 border outline-primary-400 max-w-xs w-full rounded-md"
        />
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <Link to="/sorting">
          <div className="p-4 border shadow-sm hover:border-secondary-400 transition-colors text-lg rounded-md flex flex-col items-center justify-center">
            <p>Sorting</p>
            <img src={SortingImage} alt="sorting" />
          </div>
        </Link>
      </div>
    </Container>
  );
};

export default Home;
