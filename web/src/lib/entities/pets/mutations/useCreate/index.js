import { useMutation } from "@/lib/graphql";

export const CREATE_PET = /* GraphQL */ `
  mutation CreatePet($input: CreatePetInput!) {
    createPet(input: $input) {
      id
    }
  }
`;

export default function useCreate(query) {
  const { mutate } = useMutation({
    mutation: CREATE_PET,
    invalidateQuery: query,
  });

  /**
   * @param {String} name
   * @param {String} age
   * @param {String} species
   * @param {String} owner
   * @returns {Object}
   */
  function create({ name, ageStr, species, owner }) {
    const age = Number(ageStr);
    return mutate({ name, age, species, owner: { connect: owner }});
  }

  return create;
}
