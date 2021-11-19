import { useMutation } from "@/lib/graphql";

export const UPDATE_PERSON = /* GraphQL */ `
  mutation UpdatePerson($input: UpdatePersonInput!) {
    updatePerson(input: $input) {
      id
    }
  }
`;

export default function useUpdate(query) {
  const { mutate } = useMutation({
    mutation: UPDATE_PERSON,
    invalidateQuery: query,
  });

  /**
   * @param {String} id
   * @param {String} name
   * @param {String} description
   * @returns {Object}
   */
  function update({ id, name, description }) {
    return mutate({ id, name, description });
  }

  return update;
}
