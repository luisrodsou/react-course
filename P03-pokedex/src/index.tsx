import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import './index.css'

const root = document.getElementById('root');

if (root) {
    createRoot(root).render(
        <StrictMode>
            <App />
        </StrictMode>
    );
}
