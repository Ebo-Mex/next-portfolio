import Image from "next/image";

export const ProjectCard = ({ label, description, thumbnailImageSrc, idx }) => {
    const isOdd = idx % 2 === 1;
    return (
        <div className={"projectCardContainer " + (isOdd ? "odd" : "even")}>
            {thumbnailImageSrc ? (
                <Image
                    width={200}
                    height={200}
                    src={thumbnailImageSrc}
                    alt=""
                />
            ) : null}
            <div className="cardData">
                <h3 className="cardTitle">{label}</h3>
                <p className="cardDescription">{description}</p>
            </div>
        </div>
    );
};
