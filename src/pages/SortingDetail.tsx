import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import SortingVisualizer from "components/SortingVisualizer";
import { SortingAlgorithms, sortingAlgorithmsMapped } from "pages/Sorting";
import Container from "components/common/Container";
import Box from "components/common/Box";
import AlgorithmComplexity from "components/algorithm/AlgorithmComplexity";
import BaseLink from "components/common/BaseLink";

const SortingDetail = () => {
  const { type } = useParams<{ type: SortingAlgorithms }>();

  if (type == null || sortingAlgorithmsMapped[type] == null) {
    return <Navigate to="/sorting" />;
  }

  const { name, worstCase, averageCase, bestCase, space, info, isStable, wiki } =
    sortingAlgorithmsMapped[type];

  return (
    <Container>
      <div className="desktop:grid desktop:grid-cols-4">
        <div className="relative col-span-3">
          <h1 className="text-4xl font-semibold text-center my-7">{name}</h1>
          <Link to="/sorting">
            <div className="absolute top-1/2 -translate-y-1/2 left-0 cursor-pointer px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-md">
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

        {/* <div className="col-span-1">
          <Box title="Applications">
            <div>{applications}</div>
          </Box>
        </div> */}
      </div>
      <Box title="Description">
        {info}
        <div className="text-right mt-2">
          <BaseLink href={wiki}>Wikipedia</BaseLink>
        </div>
      </Box>
    </Container>
  );
};

export default SortingDetail;
