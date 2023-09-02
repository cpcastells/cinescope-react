import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Given an App component", () => {
  describe("When rendered", () => {
    test("Then it should show the logo of Cinescope", () => {
      const altText = "logo of cinescope";

      render(<App />);
      const logo = screen.getByAltText(altText);

      expect(logo).toBeInTheDocument();
    });
  });
});
