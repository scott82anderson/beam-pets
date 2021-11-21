import * as Mutations from "../mutations";

export default function useMutations(query) {
  return {
    create: Mutations.useCreate(query),
    update: Mutations.useUpdate(query),
  };
}
