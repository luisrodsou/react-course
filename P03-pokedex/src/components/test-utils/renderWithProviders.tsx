import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

const renderWithProviders = (children: React.ReactNode) => {
    return render(
        <QueryClientProvider client={new QueryClient()}>
            <BrowserRouter>
                {children}
            </BrowserRouter>
        </QueryClientProvider>
    );
};

export default renderWithProviders;
