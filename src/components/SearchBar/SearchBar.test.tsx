import { render, screen } from "@testing-library/react";
import SearchBar from "./SearchBar";

describe("Given a SearchBar component", () => {
  describe("When it is rendered", () => {
    test("Then it should show an input to search movies", () => {
      const expectedText = /search/i;

      render(<SearchBar />);

      const label = screen.getByLabelText(expectedText);

      expect(label).toBeInTheDocument();
    });
  });
});
