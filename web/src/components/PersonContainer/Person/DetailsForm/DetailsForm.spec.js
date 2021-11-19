import { render, fireEvent } from "@testing-library/react";
import DetailsForm from ".";

it("renders without crashing", () => {
  const person = {
    id: "foo-id",
    name: "Testy McTester",
    description: "A really cool bean",
  };

  render(<DetailsForm person={person} onSubmit={() => {}} />);
});

it("calls onSubmit with expected args", () => {
  const onSubmit = jest.fn();

  const person = {
    id: "foo-id",
    name: "Testy McTester",
    description: "A really cool bean",
  };

  const { getByLabelText, getByTestId } = render(
    <DetailsForm person={person} onSubmit={onSubmit} />
  );

  const name = getByLabelText("Name");
  fireEvent.change(name, { target: { value: "Foo Name" } });

  const form = getByTestId("details-form");
  fireEvent.submit(form);

  expect(onSubmit).toBeCalledTimes(1);
  expect(onSubmit).toBeCalledWith({
    name: "Foo Name",
    description: person.description,
  });
});
