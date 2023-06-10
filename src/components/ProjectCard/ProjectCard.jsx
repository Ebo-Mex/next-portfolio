import Image from "next/image";
import { useState } from "react";
import { ProjectModal } from "@/components";

export const ProjectCard = ({ label, content, thumbnailImageSrc, idx }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const isOdd = idx % 2 === 1;

    return (
        <div className={"projectCardContainer " + (isOdd ? "odd" : "even")}>
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
                <div>
                    <p className="cardContent">{content[0]}</p>
                    {content.length > 1 ? (
                        <button onClick={() => setIsExpanded(!isExpanded)}>
                            Read more
                        </button>
                    ) : (
                        ""
                    )}
                </div>
            </div>
            <ProjectModal
                content={content}
                handleClose={() => setIsExpanded(!isExpanded)}
                isOpen={isExpanded}
                title={label}
            />
        </div>
    );
};
