import { AchievementCarousel, Loader } from "@/components";

export const BragSection = ({ achievements }) => {
    return (
        <div id="awards" className="bragSectionContainer">
            <h2>Achivements and Rewards</h2>
            {achievements ? (
                <AchievementCarousel achievements={achievements} />
            ) : (
                <Loader />
            )}
        </div>
    );
};
