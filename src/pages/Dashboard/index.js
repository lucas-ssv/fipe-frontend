import React from 'react';
import { SiToyota } from 'react-icons/si';
import { AiFillCar, AiOutlineSearch } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import { Header, Section } from './styles';

const Dashboard = () => {
    return (
        <>
            <Header>
                <div className="brand">
                    <h1>FIPE</h1>
                    <p>Plataforma para consulta de carros da Toyota.</p>
                </div>
                <SiToyota color="#717074" size={300} />
            </Header>

            <Section>
                <Link className="fipe" to="/fipe">
                    <AiFillCar color="#FFF" size={32} />
                    FIPE
                </Link>
                <Link className="buscar" to="/buscar">
                    <AiOutlineSearch color="#FFF" size={32} />
                    Buscar
                </Link>
            </Section>
        </>
    );
};

export default Dashboard;
