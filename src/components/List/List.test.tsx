import { screen } from "@testing-library/react";
import { movieListMock } from "../../mocks/mocks";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import List from "./List";

describe("Given a List component", () => {
  describe("When it receives a list of movies", () => {
    test("Then it should show a heading with the title 'Barbie'", () => {
      const expectedText = "Barbie";
      const movies = movieListMock;

      renderWithProviders(
        wrapWithRouter(<List isMovies={true} mediaList={movies} />)
      );

      const heading = screen.getAllByRole("heading", { name: expectedText });

      expect(heading[0]).toHaveTextContent(expectedText);
    });
  });
});
