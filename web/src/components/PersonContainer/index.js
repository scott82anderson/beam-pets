import { useRouter } from "next/router";
import PropTypes from "prop-types";
import AppLayout from "@/layouts/App";
import { People } from "@/lib/entities";
import { useQuery } from "@/lib/graphql";
import Person from "./Person";
import { useEffect } from "react";

const GET_PERSON = /* GraphQL */ `
  query GetPerson($id: ID!) {
    person(id: $id) {
      id
      name
      description
    }
  }
`;

const PersonContainer = ({ id }) => {
  const query = [GET_PERSON, { id }];
  const onUpdate = People.mutations.useUpdate(query);

  const { data, isLoading } = useQuery(query, { enabled: Boolean(id) });
  const person = data?.person ?? {};

  return (
    <AppLayout
      isLoading={isLoading}
      title={person?.name}
      subtitle={person?.description}
    >
      <Person person={person} onUpdate={onUpdate} />
    </AppLayout>
  );
};

PersonContainer.propTypes = {
  id: PropTypes.string,
};

export default PersonContainer;
