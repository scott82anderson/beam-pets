import { useMutation, useQueryClient } from "react-query";
import { useClient } from "./Provider";

/**
 * @param {object} params
 * @param {string} params.mutation
 * @param {any[]} [params.invalidateQuery]
 *
 * @return {object}
 */
export default function useGraphQLMutation({ mutation, ...options }) {
  const client = useClient();
  const queryClient = useQueryClient();

  const { invalidateQuery, ...rest } = options;

  function onSuccess() {
    if (invalidateQuery) {
      queryClient.invalidateQueries(invalidateQuery);
    }
  }

  /**
   * @param {Object} variables
   * @returns {Promise}
   */
  function mutator(variables) {
    return client.request(mutation, { input: variables });
  }

  return useMutation(mutator, {
    throwOnError: true,
    onSuccess,
    ...rest,
  });
}
