import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SortingVisualizer from "components/SortingVisualizer";
import Container from "components/common/Container";
import Box from "components/common/Box";
import AlgorithmComplexity from "components/algorithm/AlgorithmComplexity";
import Api, { AlgorithmResponse } from "services/Api";
import LoadingScreen from "components/LoadingScreen";
import Heading from "components/Heading";

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
    return (
      <Container>
        <Heading text="Loading..." backLink="/sorting" />
        <LoadingScreen minHeight={500} />
      </Container>
    );
  }

  const { name, worstCase, averageCase, bestCase, spaceComplexity, stable, slug, description } =
    algorithm;

  return (
    <Container>
      <Heading text={name} backLink="/sorting" />
      <SortingVisualizer type={slug} />
      <div className="lg:grid lg:grid-cols-4 gap-x-4">
        <div className="col-span-1">
          <div className="lg:sticky lg:top-4">
            <AlgorithmComplexity
              worstCase={worstCase}
              averageCase={averageCase}
              bestCase={bestCase}
              space={spaceComplexity}
              isStable={stable}
            />
          </div>
        </div>
        <div className="col-span-3">
          <Box>
            <article
              className="prose dark:prose-invert prose-sm px-2 prose-a:text-primary-400 prose-a:no-underline hover:prose-a:underline prose-h1:font-semibold prose-code:text-xs max-w-none"
              dangerouslySetInnerHTML={{ __html: description.html }}
            ></article>
          </Box>
        </div>
      </div>
    </Container>
  );
};

export default SortingDetail;
