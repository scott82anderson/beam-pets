import { useMutation } from "@/lib/graphql";

export const CREATE_PERSON = /* GraphQL */ `
  mutation CreatePerson($input: CreatePersonInput!) {
    createPerson(input: $input) {
      id
    }
  }
`;

export default function useCreate(query) {
  const { mutate } = useMutation({
    mutation: CREATE_PERSON,
    invalidateQuery: query,
  });

  /**
   * @param {String} name
   * @param {String} description
   * @returns {Object}
   */
  function create({ name, description }) {
    return mutate({ name, description });
  }

  return create;
}
