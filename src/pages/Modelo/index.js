import React, { Component } from 'react';
import qs from 'query-string';
import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import Skeleton from '@material-ui/lab/Skeleton';

import api from '../../services/api';

import { Square } from './styles';

import Nav from '../../components/Nav';
import Header from '../../components/Header';
import Center from '../../components/Center';

class Modelo extends Component {
    state = {
        model: {},
        price: {},
        loading: true,
    };

    async componentDidMount() {
        const { location } = this.props;

        const parsed = qs.parse(location.search);

        const response = await api.get(
            `/cars/toyota?modelo=${parsed.modelo}&ano=${parsed.ano}&versao=${parsed.versao}&estado=${parsed.estado}`
        );

        this.setState({
            model: response.data.carro[0],
            price: response.data.carro[0].precos[0],
            loading: false,
        });
    }

    render() {
        const { model, price, loading } = this.state;

        return (
            <>
                <Nav>
                    <Link to="/fipe">
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
                        <h3>
                            Tabela
                            <span> FIPE</span>
                        </h3>
                        <p>
                            { loading && <Skeleton animation="wave" height={25} variant="text" /> }
                            {model.modelo} {model.versao} {model.ano}
                        </p>
                        { loading && (
                            <Skeleton
                                className="skeleton"
                                variant="circle"
                                animation="wave"
                                width={80}
                                height={80} />
                        ) }
                        <img src={model.imagemUrl} alt={model.modelo} />

                        <table>
                            { loading ? (
                                <Skeleton
                                    className="rect-skeleton"
                                    variant="rect"
                                    animation="wave"
                                />
                            ) : (
                                <>
                                    <tr>
                                        <th></th>
                                        <th>Estado({ model.estado })</th>
                                    </tr>
                                    <tr>
                                        <th>Mínimo</th>
                                        <td>{ price.precoMinimo }</td>
                                    </tr>
                                    <tr>
                                        <th>Médio</th>
                                        <td>{ price.precoMedio }</td>
                                    </tr>
                                    <tr>
                                        <th>Máximo</th>
                                        <td>{ price.precoMaximo }</td>
                                    </tr>
                                </>
                            ) }
                        </table>
                    </Square>
                </Center>
            </>
        );
    }
}

export default Modelo;
