import React from "react";
import './header.css';

const Header = ({texto}) => {
    return (
        <header className={"header"} >
            {texto}
        </header>
    );
};

export default Header;