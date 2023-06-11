import { useRef, useEffect } from "react";

export const ProjectModal = ({ isOpen, content, title, handleClose }) => {
    const modalRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            modalRef.current.showModal();
        }
    }, [isOpen]);

    const closeHandler = () => {
        handleClose();
        return;
    };

    return (
        <dialog
            className="projectModalContainer"
            onClose={closeHandler}
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
                <button onClick={() => modalRef.current.close()}>
                    <span>Close</span>
                </button>
            </footer>
        </dialog>
    );
};
