import { useMutation } from "@/lib/graphql";

export const DELETE_PET = /* GraphQL */ `
  mutation DeletePet($input: ID!) {
    deletePet(id: $input) {
      id
    }
  }
`;

export default function useDelete(query) {
  const { mutate } = useMutation({
    mutation: DELETE_PET,
    invalidateQuery: query,
  });

  /**
   * @param {String} id
   * @returns {Object}
   */
  function remove({ id }) {
    return mutate(id);
  }

  return remove;
}
