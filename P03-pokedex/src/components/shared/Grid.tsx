import React from "react";
import Button from "./button/Button";

interface GridProps {
    children: React.ReactNode;
    goToPreviousPage?: () => void;
    goToNextPage?: () => void;
}

const Grid: React.FC<GridProps> = ({children, goToPreviousPage, goToNextPage}: GridProps) => (
    <div className="container mx-auto">
        <div className="grid grid-cols-6 gap-3 mx-auto">
            {children}
        </div>
        <div className="flex justify-center mt-4 gap-5">
            {goToPreviousPage && <Button onClick={goToPreviousPage}>Previous</Button>}
            {goToNextPage && <Button onClick={goToNextPage}>Next</Button>}
        </div>
    </div>
);

export default Grid;
