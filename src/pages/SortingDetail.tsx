import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import SortingVisualizer from "components/SortingVisualizer";
import AlgorithmDetail, { TimeComplexity } from "components/AlgorithmDetail";
import { SortingAlgorithms } from "pages/Sorting";
import Container from "components/common/Container";

const sortingAlgorithmsMapped = {
  [SortingAlgorithms.BUBBLE_SORT]: {
    name: "Bubble Sort",
    worstCase: TimeComplexity.O_N2,
    averageCase: TimeComplexity.O_N2,
    bestCase: TimeComplexity.O_N,
    space: TimeComplexity.O_1,
    isStable: true,
    info: (
      <>
        <b>Bubble sort</b> is a simple sorting algorithm that repeatedly steps through the list,
        compares adjacent elements and swaps them if they are in the wrong order. The pass through
        the list is repeated until the list is sorted. The algorithm, which is a comparison sort, is
        named for the way smaller or larger elements "bubble" to the top of the list.
      </>
    ),
    link: "https://en.wikipedia.org/wiki/Bubble_sort",
  },
  [SortingAlgorithms.SELECTION_SORT]: {
    name: "Selection Sort",
    worstCase: TimeComplexity.O_N2,
    averageCase: TimeComplexity.O_N2,
    bestCase: TimeComplexity.O_N,
    space: TimeComplexity.O_1,
    isStable: true,
    info: (
      <>
        <b>Selection sort</b> is an in-place comparison sorting algorithm. It has an O(n<sup>2</sup>
        ) time complexity, which makes it inefficient on large lists, and generally performs worse
        than the similar insertion sort. Selection sort is noted for its simplicity and has
        performance advantages over more complicated algorithms in certain situations, particularly
        where auxiliary memory is limited.
      </>
    ),
    link: "https://en.wikipedia.org/wiki/Selection_sort",
  },
};

const SortingDetail = () => {
  const { type } = useParams<{ type: SortingAlgorithms }>();

  if (type == null || sortingAlgorithmsMapped[type] == null) {
    return <Navigate to="/sorting" />;
  }

  const { name, worstCase, averageCase, bestCase, space, info, link, isStable } =
    sortingAlgorithmsMapped[type];

  return (
    <Container>
      <div className="relative">
        <h1 className="text-4xl font-bold text-primary-600 text-center my-6">{name}</h1>
        <div className="absolute top-1 left-0 font-semibold cursor-pointer px-3 py-1 text-primary-500 hover:bg-gray-200 rounded-md">
          <Link to="/sorting">Back</Link>
        </div>
      </div>
      <SortingVisualizer type={type} />
      <AlgorithmDetail
        worstCase={worstCase}
        averageCase={averageCase}
        bestCase={bestCase}
        space={space}
        info={info}
        link={link}
        isStable={isStable}
      />
    </Container>
  );
};

export default SortingDetail;
