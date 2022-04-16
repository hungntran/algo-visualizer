import React from "react";
import { Link } from "react-router-dom";
import Container from "components/common/Container";
import GradientText from "components/common/GradientText";

export enum SortingAlgorithms {
  BUBBLE_SORT = "bubble-sort",
  SELECTION_SORT = "selection-sort",
  INSERTION_SORT = "insertion-sort",
}

const sortingDisplayTexts = {
  [SortingAlgorithms.BUBBLE_SORT]: "Bubble sort",
  [SortingAlgorithms.SELECTION_SORT]: "Selection sort",
  [SortingAlgorithms.INSERTION_SORT]: "Insertion sort",
};

export const titleColorMapped = {
  [SortingAlgorithms.BUBBLE_SORT]: "from-pink-500 to-violet-500",
  [SortingAlgorithms.SELECTION_SORT]: "from-green-500 to-violet-500",
  [SortingAlgorithms.INSERTION_SORT]: "from-red-500 to-blue-500",
};

const Sorting = () => {
  return (
    <Container>
      <h1 className="text-4xl font-bold text-primary-600 text-center my-8">Sorting</h1>
      <div className="grid grid-cols-3 gap-6">
        {Object.values(SortingAlgorithms).map((item) => (
          <Link to={`/sorting/${item}`} key={item}>
            <div className="p-4 border-2 hover:border-primary-500 transition-colors text-xl rounded-md font-bold flex justify-center items-center">
              <GradientText className={titleColorMapped[item]}>
                {sortingDisplayTexts[item]}
              </GradientText>
            </div>
          </Link>
        ))}
      </div>
    </Container>
  );
};

export default Sorting;
