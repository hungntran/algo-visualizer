import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import SortingVisualizer from "components/SortingVisualizer";
import Container from "components/common/Container";
import Box from "components/common/Box";
import AlgorithmComplexity from "components/algorithm/AlgorithmComplexity";
import Api, { AlgorithmResponse } from "services/Api";
import LoadingScreen from "components/LoadingScreen";

const SortingDetail = () => {
  const { type } = useParams();
  const navigate = useNavigate();
  const [algorithm, setAlgorithm] = useState<AlgorithmResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (type == null) {
      navigate("/error");
      return;
    }

    Api.fetchAlgorithm(type).then(({ algorithm }) => {
      if (algorithm == null) {
        navigate("/error");
        return;
      }

      setLoading(false);
      setAlgorithm(algorithm);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type]);

  if (algorithm == null || loading) {
    return <LoadingScreen minHeight={400} />;
  }

  const { name, worstCase, averageCase, bestCase, spaceComplexity, stable, slug, description } =
    algorithm;

  console.log(algorithm);

  return (
    <Container>
      <div className="desktop:grid desktop:grid-cols-4">
        <div className="relative col-span-3">
          <h1 className="text-3xl font-semibold text-center my-7">{name}</h1>
          <Link to="/sorting">
            <div className="absolute top-1/2 -translate-y-1/2 left-0 cursor-pointer px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-md">
              Back
            </div>
          </Link>
        </div>
      </div>

      <div className="desktop:grid desktop:grid-cols-4 gap-x-4 mb-4">
        <div className="col-span-3">
          <SortingVisualizer type={slug} />
        </div>

        <div className="col-span-1">
          <AlgorithmComplexity
            worstCase={worstCase}
            averageCase={averageCase}
            bestCase={bestCase}
            space={spaceComplexity}
            isStable={stable}
          />
        </div>
      </div>
      <Box title="Description">
        <article
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: description.html }}
        ></article>
        {/* <div className="text-right mt-2">
          <BaseLink href={wiki}>Wikipedia</BaseLink>
        </div> */}
      </Box>
    </Container>
  );
};

export default SortingDetail;
