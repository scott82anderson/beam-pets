import AppLayout from "@/layouts/App";
import { useQuery } from "@/lib/graphql";
import PeopleList from "./PeopleList";

const GET_PEOPLE = /* GraphQL */ `
  query GetPeople {
    people {
      id
      name
      description
      pets {
        name
      }
    }
  }
`;

const PeopleContainer = () => {
  const query = [GET_PEOPLE];
  const { data, isLoading } = useQuery(query);
  const people = data?.people ?? [];

  return (
    <AppLayout isLoading={isLoading} title="Our People">
      <PeopleList people={people} />
    </AppLayout>
  );
};

export default PeopleContainer;
