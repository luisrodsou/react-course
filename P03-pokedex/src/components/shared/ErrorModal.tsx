import React from "react";
import Modal from "react-modal";

interface ErrorModalProps {
    message: string | null;
}

const ErrorModal: React.FC<ErrorModalProps> = ({ message }) => {
    return (
        <Modal isOpen={true} className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-4 rounded-lg">
                <h1 className="text-xl text-center">Error</h1>
                <p>{message ?? "An error has occurred."}</p>
            </div>
        </Modal>
    );
};

export default ErrorModal;
