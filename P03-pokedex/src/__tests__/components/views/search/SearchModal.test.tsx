import React from "react";
import renderWithProviders from "../../../../components/test-utils/renderWithProviders";
import SearchModal from "../../../../components/views/search/SearchModal";
import useSearchStore from "../../../../hooks/store/useSearchStore";
import Modal from "react-modal";

jest.mock("../../../../hooks/store/useSearchStore.ts", () => jest.fn());

describe("SearchModal", () => {
    const mockUseSearchStore = useSearchStore as unknown as jest.Mock;
    
    beforeAll(() => mockUseSearchStore.mockReturnValue({ isOpen: true }));

    afterEach(() => jest.clearAllMocks());

    it("Should render correctly", () => {
        Modal.setAppElement(document.createElement("div"));

        const { getByRole } = renderWithProviders(<SearchModal />);

        expect(getByRole("textbox")).toBeInTheDocument();
        expect(getByRole("button")).toBeInTheDocument();
    });
});
