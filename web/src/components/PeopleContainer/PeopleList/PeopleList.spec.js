import { render } from "@testing-library/react";
import PeopleList from ".";

it("renders a list of people", () => {
  const people = [
    { id: "3", name: "Sammy J" },
    { id: "4", name: "Randy" },
  ];

  const { getByText } = render(<PeopleList people={people} />);

  expect(getByText("Sammy J")).toBeDefined();
  expect(getByText("Randy")).toBeDefined();
});

it("displays an empty message with no people", () => {
  const people = [];

  const { getByText } = render(<PeopleList people={people} />);

  expect(getByText("No people!")).toBeDefined();
});
