import { useMutation } from "@/lib/graphql";

export const UPDATE_PET = /* GraphQL */ `
  mutation UpdatePet($input: UpdatePetInput!) {
    updatePet(input: $input) {
      id
    }
  }
`;

export default function useUpdate(query) {
  const { mutate } = useMutation({
    mutation: UPDATE_PET,
    invalidateQuery: query,
  });

  /**
   * @param {String} id
   * @param {String} name
   * @param {Number} age
   * @param {String} species
   * @returns {Object}
   */
  function update({ id, name, age, species }) {
    return mutate({ id, name, age, species });
  }

  return update;
}
