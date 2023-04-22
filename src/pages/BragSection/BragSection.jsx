import { AchievementCard } from "@/components";

export const BragSection = ({ achievements }) => {
    return (
        <div className="bragSectionContainer">
            <h2>Achivements and Rewards</h2>
            <ul className="achievementsList">
                {achievements.map(({ title, description, reference }, idx) => (
                    <li key={idx}>
                        <AchievementCard
                            title={title}
                            description={description}
                            reference={reference}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};
