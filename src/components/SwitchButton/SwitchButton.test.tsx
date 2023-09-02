import { screen } from "@testing-library/react";
import { vi } from "vitest";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import SwitchButton from "./SwitchButton";

describe("Given a SwitchButton component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the button movies", () => {
      const buttonText = /movies/i;
      const onMoviesMock = vi.fn();
      const onSeriesMock = vi.fn();

      renderWithProviders(
        wrapWithRouter(
          <SwitchButton
            isMovies={false}
            isSeries={true}
            onMoviesClick={onMoviesMock}
            onSeriesClick={onSeriesMock}
          />
        )
      );

      const button = screen.getByRole("button", { name: buttonText });

      expect(button).toBeInTheDocument();
    });

    test("Then it should show the button series", () => {
      const buttonText = /series/i;
      const onMoviesMock = vi.fn();
      const onSeriesMock = vi.fn();

      renderWithProviders(
        wrapWithRouter(
          <SwitchButton
            isMovies={true}
            isSeries={false}
            onMoviesClick={onMoviesMock}
            onSeriesClick={onSeriesMock}
          />
        )
      );

      const button = screen.getByRole("button", { name: buttonText });

      expect(button).toBeInTheDocument();
    });
  });
});
