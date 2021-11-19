import { render, fireEvent } from "@testing-library/react";
import Person from ".";

it("renders without crashing", () => {
  const person = {
    id: "foo-id",
    name: "Testy McTester",
    description: "A really cool bean",
  };

  render(<Person person={person} onUpdate={() => {}} />);
});

it("calls onUpdate with expected args", () => {
  const onUpdate = jest.fn();

  const person = {
    id: "foo-id",
    name: "Testy McTester",
    description: "A really cool bean",
  };

  const { getByTestId } = render(
    <Person person={person} onUpdate={onUpdate} />
  );

  const form = getByTestId("details-form");
  fireEvent.submit(form);

  expect(onUpdate).toBeCalledTimes(1);
  expect(onUpdate).toBeCalledWith(person);
});
