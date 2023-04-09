export const Toolbox = () => {
    const items = [
        { label: "JavaScript", logoUrl: "/assets/javascript_logo.png" },
        { label: "TypeScript", logoUrl: "/assets/typescript_logo.svg" },
        { label: "HTML", logoUrl: "/assets/html5_logo.svg" },
        { label: "CSS", logoUrl: "/assets/css3_logo.png" },
        { label: "React", logoUrl: "/assets/react_logo.webp" },
        { label: "Material UI", logoUrl: "/assets/mui_logo.png" },
        { label: "Vue", logoUrl: "/assets/vue_logo.png" },
        { label: "Vuetify", logoUrl: "/assets/vuetify_logo.png" },
        { label: "Node JS", logoUrl: "/assets/node_logo.png" },
        { label: "Git", logoUrl: "/assets/git_logo.png" },
        { label: "Python", logoUrl: "/assets/python_logo.png" },
    ];

    const listItems = items
        ? items.map(({ label, logoUrl }, idx) => (
              <li key={`tool-${idx}`}>
                  {logoUrl ? <img src={logoUrl} alt="" /> : null}
                  {label}
              </li>
          ))
        : [];
    return (
        <div className="toolboxContainer">
            <h2>Toolbox</h2>
            <ul className="itemsContainer">{listItems}</ul>
        </div>
    );
};
