import { GraphQLClient, gql } from "graphql-request";

export enum Complexity {
  O_1 = "O1",
  O_N = "On",
  O_N2 = "On2",
  O_LOGN = "Ologn",
  O_N_LOGN = "Onlogn",
}

export type AlgorithmResponse = {
  id: string;
  name: string;
  slug: string;
  description: {
    html: string;
  };
  averageCase: Complexity;
  bestCase: Complexity;
  spaceComplexity: Complexity;
  stable: boolean;
  worstCase: Complexity;
};

const graphcmsEndpoint = process.env.REACT_APP_GRAPHCMS_ENDPOINT;
const graphcmsToken = process.env.REACT_APP_GRAPHCMS_AUTH;

class Api {
  private client!: GraphQLClient;

  constructor() {
    if (graphcmsEndpoint == null) {
      console.error("No such key provided");
      return;
    }

    this.client = new GraphQLClient(graphcmsEndpoint, {
      headers: {
        Authorization: `Bearer ${graphcmsToken}`,
      },
    });
  }

  fetchAlgorithm(slug: string) {
    const QUERY = gql`
		{
			algorithm(where: {slug: "${slug}"}) {
				id
				name
				slug
				description {
					html
				}
				averageCase
				bestCase
				spaceComplexity
				stable
				worstCase
			}
		}
	`;

    return this.client.request<{ algorithm: AlgorithmResponse | null }>(QUERY);
  }
}

export default new Api();
