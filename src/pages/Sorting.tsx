import React from "react";
import SortingVisualizer from "components/SortingVisualizer";

const arr = [3, 14, 8, 23, 4, 6, 9];

const Sorting = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-primary-600 text-center">
        Bubble Sort
      </h1>
      <SortingVisualizer sourceNumbers={arr} />
    </div>
  );
};

export default Sorting;
