import React from "react";

interface ButtonProps {
    children: React.ReactNode;
    onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
    return (
        <button onClick={onClick} className="rounded-lg bg-yellow-400 border p-2 hover:text-white">
            {children}
        </button>
    );
};

export default Button;
