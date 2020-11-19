import styled from 'styled-components';

export const Header = styled.header`
    width: 100%;
    height: 300px;
    background: #3D3E42;
    padding: 16px 0;

    .main-header {
        max-width: 800px;
        height: 100%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .title h1 {
            display: flex;
            justify-content: center;

            span {
                margin-left: 8px;
                color: #F3123C;
            }
        }

        .subtitle {
            display: flex;
            justify-content: center;
            margin-top: 8px;
            color: #797B7F;
        }

        .image-ml img {
            width: 100px;
        }
    }
`;

export const Section = styled.section`
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    max-width: 900px;
    margin: 16px auto;

    .title {
        font-size: 20px;

        span {
            color: #F3123C;
        }

        small {
            color: #797B7F;
            font-weight: normal;
            position: relative;
            bottom: 8px;
        }

        .skeleton {
            position: relative;
            bottom: 8px;
        }
    }
`;

export const Cards = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 5px;

    .rect-skeleton {
        margin-top: 24px;
        border-radius: 8px;
    }

    .card {
        margin-top: 24px;

        a {
            text-decoration: none;
        }
    }

    .content {
        width: 270px;
        height: auto;
        background: #FFF;
        border-radius: 8px;
        color: #333;

        .image-car {
            display: flex;
            justify-content: center;
        }

        img {
            border-radius: 8px;
        }

        .description {
            font-family: 'Poppins', sans-serif;
            color: #3D3E42;
            padding: 8px 24px;
            font-weight: normal;

            h1 {
                font-size: 24px;
                letter-spacing: 0.5px;
            }

            small {
                font-size: 13px;
                font-weight: normal;
                position: relative;
                bottom: 8px;
            }

            p {
                color: #73757A;
                font-size: 13px;
                margin: 8px 0;
            }

            .rating {
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-top: 16px;

                p {
                    color: #3D3E42;
                    font-size: 16px;
                }
            }

            .buttons {
                display: flex;
                justify-content: space-between;
                margin-top: 24px;

                .button-fipe a {
                    font-family: 'Ubuntu', sans-serif;
                    text-transform: uppercase;
                    font-size: 14px;
                    background: #F3123C;
                    color: #FFF;
                    font-weight: bold;
                    padding: 6px 16px;
                    display: flex;
                    align-items: center;
                    border-radius: 4px;
                    margin: 0 24px 8px 0;
                    transition: all 0.25s;
                    margin-top: auto;

                    &:hover {
                        background: #d41236;
                    }
                }

                .button-ml a {
                    font-family: 'Ubuntu', sans-serif;
                    font-size: 14px;
                    background: #FEE74E;
                    color: #000;
                    font-weight: bold;
                    padding: 6px 16px;
                    border-radius: 4px;
                    display: flex;
                    align-items: center;
                    transition: all 0.25s;
                    margin-top: auto;

                    &:hover {
                        background: #f1db4f;
                    }
                }
            }
        }
    }
`;
