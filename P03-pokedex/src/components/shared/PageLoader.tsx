import React from "react";
import { FaSpinner } from "react-icons/fa6";

const PageLoader: React.FC = () => (
    <div className="absolute top-1/2 left-1/2 w-20 h-20">
        <FaSpinner className="animate-spin w-full h-full" />
    </div>
);

export default PageLoader;
