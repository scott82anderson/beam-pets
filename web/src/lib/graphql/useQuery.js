import { useQuery } from "react-query";
import { useClient } from "./Provider";

/**
 * @param {any[]} query
 * @param {Object} variables
 * @returns {Promise}
 */
export default function useGraphQLQuery(query, options) {
  const client = useClient();

  async function fetcher() {
    return await client.request(...query);
  }

  return useQuery({
    ...options,
    queryKey: query,
    queryFn: fetcher,
  });
}
