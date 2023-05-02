export const MoreAboutMe = ({ about }) => {
    return (
        <div className="moreAboutMeContainer">
            <h2>Even more about me!</h2>
            {about.map((data, idx) => (
                <p key={`aboutme-${idx}`}>{data}</p>
            ))}
        </div>
    );
};
