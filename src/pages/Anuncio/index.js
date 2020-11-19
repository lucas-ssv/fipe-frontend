import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import qs from 'query-string';
import { BsArrowLeft, BsArrowRightShort } from 'react-icons/bs';
import Skeleton from '@material-ui/lab/Skeleton';
import Rating from '@material-ui/lab/Rating';

import { formatPrice } from '../../utils/format';

import api from '../../services/api';
import { Header, Section, Cards } from './styles';

import Nav from '../../components/Nav';

import Logo from '../../assets/ml.png';

class Anuncio extends Component {
    state = {
        announcements: [],
        loading: false,
    };

    async componentDidMount() {
        const { location } = this.props;

        const parsed = qs.parse(location.search);

        this.setState({ loading: true });

        const response = await api.get(
            `/announcements?modelo=${parsed.modelo}&ano=${parsed.ano}
            ${parsed.unico_dono ? `&unico_dono=${parsed.unico_dono}`
            : parsed.ar_condicionado ? `&ar_condicionado=${parsed.ar_condicionado}`
            : parsed.condicao ? `&condicao=${parsed.condicao}`
            : ''}${parsed.preco_minimo ? `&preco_minimo=${parsed.preco_minimo}`
            : ''}${parsed.preco_maximo ? `&preco_maximo=${parsed.preco_maximo}`
            : ''}${parsed.portas ? `&portas=${parsed.portas}`
            : ''}`
        );

        const data = response.data.map(announcement => ({
            ...announcement,
            priceFormatted: formatPrice(announcement.price)
        }));

        this.setState({ announcements: data, loading: false });
    }

    render() {
        const { announcements, loading } = this.state;

        return (
            <>
                <Header>
                    <Nav>
                        <Link to="/buscar">
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
                    <div className="title">
                        <h1>
                            Modelos
                            <span> encontrados</span>
                        </h1>
                            { loading ? (
                                <Skeleton
                                    className="skeleton"
                                    animation="wave"
                                    height={25}
                                    width={250}
                                    variant="text"
                                />
                            ) : (
                                <small>{announcements.length} modelos encontrados</small>
                            ) }
                    </div>
                    <hr/>

                    <Cards>
                        { loading && (
                            <>
                                <Skeleton
                                    className="rect-skeleton"
                                    variant="rect"
                                    animation="wave"
                                    width={270}
                                    height={330}
                                />
                                <Skeleton
                                    className="rect-skeleton"
                                    variant="rect"
                                    animation="wave"
                                    width={270}
                                    height={300}
                                />
                                <Skeleton
                                    className="rect-skeleton"
                                    variant="rect"
                                    animation="wave"
                                    width={270}
                                    height={330}
                                />
                                <Skeleton
                                    className="rect-skeleton"
                                    variant="rect"
                                    animation="wave"
                                    width={270}
                                    height={300}
                                />
                                <Skeleton
                                    className="rect-skeleton"
                                    variant="rect"
                                    animation="wave"
                                    width={270}
                                    height={330}
                                />
                                <Skeleton
                                    className="rect-skeleton"
                                    variant="rect"
                                    animation="wave"
                                    width={270}
                                    height={300}
                                />
                            </>
                        ) }

                        { announcements.map(announcement => (
                            <>
                                <div className="card">
                                    <div className="content">
                                        <div className="image-car">
                                            <img src={announcement.thumbnail} alt={announcement.title} />
                                        </div>
                                        <div className="description">
                                            <h1>
                                                { announcement.priceFormatted }
                                            </h1>
                                            <small>{announcement.year} | {announcement.kilometers}</small>
                                            <p>{announcement.title}</p>
                                            <div className="rating">
                                                <p>{announcement.address.state_name}</p>
                                                <a href={announcement.rating.link} target="_blank" rel="noopener noreferrer" title="Avaliação">
                                                    <Rating name="size-small"
                                                        defaultValue={announcement.rating.note}
                                                        size="small"
                                                        readOnly
                                                    />
                                                </a>
                                            </div>
                                            <div className="buttons">
                                                <div className="button-fipe">
                                                    <Link to="/fipe">
                                                        Fipe
                                                        <BsArrowRightShort size={25} />
                                                    </Link>
                                                </div>
                                                <div className="button-ml">
                                                    <a href={announcement.permalink} target="_blank" rel="noopener noreferrer">
                                                        ML
                                                        <BsArrowRightShort size={25} />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )) }
                    </Cards>
                </Section>
            </>
        );
    }
}

export default Anuncio;
