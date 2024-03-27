import React from "react";

interface LabelProps {
    children: React.ReactNode;
}

const Label: React.FC<LabelProps> = ({children}: LabelProps) => (
    <div className="w-24 h-12 rounded-full bg-white shadow-lg flex items-center justify-center">
        <span className="first-letter:capitalize">{children}</span>
    </div>
);

export default Label;
