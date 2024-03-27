import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";


interface ProviderProps {
    children: ReactNode;
}

const AppProvider: React.FC<ProviderProps> = ({ children }: ProviderProps) => (
    <QueryClientProvider client={new QueryClient()}>
        <BrowserRouter>{children}</BrowserRouter>
    </QueryClientProvider>
);

export default AppProvider;
