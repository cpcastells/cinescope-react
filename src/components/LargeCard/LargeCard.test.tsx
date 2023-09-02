import { screen } from "@testing-library/react";
import LargeCard from "./LargeCard";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import { movieMock, movieWithNoInfoMock, serieMock } from "../../mocks/mocks";

describe("Given a LargeCard component", () => {
  describe("When it receives the movie 'Barbie'", () => {
    test("Then it should show a heading with the title 'Barbie'", () => {
      const expectedText = /barbie/i;
      const movie = movieMock;

      renderWithProviders(
        wrapWithRouter(<LargeCard isMovies={true} media={movie} />)
      );

      const heading = screen.getByRole("heading", { name: expectedText });

      expect(heading).toBeInTheDocument();
    });
  });

  describe("When it receives the serie 'One Piece'", () => {
    test("Then it should show a heading with the title 'One Piece'", () => {
      const expectedText = /one piece/i;
      const serie = serieMock;

      renderWithProviders(
        wrapWithRouter(<LargeCard isMovies={false} media={serie} />)
      );

      const heading = screen.getByRole("heading", { name: expectedText });

      expect(heading).toBeInTheDocument();
    });
  });

  describe("When it receives the movie 'Barbie' with lack of poster", () => {
    test("Then it should show a picture of error", () => {
      const expectedAltText = /error image/i;
      const movie = movieWithNoInfoMock;

      renderWithProviders(
        wrapWithRouter(<LargeCard isMovies={true} media={movie} />)
      );

      const image = screen.getByAltText(expectedAltText);

      expect(image).toBeInTheDocument();
    });
  });
});
