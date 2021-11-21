import { render } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from 'react-query';
import PetList from ".";

it("renders a list of pets", () => {
  const pets = [
    { id: "3", name: "Sammy J", age: 3, species: "Cat" },
    { id: "4", name: "Fido", age: 10, species: "Snake" },
  ];

  const { getByText } = render(
    <QueryClientProvider client={new QueryClient()}>
      <PetList pets={pets} ownerId="1" onUpdate={() => {}} />
    </QueryClientProvider>
  );

  expect(getByText("Sammy J")).toBeDefined();
  expect(getByText("Fido")).toBeDefined();
});

it("displays an empty message with no pets", () => {
  const pets = [];

  const { getByText } = render(
    <QueryClientProvider client={new QueryClient()}>
      <PetList pets={pets} />
    </QueryClientProvider>
  );

  expect(getByText("No pets")).toBeDefined();
});
