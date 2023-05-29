export const Loader = () => {
    return (
        <div className="loader">
            <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0"
                y="0"
                width="120"
                height="120"
                viewBox="0 0 30 30"
                xmlSpace="preserve"
            >
                <rect x="0" y="0" width="4" height="20" fill="#333">
                    <animate
                        attributeName="opacity"
                        attributeType="XML"
                        values="1; .2; 1"
                        begin="0s"
                        dur="0.6s"
                        repeatCount="indefinite"
                    />
                </rect>
                <rect x="10" y="0" width="4" height="20" fill="#333">
                    <animate
                        attributeName="opacity"
                        attributeType="XML"
                        values="1; .2; 1"
                        begin="0.2s"
                        dur="0.6s"
                        repeatCount="indefinite"
                    />
                </rect>
                <rect x="20" y="0" width="4" height="20" fill="#333">
                    <animate
                        attributeName="opacity"
                        attributeType="XML"
                        values="1; .2; 1"
                        begin="0.4s"
                        dur="0.6s"
                        repeatCount="indefinite"
                    />
                </rect>
            </svg>
        </div>
    );
};
