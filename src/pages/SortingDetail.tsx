import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import SortingVisualizer from "components/SortingVisualizer";
import { SortingAlgorithms, titleColorMapped } from "pages/Sorting";
import Container from "components/common/Container";
import GradientText from "components/common/GradientText";
import Box from "components/common/Box";
import AlgorithmComplexity, { TimeComplexity } from "components/algorithm/AlgorithmComplexity";

const sortingAlgorithmsMapped = {
  [SortingAlgorithms.BUBBLE_SORT]: {
    name: "Bubble Sort",
    worstCase: TimeComplexity.O_N2,
    averageCase: TimeComplexity.O_N2,
    bestCase: TimeComplexity.O_N,
    space: TimeComplexity.O_1,
    isStable: true,
    when: (
      <>
        <p>Complexity does not matter</p>
        <p>Short and simple code is preferred</p>
      </>
    ),
    info: (
      <>
        <p>
          <b>Bubble sort</b> is a simple sorting algorithm that repeatedly steps through the list,
          compares adjacent elements and swaps them if they are in the wrong order. The pass through
          the list is repeated until the list is sorted. The algorithm, which is a comparison sort,
          is named for the way smaller or larger elements "bubble" to the top of the list.
        </p>
        <p>
          This simple algorithm performs poorly in real world use and is
          <b> used primarily as an educational tool</b>. More efficient algorithms such as
          quicksort, timsort, or merge sort are used by the sorting libraries built into popular
          programming languages such as Python and Java.
        </p>
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
    isStable: false,
    when: (
      <>
        <p>A small list is to be sorted</p>
        <p>Cost of swapping does not matter</p>
        <p>Checking of all the elements is compulsory</p>
        <p>
          Cost of writing to a memory matters like in flash memory (number of writes/swaps is O(n)
          as compared to O(n<sup>2</sup>) of bubble sort)
        </p>
      </>
    ),
    info: (
      <>
        <p className="mb-2">
          <b>Selection sort</b> is an in-place comparison sorting algorithm. It has an O(n
          <sup>2</sup>) time complexity, which makes it inefficient on large lists, and generally
          performs worse than the similar insertion sort. Selection sort is noted for its simplicity
          and has performance advantages over more complicated algorithms in certain situations,
          particularly where auxiliary memory is limited.
        </p>
        <p>
          The algorithm divides the input list into two parts: a sorted sublist of items which is
          built up from left to right at the front (left) of the list and a sublist of the remaining
          unsorted items that occupy the rest of the list. Initially, the sorted sublist is empty
          and the unsorted sublist is the entire input list. The algorithm proceeds by finding the
          smallest (or largest, depending on sorting order) element in the unsorted sublist,
          exchanging (swapping) it with the leftmost unsorted element (putting it in sorted order),
          and moving the sublist boundaries one element to the right.
        </p>
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
    when: (
      <>
        <p>The array is has a small number of elements</p>
        <p>There are only a few elements left to be sorted</p>
      </>
    ),
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

  const { name, worstCase, averageCase, bestCase, space, info, isStable, when } =
    sortingAlgorithmsMapped[type];

  return (
    <Container>
      <div className="grid grid-cols-4">
        <div className="relative col-span-3">
          <h1 className="text-4xl font-bold text-primary-600 text-center my-7">
            <GradientText className={titleColorMapped[type]}>{name}</GradientText>
          </h1>
          <Link to="/sorting">
            <div className="absolute top-1/2 -translate-y-1/2 left-0 font-semibold cursor-pointer px-3 py-1 text-primary-500 bg-gray-100 hover:bg-gray-200 rounded-md">
              Back
            </div>
          </Link>
        </div>
      </div>

      <div className="desktop:grid desktop:grid-cols-4 gap-x-4 mb-4">
        <div className="col-span-3">
          <SortingVisualizer type={type} />
        </div>

        <div className="col-span-1">
          <AlgorithmComplexity
            worstCase={worstCase}
            averageCase={averageCase}
            bestCase={bestCase}
            space={space}
            isStable={isStable}
          />
        </div>

        <div className="col-span-3 mb-4 desktop:mb-0">
          <Box title="Description">{info}</Box>
        </div>

        <div className="col-span-1">
          <Box title="Used when">
            <div>{when}</div>
          </Box>
        </div>
      </div>
    </Container>
  );
};

export default SortingDetail;
