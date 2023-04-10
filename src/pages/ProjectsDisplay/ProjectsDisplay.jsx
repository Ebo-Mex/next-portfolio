import { ProjectCard } from "@/components";

export const ProjectsDisplay = ({ projects }) => {
    return (
        <div className="projectsDisplayContainer">
            <h2>Projects</h2>
            <ul className="projectsList">
                {projects.map(
                    ({ label, description, thumbnailImageSrc, id }) => (
                        <li key={id}>
                            <ProjectCard
                                label={label}
                                description={description}
                                thumbnailImageSrc={thumbnailImageSrc}
                            />
                        </li>
                    )
                )}
            </ul>
        </div>
    );
};
