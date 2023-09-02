import { render, screen } from "@testing-library/react";
import FavoritesPage from "./FavoritesPage";

describe("Given a FavoritesPage page", () => {
  describe("When it is rendered", () => {
    test("Then it should renders a heading with the text 'your favorites'", () => {
      const expectedText = /your favorites/i;

      render(<FavoritesPage />);

      const heading = screen.getByRole("heading", {
        level: 2,
        name: expectedText,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
