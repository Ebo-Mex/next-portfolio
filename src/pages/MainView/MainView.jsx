import Welcome from "@/pages/Welcome";
import Toolbox from "@/pages/Toolbox";
import ProjectsDisplay from "@/pages/ProjectsDisplay";
import BragSection from "@/pages/BragSection";
import MoreAboutMe from "@/pages/MoreAboutMe";
import { NavBar } from "@/components";

export const MainView = () => {
    const projects = [
        {
            label: "project1",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            thumbnailImageSrc: "",
            id: 0,
        },
        {
            label: "project2",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            thumbnailImageSrc: "",
            id: 1,
        },
    ];

    return (
        <>
            <NavBar />
            <Welcome />
            <Toolbox />
            <ProjectsDisplay projects={projects} />
            <BragSection />
            <MoreAboutMe />
        </>
    );
};
