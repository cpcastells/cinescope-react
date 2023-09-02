import { screen } from "@testing-library/dom";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import Navbar from "./NavBar";

describe("Given a NavBar element", () => {
  describe("Whent it is rendered", () => {
    test("Then it should show a button with a home icon", () => {
      const linkName = "home";

      renderWithProviders(wrapWithRouter(<Navbar />));
      const link = screen.getByRole("link", { name: linkName });

      expect(link).toBeInTheDocument();
    });

    test("Then it should show a button with a favorites icon", () => {
      const linkName = "favorites";

      renderWithProviders(wrapWithRouter(<Navbar />));
      const link = screen.getByRole("link", { name: linkName });

      expect(link).toBeInTheDocument();
    });
  });
});
