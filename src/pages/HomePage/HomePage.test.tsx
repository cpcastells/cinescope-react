import { render, screen } from "@testing-library/react";
import HomePage from "./HomePage";

describe("Given a HomePage page", () => {
  describe("When it is rendered", () => {
    test("Then it should renders a search bar", () => {
      const expectedText = /search/i;

      render(<HomePage />);

      const label = screen.getByLabelText(expectedText);

      expect(label).toBeInTheDocument();
    });
  });
});
