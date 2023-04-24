import Image from "next/image";
import { useState } from "react";

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
                    {isExpanded
                        ? content.slice(1).map((paragraph, pidx) => (
                              <p className="cardContent" key={`${idx}-${pidx}`}>
                                  {paragraph}
                              </p>
                          ))
                        : ""}
                    {content.length > 1 ? (
                        <button onClick={() => setIsExpanded(!isExpanded)}>
                            {isExpanded ? "Show less" : "Read more"}
                        </button>
                    ) : (
                        ""
                    )}
                </div>
            </div>
        </div>
    );
};
