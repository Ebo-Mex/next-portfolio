export const AchievementCard = ({ title, description, reference }) => {
    return (
        <div className="achievementCardContainer">
            <h3 className="title">{title}</h3>
            <p className="description">{description}</p>
            <p className="reference">
                For more information, please visit:{" "}
                <a href={reference.url}>{reference.linkText}</a>
            </p>
        </div>
    );
};
