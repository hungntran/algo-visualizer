import React from "react";
import { Link } from "react-router-dom";
import Container from "components/common/Container";
import { TimeComplexity } from "components/algorithm/AlgorithmComplexity";
import BaseLink from "components/common/BaseLink";
import WaterIcon from "components/icons/WaterIcon";
import CrossIcon from "components/icons/CrossIcon";
import ArrowToLeftIcon from "components/icons/ArrowToLeftIcon";
import MergeIcon from "components/icons/MergeIcon";
import Badge from "components/common/Badge";
import TrendingUpIcon from "components/icons/TrendingUpIcon";

export enum SortingAlgorithms {
  BUBBLE_SORT = "bubble-sort",
  SELECTION_SORT = "selection-sort",
  INSERTION_SORT = "insertion-sort",
  MERGE_SORT = "merge-sort",
  QUICK_SORT = "quick-sort",
}

export const sortingAlgorithmsMapped = {
  [SortingAlgorithms.BUBBLE_SORT]: {
    name: "Bubble Sort",
    icon: <WaterIcon />,
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
    icon: <CrossIcon />,
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
    icon: <ArrowToLeftIcon />,
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
    icon: <MergeIcon />,
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
  [SortingAlgorithms.QUICK_SORT]: {
    name: "Quick Sort",
    icon: <TrendingUpIcon />,
    worstCase: TimeComplexity.O_N2,
    averageCase: TimeComplexity.O_N_LOGN,
    bestCase: TimeComplexity.O_N_LOGN,
    space: TimeComplexity.O_LOGN,
    isStable: false,
    applications: (
      <>
        <p>
          The sorting algorithm is used for information searching and as Quicksort is the fastest
          algorithm so it is widely used as a better way of searching.
        </p>
        <p>It is used everywhere where a stable sort is not needed.</p>
        <p>
          Quicksort is a cache-friendly algorithm as it has a good locality of reference when used
          for arrays.
        </p>
      </>
    ),
    info: (
      <div>
        <p>
          <b>Quicksort</b> is an in-place sorting algorithm. Developed by British computer scientist
          Tony Hoare in 1959 and published in 1961, it is still a commonly used algorithm for
          sorting. When implemented well, it can be somewhat faster than merge sort and about two or
          three times faster than heapsort.
        </p>
        <p>
          Quicksort is a divide-and-conquer algorithm. It works by selecting a 'pivot' element from
          the array and partitioning the other elements into two sub-arrays, according to whether
          they are less than or greater than the pivot. For this reason, it is sometimes called
          partition-exchange sort. The sub-arrays are then sorted recursively. This can be done
          in-place, requiring small additional amounts of memory to perform the sorting.
        </p>
        <p>
          Quicksort is a comparison sort, meaning that it can sort items of any type for which a
          "less-than" relation (formally, a total order) is defined. Efficient implementations of
          Quicksort are not a stable sort, meaning that the relative order of equal sort items is
          not preserved.
        </p>
        <p>
          Mathematical analysis of quicksort shows that, on average, the algorithm takes O(n logn)
          comparisons to sort n items. In the worst case, it makes O(n<sup>2</sup>) comparisons.
        </p>
      </div>
    ),
    wiki: "https://en.wikipedia.org/wiki/Merge_sort",
  },
};

const Sorting = () => {
  return (
    <Container>
      <h1 className="text-4xl font-bold text-center my-8 w-">Sorting</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {Object.values(SortingAlgorithms).map((item, index) => {
          const { name, icon } = sortingAlgorithmsMapped[item];
          return (
            <Link to={`/sorting/${item}`} key={item}>
              <div className="p-4 group border-2 hover:border-primary-500 transition-colors text-lg rounded-md font-bold flex items-center">
                <Badge text={icon} />
                <span className="ml-2">{name}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </Container>
  );
};

export default Sorting;
