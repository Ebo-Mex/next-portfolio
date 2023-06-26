import { useState } from "react";

export const AchievementCarousel = ({ achievements }) => {
    const [selectedItem, setSelectedItem] = useState(0);
    const [isSelectorDisabled, setIsSelectorDisabled] = useState(false);

    const handleItemSelection = (e, idx) => {
        e.preventDefault();
        setSelectedItem(null);
        setIsSelectorDisabled(true);
        setTimeout(() => {
            setSelectedItem(idx);
            setTimeout(() => {
                setIsSelectorDisabled(false);
            }, 800);
        }, 800);
    };

    return (
        <div className="achievementCarouselContainer">
            {achievements.map(
                ({ title, organization, description, reference }, idx) => (
                    <div
                        className={
                            "carouselItem " +
                            (selectedItem === idx ? "expanded " : "") +
                            (isSelectorDisabled ? "disabled " : "")
                        }
                        key={idx}
                    >
                        <div className="carouselItemDataWrapper">
                            <h3 className="title">{title}</h3>
                            <div className="descriptionContainer">
                                <p className="description">{description}</p>
                                <p className="organization">{organization}</p>
                                <a className="reference" href={reference.url}>
                                    {reference.linkText}
                                </a>
                            </div>
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
