import { IntroductionCard, Loader } from "@/components";

export const Welcome = ({ introduction }) => {
    return (
        <div id="home" className="welcomeContainer">
            <h1>Welcome to my portfolio! O(∩_∩)O</h1>
            {introduction ? (
                <IntroductionCard description={introduction.description} />
            ) : (
                <Loader />
            )}
        </div>
    );
};
