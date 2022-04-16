import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import SortingVisualizer from "components/SortingVisualizer";
import AlgorithmDetail, { TimeComplexity } from "components/AlgorithmDetail";
import { SortingAlgorithms, titleColorMapped } from "pages/Sorting";
import Container from "components/common/Container";
import GradientText from "components/common/GradientText";

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
    bestCase: TimeComplexity.O_N2,
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
  [SortingAlgorithms.INSERTION_SORT]: {
    name: "Insertion Sort",
    worstCase: TimeComplexity.O_N2,
    averageCase: TimeComplexity.O_N2,
    bestCase: TimeComplexity.O_N,
    space: TimeComplexity.O_1,
    isStable: true,
    info: (
      <div>
        <b>Insertion sort</b> is a simple sorting algorithm that builds the final sorted array (or
        list) one item at a time. It is much less efficient on large lists than more advanced
        algorithms such as <b>quicksort</b>, <b>heapsort</b>, or <b>merge sort</b>. However,
        insertion sort provides several advantages:
        <ul className="list-disc ml-8 pt-2">
          <li>
            Simple implementation: Jon Bentley shows a three-line C++ version, and a five-line
            optimized version
          </li>
          <li>
            Efficient for (quite) small data sets, much like other quadratic sorting algorithms
          </li>
          <li>
            More efficient in practice than most other simple quadratic (i.e., O(n<sup>2</sup>))
            algorithms such as selection sort or bubble sort
          </li>
          <li>
            <b>Adaptive</b>: i.e., efficient for data sets that are already substantially sorted:
            the time complexity is O(kn) when each element in the input is no more than k places
            away from its sorted position
          </li>
          <li>
            <b>Stable</b>: i.e., does not change the relative order of elements with equal keys
            In-place; i.e., only requires a constant amount O(1) of additional memory space
          </li>
          <li>
            <b>Online</b>: i.e., can sort a list as it receives it
          </li>
        </ul>
      </div>
    ),
    link: "https://en.wikipedia.org/wiki/Insertion_sort",
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
        <h1 className="text-4xl font-bold text-primary-600 text-center my-8">
          <GradientText className={titleColorMapped[type]}>{name}</GradientText>
        </h1>
        <Link to="/sorting">
          <div className="absolute top-1 left-0 font-semibold cursor-pointer px-3 py-1 text-primary-500 hover:bg-gray-200 rounded-md">
            Back
          </div>
        </Link>
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
