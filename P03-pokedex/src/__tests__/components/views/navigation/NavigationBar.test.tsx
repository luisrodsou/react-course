import React from "react";
import NavigationBar from "../../../../components/views/navigation/NavigationBar";
import renderWithProviders from "../../../../components/test-utils/renderWithProviders";

describe("NavigationBar", () => {
    it("Should render navigation items", () => {
        const { getByAltText, getByText, getByRole, getAllByRole } = renderWithProviders(<NavigationBar />);

        expect(getAllByRole("link")
            .find(item => item.getAttribute("href") === "/")).toBeInTheDocument();
        expect(getByAltText("Pokeball")).toBeInTheDocument();
        expect(getByText("Pokedex")).toBeInTheDocument();
        expect(getAllByRole("link")
            .find(item => item.getAttribute("href") === "/favorite")).toBeInTheDocument();
        expect(getByRole("button")).toBeInTheDocument();
    });
});
