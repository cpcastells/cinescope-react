import { render, screen } from "@testing-library/react";
import appRouter from "./appRouter";
import { RouterProvider } from "react-router";

describe("Given a appRouter", () => {
  describe("When the webpage is rendered", () => {
    test("Then it should show the Home page with the search bar", () => {
      const expectedText = /search/i;

      render(<RouterProvider router={appRouter} />);
      const label = screen.getByLabelText(expectedText);

      expect(label).toBeInTheDocument();
    });
  });
});
