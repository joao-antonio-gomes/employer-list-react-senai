import React from "react";
import EmployerListItem from "../EmployerListItem";
import './employerlist.css';
import avatar1 from '../../assets/avatar/avatar1.png';
import avatar2 from '../../assets/avatar/avatar2.png';
import avatar3 from '../../assets/avatar/avatar3.png';
import avatar4 from '../../assets/avatar/avatar4.png';
import avatar5 from '../../assets/avatar/avatar5.png';
import avatar6 from '../../assets/avatar/avatar6.png';

const listaFuncionarios = [
    {
        avatar: avatar1,
        nome: 'João Gomes',
        cargo: 'Estagiário/Faz tudo'
    },
    {
        avatar: avatar2,
        nome: 'Maria Teresinha',
        cargo: 'Tech Lead'
    },
    {
        avatar: avatar3,
        nome: 'Teresa Maria',
        cargo: 'Recursos Humanos'
    },
    {
        avatar: avatar4,
        nome: 'Gomes João',
        cargo: 'Customer Success'
    }
]

const EmployerList = () => {
    return (
        <ul className={'employerlist'}>
            {listaFuncionarios.map(({avatar, cargo, nome}) => {
                return <EmployerListItem avatar={avatar} cargo={cargo} nome={nome} />
            })}
        </ul>
    )
}

export default EmployerList;