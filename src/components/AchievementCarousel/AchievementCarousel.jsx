import { useState } from "react";

export const AchievementCarousel = ({ achievements }) => {
    const [selectedItem, setSelectedItem] = useState(0);

    const handleItemSelection = (e, idx) => {
        e.preventDefault();
        setSelectedItem(null);
        setTimeout(() => {
            setSelectedItem(idx);
        }, 1500);
    };

    return (
        <div className="achievementCarouselContainer">
            {achievements.map(
                ({ title, organization, description, reference }, idx) => (
                    <div
                        className={
                            "carouselItem " +
                            (selectedItem === idx ? "expanded" : "")
                        }
                        key={idx}
                    >
                        <h3 className="title">{title}</h3>
                        <div className="dataContainer">
                            <p className="description">{description}</p>
                            <p className="organization">{organization}</p>
                            <a className="reference" href={reference.url}>
                                {reference.linkText}
                            </a>
                        </div>
                        <a
                            className="itemSelector"
                            onClick={(e) => handleItemSelection(e, idx)}
                        ></a>
                    </div>
                )
            )}
        </div>
    );
};
