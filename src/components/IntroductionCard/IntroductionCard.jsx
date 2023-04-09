export const IntroductionCard = ({ description }) => {
    return (
        <div className="introductionCardContainer">
            <h1>Welcome to my portfolio! O(∩_∩)O</h1>
            <div className="cardDescription">
                <p>{description}</p>
            </div>
        </div>
    );
};
