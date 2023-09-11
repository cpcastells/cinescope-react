import { screen } from "@testing-library/react";
import { movieListMock } from "../../mocks/mocks";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import MediaList from "./MediaList";

describe("Given a MediaList component", () => {
  describe("When it receives the title 'Trends'", () => {
    test("Then it should show a heading with the title 'Trends'", () => {
      const expectedText = "Trends";
      const movies = movieListMock;

      renderWithProviders(
        wrapWithRouter(<MediaList title={expectedText} media={movies} />)
      );

      const heading = screen.getByRole("heading", { name: expectedText });

      expect(heading).toBeInTheDocument();
    });
  });
});
