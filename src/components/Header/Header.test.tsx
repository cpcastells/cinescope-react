import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Given a Header component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the logo of Cinescope", () => {
      const altText = "logo of cinescope";

      render(<Header />);
      const logo = screen.getByAltText(altText);

      expect(logo).toBeInTheDocument();
    });
  });
});
