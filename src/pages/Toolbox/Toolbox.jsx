export const Toolbox = ({ items }) => {
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
