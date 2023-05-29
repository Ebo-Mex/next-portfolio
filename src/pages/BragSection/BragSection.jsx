import { AchievementCard, Loader } from "@/components";

export const BragSection = ({ achievements }) => {
    return (
        <div id="awards" className="bragSectionContainer">
            <h2>Achivements and Rewards</h2>
            {achievements ? (
                <ul className="achievementsList">
                    {achievements.map(
                        (
                            { title, organization, description, reference },
                            idx
                        ) => (
                            <li key={idx}>
                                <AchievementCard
                                    title={title}
                                    organization={organization}
                                    description={description}
                                    reference={reference}
                                />
                            </li>
                        )
                    )}
                </ul>
            ) : (
                <Loader />
            )}
        </div>
    );
};
