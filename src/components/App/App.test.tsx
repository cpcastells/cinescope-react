import { screen } from "@testing-library/react";
import App from "./App";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";

describe("Given an App component", () => {
  describe("When rendered", () => {
    test("Then it should show the logo of Cinescope", () => {
      const altText = "logo of cinescope";

      renderWithProviders(wrapWithRouter(<App />));
      const logo = screen.getByAltText(altText);

      expect(logo).toBeInTheDocument();
    });
  });
});
