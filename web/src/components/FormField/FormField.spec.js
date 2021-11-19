import { render } from "@testing-library/react";
import FormField from ".";

it("renders without crashing", () => {
  render(<FormField label="Foo label" name="foo" value="Foo Bar" />);
});
