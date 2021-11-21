import { render, fireEvent } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from 'react-query';
import Pet from ".";

it("renders without crashing", () => {
  const pet = {
    id: "foo-id",
    name: "Bob",
    age: 7,
    species: "Bloodhound",
  };

  render(
    <QueryClientProvider client={new QueryClient()}>
      <table><tbody><Pet pet={pet} onUpdate={() => {}} /></tbody></table>
    </QueryClientProvider>
  );
});

it("calls onPetUpdate with expected args", () => {
  const onPetUpdate = jest.fn();

   const pet = {
    id: "foo-id",
    name: "Bob",
    age: 7,
    species: "Bloodhound",
  };

  const { getByTestId } = render(
    <QueryClientProvider client={new QueryClient()}>
      <table><tbody><Pet pet={pet} onPetUpdate={onPetUpdate} /></tbody></table>
    </QueryClientProvider>
  );

  const editButton = getByTestId("edit-button");
  fireEvent.click(editButton);

  const form = getByTestId("pet-form");
  fireEvent.submit(form);

  expect(onPetUpdate).toBeCalledTimes(1);
  const petWithAgeAsString = {
    ...pet,
    age: pet.age.toString()
  }
  expect(onPetUpdate).toBeCalledWith(petWithAgeAsString);
});
