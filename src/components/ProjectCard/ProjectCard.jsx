import Image from "next/image";
import { useState } from "react";
import { ProjectModal } from "@/components";

export const ProjectCard = ({ label, content, thumbnailImageSrc, idx }) => {
    const [openModal, updateOpenModal] = useState(false);

    return (
        <div className="projectCardContainer">
            {thumbnailImageSrc ? (
                <div className="imageContainer">
                    <Image
                        className="image"
                        fill
                        sizes="100%"
                        object-fit="cover"
                        src={thumbnailImageSrc}
                        alt=""
                    />
                </div>
            ) : null}
            <div className="cardData">
                <h3 className="cardTitle">{label}</h3>
                <div className="cardContent">
                    <p>{content[0]}</p>
                    {content.length > 1 ? (
                        <button onClick={() => updateOpenModal(!openModal)}>
                            <span>Read more</span>
                        </button>
                    ) : (
                        ""
                    )}
                </div>
            </div>
            <ProjectModal
                content={content}
                handleClose={() => updateOpenModal(!openModal)}
                isOpen={openModal}
                title={label}
            />
        </div>
    );
};
