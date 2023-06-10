import { useState, useRef, useEffect } from "react";

export const ProjectModal = ({ isOpen, content, title, handleClose }) => {
    const [buttonClasses, updateButtonClasses] = useState("");
    const modalRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            modalRef.current.showModal();
        }
    }, [isOpen]);

    return (
        <dialog
            className="projectModalContainer"
            onClose={handleClose}
            ref={modalRef}
        >
            <header>
                <h2>{title}</h2>
            </header>
            <div>
                {content.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                ))}
            </div>
            <footer>
                <button
                    className={buttonClasses}
                    onMouseEnter={() => updateButtonClasses("in")}
                    onMouseLeave={() => updateButtonClasses("out")}
                    onClick={() => modalRef.current.close()}
                >
                    Close
                </button>
            </footer>
        </dialog>
    );
};
