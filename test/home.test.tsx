// test landing page with vitest

import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("LandingPage", () => {
	it("should render", () => {
		render(<Home />);
		expect(screen.getByText("Degu IO Boilerplate")).toBeInTheDocument();
		expect(screen.queryByText("Electric Boogaloo")).not.toBeInTheDocument();
		expect(screen.getByTestId("features")).toBeInTheDocument();
	});
});
