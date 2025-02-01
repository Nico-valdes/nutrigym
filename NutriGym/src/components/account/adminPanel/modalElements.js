import { useState } from 'react';

const Modal = ({ isOpen, closeModal, items }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-md shadow-md max-w-2xl w-full">
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold">Ventana Emergente</h2>
                <button onClick={closeModal} className="text-red-500 text-xl">
                    ✖
                    </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                {items.map((item, index) => (
                    <div key={index} className="border p-4 rounded-md">
                        {item}
                    </div>
                ))}
                </div>
            </div>
        </div>
    );
};

export default Modal;