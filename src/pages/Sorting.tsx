import React from "react";
import { Link } from "react-router-dom";
import Container from "components/common/Container";
import GradientText from "components/common/GradientText";
import { TimeComplexity } from "components/algorithm/AlgorithmComplexity";
import BaseLink from "components/common/BaseLink";

export enum SortingAlgorithms {
  BUBBLE_SORT = "bubble-sort",
  SELECTION_SORT = "selection-sort",
  INSERTION_SORT = "insertion-sort",
  MERGE_SORT = "merge-sort",
}

const sortingDisplayTexts = {
  [SortingAlgorithms.BUBBLE_SORT]: "Bubble sort",
  [SortingAlgorithms.SELECTION_SORT]: "Selection sort",
  [SortingAlgorithms.INSERTION_SORT]: "Insertion sort",
  [SortingAlgorithms.MERGE_SORT]: "Merge sort",
};

export const titleColorMapped = {
  [SortingAlgorithms.BUBBLE_SORT]: "from-pink-500 to-violet-500",
  [SortingAlgorithms.SELECTION_SORT]: "from-green-500 to-violet-500",
  [SortingAlgorithms.INSERTION_SORT]: "from-red-500 to-blue-500",
  [SortingAlgorithms.MERGE_SORT]: "from-violet-500 to-cyan-500",
};

export const sortingAlgorithmsMapped = {
  [SortingAlgorithms.BUBBLE_SORT]: {
    name: "Bubble Sort",
    worstCase: TimeComplexity.O_N2,
    averageCase: TimeComplexity.O_N2,
    bestCase: TimeComplexity.O_N,
    space: TimeComplexity.O_1,
    isStable: true,
    applications: (
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
    wiki: "https://en.wikipedia.org/wiki/Bubble_sort",
  },
  [SortingAlgorithms.SELECTION_SORT]: {
    name: "Selection Sort",
    worstCase: TimeComplexity.O_N2,
    averageCase: TimeComplexity.O_N2,
    bestCase: TimeComplexity.O_N2,
    space: TimeComplexity.O_1,
    isStable: false,
    applications: (
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
    wiki: "https://en.wikipedia.org/wiki/Selection_sort",
  },
  [SortingAlgorithms.INSERTION_SORT]: {
    name: "Insertion Sort",
    worstCase: TimeComplexity.O_N2,
    averageCase: TimeComplexity.O_N2,
    bestCase: TimeComplexity.O_N,
    space: TimeComplexity.O_1,
    isStable: true,
    applications: (
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
        <ul>
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
    wiki: "https://en.wikipedia.org/wiki/Insertion_sort",
  },
  [SortingAlgorithms.MERGE_SORT]: {
    name: "Merge Sort",
    worstCase: TimeComplexity.O_N_LOGN,
    averageCase: TimeComplexity.O_N_LOGN,
    bestCase: TimeComplexity.O_N_LOGN,
    space: TimeComplexity.O_N,
    isStable: true,
    applications: (
      <>
        <p>To sort linked lists in O(n logn) time</p>
        <p>Inversion count problem</p>
        <p>
          Used in{" "}
          <BaseLink href="https://en.wikipedia.org/wiki/External_sorting">
            External Sorting
          </BaseLink>
        </p>
      </>
    ),
    info: (
      <div>
        <p>
          In computer science, <b>merge sort</b> (also commonly spelled as mergesort) is an
          efficient, general-purpose, and comparison-based sorting algorithm. Most implementations
          produce a stable sort, which means that the order of equal elements is the same in the
          input and output. Merge sort is a divide-and-conquer algorithm that was invented by John
          von Neumann in 1945. A detailed description and analysis of bottom-up merge sort appeared
          in a report by Goldstine and von Neumann as early as 1948.
        </p>
        <div>Conceptually, a merge sort works as follows:</div>
        <ul>
          <li>
            Divide the unsorted list into n sublists, each containing one element (a list of one
            element is considered sorted).
          </li>
          <li>
            Repeatedly merge sublists to produce new sorted sublists until there is only one sublist
            remaining. This will be the sorted list.
          </li>
        </ul>
      </div>
    ),
    wiki: "https://en.wikipedia.org/wiki/Merge_sort",
  },
};

const Sorting = () => {
  return (
    <Container>
      <h1 className="text-4xl font-bold text-primary-500 text-center my-8">Sorting</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
