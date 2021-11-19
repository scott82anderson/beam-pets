import { createContext, useContext } from "react";
import { GraphQLClient } from "graphql-request";

export const ClientContext = createContext();

export function useClient() {
  return useContext(ClientContext);
}

const Provider = ({ children, endpoint }) => {
  const client = new GraphQLClient(endpoint);

  return (
    <ClientContext.Provider value={client}>{children}</ClientContext.Provider>
  );
};

export default Provider;
