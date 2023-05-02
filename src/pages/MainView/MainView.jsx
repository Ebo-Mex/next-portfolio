import Welcome from "@/pages/Welcome";
import Toolbox from "@/pages/Toolbox";
import ProjectsDisplay from "@/pages/ProjectsDisplay";
import BragSection from "@/pages/BragSection";
import MoreAboutMe from "@/pages/MoreAboutMe";
import { NavBar } from "@/components";
import { useState, useEffect } from "react";

export const MainView = () => {
    const [portfolioData, setPortfolioData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("assets/data/portfolioContent.json")
            .then((res) => res.json())
            .then((data) => {
                setPortfolioData(data);
                setLoading(false);
            });
    }, []);

    return (
        <>
            {loading ? (
                <div>loading</div>
            ) : (
                <div>
                    <NavBar />
                    <Welcome introduction={portfolioData.introduction} />
                    <Toolbox items={portfolioData.toolboxItems} />
                    <ProjectsDisplay projects={portfolioData.projects} />
                    <BragSection achievements={portfolioData.achievements} />
                    <MoreAboutMe about={portfolioData.aboutme} />
                </div>
            )}
        </>
    );
};
