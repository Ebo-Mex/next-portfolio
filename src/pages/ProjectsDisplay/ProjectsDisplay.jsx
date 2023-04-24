import { ProjectCard } from "@/components";

export const ProjectsDisplay = ({ projects }) => {
    return (
        <div className="projectsDisplayContainer">
            <h2>Projects</h2>
            <ul className="projectsList">
                {projects.map(
                    ({ label, content, thumbnailImageSrc, id }, idx) => (
                        <li key={id}>
                            <ProjectCard
                                label={label}
                                content={content}
                                thumbnailImageSrc={thumbnailImageSrc}
                                idx={idx}
                            />
                        </li>
                    )
                )}
            </ul>
        </div>
    );
};
