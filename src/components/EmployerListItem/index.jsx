import React from "react";
import PropTypes from "prop-types";
import "./employerlistitem.css";

const EmployerListItem = ({avatar, nome, cargo}) => {
    return (
        <li className={"employerListItem"}>
            <div className={"funcionario"}>
                <img src={avatar}
                     height={'50'} width={'50'}/>
                <div className={"info"}>
                    <p className={"nomeFuncionario"}>{nome}</p>
                    <p className={"nomeCargo"}>{cargo}</p>
                </div>
            </div>
        </li>
    );
};

EmployerListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    nome: PropTypes.string.isRequired,
    cargo: PropTypes.string.isRequired
}

export default EmployerListItem;