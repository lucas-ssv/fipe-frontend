import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { BsArrowLeft, BsArrowRightShort } from 'react-icons/bs';
import Select from 'react-select';

import { Header, Section, Form, Article } from './styles';

import Nav from '../../components/Nav';

import Logo from '../../assets/ml.png';

const options = [
    { label: "Ar condicionado", name: "&ar_condicionado", value: "Sim" },
    { label: "Único dono", name: "&unico_dono", value: "Sim " },
    { label: "Novo", name: "&condicao", value: "Novo" },
    { label: "Usado", name: "&condicao", value: "Usado" },
    { label: "4 portas", name: "&portas", value: "4" },
    { label: "2 portas", name: "&portas", value: "2" },
];

class Buscar extends Component {
    state = {
        modelo: '',
        ano: '',
        buscar: false,
        checked: false,
        preco_min: 0,
        preco_max: 0,
        items: [],
    };

    handleInputChange = e => {
        this.setState({ checked: e.target.checked });
    };

    handleInputModelChange = e => {
        const { ano } = this.state;

        this.setState({ modelo: e.target.value });
        if (e.target.value !== '' && ano !== '') {
            this.setState({ buscar: true });
        } else {
            this.setState({ buscar: false });
        }
    };

    handleInputYearChange = e => {
        const { modelo } = this.state;

        this.setState({ ano: e.target.value });
        if (modelo !== '' && e.target.value !== '') {
            this.setState({ buscar: true });
        } else {
            this.setState({ buscar: false });
        }
    };

    handleSelectOptionChange = e => {
        this.setState({ items: e ? e.map(x => `${x.name}=${x.value.trim()}`) : [] });
    };

    handleInputPriceMinChange = e => {
        this.setState({ preco_min: e.target.value });
    };

    handleInputPriceMaxChange = e => {
        this.setState({ preco_max: e.target.value });
    };

    render() {
        const {
            modelo,
            ano,
            buscar,
            checked,
            preco_min,
            preco_max,
            items
        } = this.state;

        return (
            <>
                <Header>
                    <Nav>
                        <Link to="/">
                            <BsArrowLeft color="#717074" size={40} />
                        </Link>
                    </Nav>
                    <div className="main-header">
                        <div className="title">
                            <h1>
                                Encontre já o seu <span> carro</span>
                            </h1>
                        </div>
                        <div className="subtitle">
                            <p>O seu modelo mais desejado você encontra aqui!</p>
                        </div>
                        <div className="image-ml">
                            <img src={Logo} alt="mercado-livre" />
                        </div>
                    </div>
                </Header>

                <Section>
                    <div className="main-section">
                        <h1>Preencha todos os campos</h1>
                        <hr/>

                        <Form>
                            <div className="choose-models">
                                <label for="modelo">Modelo *</label>

                                <div>
                                    <input type="checkbox" onChange={this.handleInputChange} />
                                    <label>Encontre outros modelos</label>
                                </div>
                            </div>
                            { checked ? (
                                <input
                                    type="text"
                                    className="model"
                                    onChange={this.handleInputModelChange}
                                    placeholder="Selecione o modelo desejado"
                                />
                            ) : (
                                <select onChange={this.handleInputModelChange}>
                                    <option value="Selecione...">Selecione o modelo desejado</option>
                                    <option value="Corolla">Corolla</option>
                                    <option value="Etios">Etios</option>
                                    <option value="Hilux">Hilux</option>
                                    <option value="Rav4">Rav4</option>
                                    <option value="Prius">Prius</option>
                                    <option value="SW4">SW4</option>
                                </select>
                            ) }

                            <label for="ano">Ano *</label>
                            <input
                                type="number"
                                min="2000"
                                className="year"
                                onChange={this.handleInputYearChange}
                                placeholder="Selecione o ano desejado"
                            />
                            <label for="modelo">Opcionais</label>
                            <Select
                                className="multi-select"
                                onChange={this.handleSelectOptionChange}
                                value={options.find(item => item.value === items)}
                                closeMenuOnSelect={false}
                                isMulti
                                placeholder="Selecione os opcionais desejados"
                                options={options}
                            />
                            <div className="prices">
                                <div className="price-min">
                                    <label for="modelo">Preço Mínimo</label>
                                    <select onChange={this.handleInputPriceMinChange}>
                                        <option value="Selecione...">Selecione o preço mínimo</option>
                                        <option value="0">De 0</option>
                                        <option value="10000">De 10.000</option>
                                        <option value="15000">De 15.000</option>
                                        <option value="20000">De 20.000</option>
                                        <option value="25000">De 25.000</option>
                                        <option value="30000">De 30.000</option>
                                        <option value="35000">De 35.000</option>
                                        <option value="40000">De 40.000</option>
                                        <option value="45000">De 45.000</option>
                                        <option value="50000">De 50.000</option>
                                        <option value="60000">De 60.000</option>
                                        <option value="70000">De 70.000</option>
                                        <option value="80000">De 80.000</option>
                                        <option value="90000">De 90.000</option>
                                        <option value="100000">De 100.000</option>
                                        <option value="150000">De 150.000</option>
                                        <option value="200000">De 200.000</option>
                                        <option value="250000">De 250.000</option>
                                        <option value="300000">De 300.000</option>
                                        <option value="400000">De 400.000</option>
                                        <option value="500000">De 500.000</option>
                                    </select>
                                </div>
                                <div className="price-max">
                                    <label for="modelo">Preço Máximo</label>
                                    <select onChange={this.handleInputPriceMaxChange}>
                                        <option value="Selecione...">Selecione o preço máximo</option>
                                        <option value="10000">Até 10.000</option>
                                        <option value="15000">Até 15.000</option>
                                        <option value="20000">Até 20.000</option>
                                        <option value="25000">Até 25.000</option>
                                        <option value="30000">Até 30.000</option>
                                        <option value="35000">Até 35.000</option>
                                        <option value="40000">Até 40.000</option>
                                        <option value="45000">Até 45.000</option>
                                        <option value="50000">Até 50.000</option>
                                        <option value="60000">Até 60.000</option>
                                        <option value="70000">Até 70.000</option>
                                        <option value="80000">Até 80.000</option>
                                        <option value="90000">Até 90.000</option>
                                        <option value="100000">Até 100.000</option>
                                        <option value="150000">Até 150.000</option>
                                        <option value="200000">Até 200.000</option>
                                        <option value="250000">Até 250.000</option>
                                        <option value="300000">Até 300.000</option>
                                        <option value="400000">Até 400.000</option>
                                        <option value="500000">Até 500.000</option>
                                    </select>
                                </div>
                            </div>
                        </Form>
                    </div>
                </Section>
                <Article>
                    <div buscar={buscar} className="button-search">
                        { buscar ? (
                            <Link className="enabled-link" to={
                                `buscar/anuncios?modelo=${modelo}&ano=${ano}${items.map(item => `${item}`).join('')}${preco_min !== 0 ? `&preco_minimo=${preco_min}` : ''}${preco_max !== 0 ? `&preco_maximo=${preco_max}` : ''}`
                            }>
                                Buscar
                                <BsArrowRightShort color="#FFF" size={40} />
                            </Link>
                        ) : (
                            <Link className="disabled-link" to={'/buscar'}>
                                Buscar
                                <BsArrowRightShort color="#FFF" size={40} />
                            </Link>
                        ) }
                    </div>
                </Article>
            </>
        );
    }
}

export default Buscar;
