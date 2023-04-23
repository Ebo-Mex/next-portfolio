import { IntroductionCard } from "@/components";

export const Welcome = ({ introduction }) => {
    return (
        <div className="welcomeContainer">
            <IntroductionCard description={introduction.description} />
        </div>
    );
};
