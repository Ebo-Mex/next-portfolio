import { IntroductionCard, Loading } from "@/components";

export const Welcome = ({ introduction }) => {
    return (
        <div id="home" className="welcomeContainer">
            {introduction ? (
                <IntroductionCard description={introduction.description} />
            ) : (
                <Loading />
            )}
        </div>
    );
};
