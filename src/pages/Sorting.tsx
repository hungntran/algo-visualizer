import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import Container from "components/common/Container";
import WaterIcon from "components/icons/WaterIcon";
import CrossIcon from "components/icons/CrossIcon";
import ArrowToLeftIcon from "components/icons/ArrowToLeftIcon";
import MergeIcon from "components/icons/MergeIcon";
import Badge from "components/common/Badge";
import TrendingUpIcon from "components/icons/TrendingUpIcon";
import Heading from "components/Heading";
import { colorClasses } from "utils/colors";

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
  },
  [SortingAlgorithms.SELECTION_SORT]: {
    name: "Selection Sort",
    icon: <CrossIcon />,
  },
  [SortingAlgorithms.INSERTION_SORT]: {
    name: "Insertion Sort",
    icon: <ArrowToLeftIcon />,
  },
  [SortingAlgorithms.MERGE_SORT]: {
    name: "Merge Sort",
    icon: <MergeIcon />,
  },
  [SortingAlgorithms.QUICK_SORT]: {
    name: "Quick Sort",
    icon: <TrendingUpIcon />,
  },
};

const Sorting = () => {
  return (
    <Container>
      <Heading text="Sorting" backLink="/" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {Object.values(SortingAlgorithms).map((item, index) => {
          const { name, icon } = sortingAlgorithmsMapped[item];
          return (
            <Link to={`/sorting/${item}`} key={item}>
              <div className="px-6 py-8 hover:ring hover:ring-secondary-400 transition-all duration-300 hover:-translate-y-3 text-lg rounded-md flex items-center">
                <Badge text={icon} className={classNames(colorClasses[index], "text-white p-3")} />
                <span className="ml-4">{name}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </Container>
  );
};

export default Sorting;
