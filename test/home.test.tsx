// test landing page with vitest

import Home from "@/app/page";
import { render, screen } from "@testing-library/react";

describe("LandingPage", () => {
  it("should render", () => {
    render(<Home />);
    expect(screen.getByText("Degu IO Boilerplate")).toBeInTheDocument();
    expect(screen.queryByText("Electric Boogaloo")).not.toBeInTheDocument();
    expect(screen.getByTestId("features")).toBeInTheDocument();
  });
});
