import Link from "next/link";

export const NavBar = () => {
    return (
        <div className="navBarContainer">
            <div className="navBar">
                <Link href="#home">HOME</Link>
                <Link href="#toolbox">TOOLBOX</Link>
                <Link href="#projects">PROJECTS</Link>
                <Link href="#awards">AWARDS</Link>
                <Link href="#aboutme">ABOUT ME</Link>
            </div>
        </div>
    );
};
