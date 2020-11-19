import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

import { Square } from './styles';

import Nav from '../../components/Nav';
import Header from '../../components/Header';
import Center from '../../components/Center';

import api from '../../services/api';

class Fipe extends Component {
    state = {
        models: [],
        query: '',
        modelo: '',
        ano: '',
        versao: '',
    };

    handleLoadModels = async (query, modelo, ano, versao) => {
        const response = await api.get(`cars/toyota/models/${query}`);

        const { modelos } = response.data;

        this.setState({ models: modelos, modelo, ano, versao });
    };

    handleSelectChange = () => {
        let { query, modelo, ano, versao } = this.state;

        modelo = document.querySelector(".model").value;
        ano = document.querySelector(".year").value;
        versao = document.querySelector(".version").value;

        query = `versions/ano?modelo=${modelo}&ano=${ano}&versao=${versao}&estado=SP`;

        this.handleLoadModels(query, modelo, ano, versao);
    };

    render() {
        const {
            models,
            modelo,
            ano,
            versao,
        } = this.state;

        return (
            <>
                <Nav>
                    <Link to="/">
                        <BsArrowLeft color="#717074" size={40} />
                    </Link>
                </Nav>

                <Header>
                    <h1>
                        Fipe
                        <strong> Toyota</strong>
                    </h1>
                </Header>

                <Center>
                    <Square>
                        <span>Modelo</span>
                        <select className="model" onChange={this.handleSelectChange}>
                            <option value="Selecione...">Selecione...</option>
                            <option value="Corolla">Corolla</option>
                            <option value="Etios">Etios</option>
                            <option value="Hilux">Hilux</option>
                            <option value="Rav4">Rav4</option>
                            <option value="Prius">Prius</option>
                            <option value="SW4">SW4</option>
                        </select>
                        <span>Ano</span>
                        <select className="year" onChange={this.handleSelectChange}>
                            <option value="Selecione...">Selecione...</option>
                            <option value="2015">2015</option>
                            <option value="2016">2016</option>
                            <option value="2017">2017</option>
                            <option value="2018">2018</option>
                            <option value="2019">2019</option>
                            <option value="2020">2020</option>
                        </select>
                        <span>Versão</span>
                        <select className="version" onChange={this.handleSelectChange}>
                            <option value="Selecione...">Selecione...</option>
                            {models.map(model => (
                                <option value={model.versao} key={String(model._id)}>
                                    {model.versao}
                                </option>
                            ))}
                        </select>
                        <span>Estado</span>
                        <select>
                            <option value="SP">SP</option>
                        </select>
                        <Link
                            className="buscar"
                            to={`fipe/modelo?modelo=${modelo}&ano=${ano}&versao=${versao}&estado=SP`}>
                                Avaliar
                        </Link>
                    </Square>
                </Center>
            </>
        );
    }
};

export default Fipe;
