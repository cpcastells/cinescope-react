import { screen } from "@testing-library/react";
import Layout from "./Layout";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";

describe("Given a Layout component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the logo of Cinescope as a header", () => {
      const altText = "logo of cinescope";

      renderWithProviders(wrapWithRouter(<Layout />));
      const logo = screen.getByAltText(altText);

      expect(logo).toBeInTheDocument();
    });
  });
});
