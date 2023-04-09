export const ProjectCard = ({ label, description, thumbnailImageSrc }) => {
    return (
        <div>
            {thumbnailImageSrc ? <img src={thumbnailImageSrc} alt="" /> : null}
            <h3>{label}</h3>
            <p>{description}</p>
        </div>
    );
};
