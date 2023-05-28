import { Loading } from "@/components";

export const Toolbox = ({ items }) => {
    const listItems = items
        ? items.map(({ label, logoUrl }, idx) => (
              <li key={`tool-${idx}`}>
                  <div className="toolContent">
                      {logoUrl ? <img src={logoUrl} alt="" /> : null}
                      {label}
                  </div>
              </li>
          ))
        : [];
    return (
        <div id="toolbox" className="toolboxContainer">
            <h2>Toolbox</h2>
            {items ? (
                <ul className="itemsContainer">{listItems}</ul>
            ) : (
                <Loading />
            )}
        </div>
    );
};
