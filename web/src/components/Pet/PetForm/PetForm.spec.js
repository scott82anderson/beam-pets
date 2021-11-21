import { render, fireEvent } from "@testing-library/react";
import PetForm from ".";

it("renders without crashing", () => {
  const pet = {
    id: "foo-id",
    name: "Bob",
    age: 7,
    species: "Bloodhound",
  };

  render(<PetForm pet={pet} onSubmit={() => {}} />);
});

it("calls onSubmit with expected args", () => {
  const onSubmit = jest.fn();

  const pet = {
    id: "foo-id",
    name: "Bob",
    age: 7,
    species: "Bloodhound",
  };

  const { getByLabelText, getByTestId } = render(
    <PetForm pet={pet} onSubmit={onSubmit} />
  );

  const name = getByLabelText("Name");
  fireEvent.change(name, { target: { value: "Princess" } });

  const form = getByTestId("pet-form");
  fireEvent.submit(form);

  expect(onSubmit).toBeCalledTimes(1);
  expect(onSubmit).toBeCalledWith({
    id: "foo-id",
    name: "Princess",
    age: pet.age.toString(),
    species: pet.species,
  });
});
