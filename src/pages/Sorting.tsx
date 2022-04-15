import React from "react";
import { Link } from "react-router-dom";
import Container from "components/common/Container";

export enum SortingAlgorithms {
  BUBBLE_SORT = "bubble-sort",
  SELECTION_SORT = "selection-sort",
}

const sortingDisplayList = {
  [SortingAlgorithms.BUBBLE_SORT]: "Bubble sort",
  [SortingAlgorithms.SELECTION_SORT]: "Selection sort",
};

const Sorting = () => {
  return (
    <Container>
      <h1 className="text-4xl font-bold text-primary-600 text-center my-6">Sorting</h1>
      {Object.values(SortingAlgorithms).map((item) => (
        <Link to={`/sorting/${item}`} key={item}>
          <div>{sortingDisplayList[item]}</div>
        </Link>
      ))}
    </Container>
  );
};

export default Sorting;
