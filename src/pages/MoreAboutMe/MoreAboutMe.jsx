import { Loading } from "@/components";

export const MoreAboutMe = ({ about }) => {
    return (
        <div id="aboutme" className="moreAboutMeContainer">
            <h2>Even more about me!</h2>
            {about ? (
                about.map((data, idx) => <p key={`aboutme-${idx}`}>{data}</p>)
            ) : (
                <Loading />
            )}
        </div>
    );
};
