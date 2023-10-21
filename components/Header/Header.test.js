import { render } from "@testing-library/react";
import Home from ".";

it("renders header", () => {
  const { container } = render(<Home />);
  expect(container).toMatchSnapshot();
});
