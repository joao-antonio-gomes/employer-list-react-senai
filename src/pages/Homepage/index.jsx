import React from "react";
import './homepage.css';
import Header from "../../components/Header";
import Searchbar from "../../components/Searchbar";
import EmployerList from "../../components/EmployerList";


const Homepage = () => {
    return (
        <div className={"homepage"}>
            <Header texto={"Homepage"}/>
            <Searchbar />
            <EmployerList />
        </div>
    );
};

export default Homepage;