export const ProjectCard = ({ label, description, thumbnailImageSrc }) => {
    return (
        <div className="projectCardContainer">
            <img src={thumbnailImageSrc} alt="" />
            <h3 className="cardTitle">{label}</h3>
            <p className="cardDescription">{description}</p>
        </div>
    );
};
