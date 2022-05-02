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

  return (
    <Container>
      <div className="relative">
        <h1 className="text-3xl font-semibold text-center my-7">{name}</h1>
        <Link to="/sorting">
          <div className="absolute top-1/2 -translate-y-1/2 left-0 cursor-pointer px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-md">
            Back
          </div>
        </Link>
      </div>

      <SortingVisualizer type={slug} />
      <div className="lg:grid lg:grid-cols-4 gap-x-4 mb-4">
        <div className="col-span-1">
          <AlgorithmComplexity
            worstCase={worstCase}
            averageCase={averageCase}
            bestCase={bestCase}
            space={spaceComplexity}
            isStable={stable}
          />
        </div>
        <div className="col-span-3">
          <Box>
            <article
              className="prose prose-sm prose-a:text-primary-400 prose-a:no-underline hover:prose-a:underline prose-h1:font-semibold max-w-none"
              dangerouslySetInnerHTML={{ __html: description.html }}
            ></article>
          </Box>
        </div>
      </div>
    </Container>
  );
};

export default SortingDetail;
