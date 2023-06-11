import { ProjectCard, Loader } from "@/components";

export const ProjectsDisplay = ({ projects }) => {
    return (
        <div id="projects" className="projectsDisplayContainer">
            <h2>Projects</h2>
            {projects ? (
                <ul className="projectsList">
                    {projects.map(
                        ({ label, content, thumbnailImageSrc, id }, idx) => (
                            <li key={id}>
                                <ProjectCard
                                    content={content}
                                    key={idx}
                                    label={label}
                                    thumbnailImageSrc={thumbnailImageSrc}
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
