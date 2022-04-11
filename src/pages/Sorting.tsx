import React from "react";
import SortingVisualizer from "components/SortingVisualizer";

const Sorting = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-primary-600 text-center my-6">
        Bubble Sort
      </h1>
      <SortingVisualizer />
    </div>
  );
};

export default Sorting;
