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
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;
    bottom: 48px;

    .main-section {
        width: 800px;
        height: auto;
        background: #FFF;
        color: #333;
        padding: 48px;
        border-radius: 8px 8px 0 0;
        box-shadow: 0 0 20px rgba(0,0,0,.1);

        hr {
            margin: 24px 0;
            border: 1px solid #E6E6F0;
        }
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    font-size: 16px;

    label {
        color: #9C98A6;

        &:nth-child(n + 2) {
            margin-top: 24px;
        }
    }

    .choose-models {
        display: flex;
        justify-content: space-between;
        align-items: center;

        div {
            display: flex;
            align-items: center;

            label {
                margin: 0;
            }

            input {
                margin: 0 10px 0 0;
            }
        }
    }

    select {
        font-size: 16px;
        font-family: 'Poppins', sans-serif;
        background: #FAFAFC;
        border-color: #E6E6F0;
        margin-top: 8px;
        padding: 16px;
        border-radius: 8px;
        text-indent: 8px;
        color: #888;
        -webkit-appearance: none;
    }

    input {
        font-family: 'Poppins', sans-serif;
        font-size: 16px;
        background: #FAFAFC;
        border: 1px solid #E6E6F0;
        margin-top: 8px;
        padding: 15px;
        border-radius: 8px;
        text-indent: 8px;
        color: #888;
    }

    .multi-select {
        margin-top: 8px;
        font-family: 'Poppins', sans-serif;

        .css-yk16xz-control {
            background-color: #FAFAFC;
            border-color: #E6E6F0;
            padding: 8px;
            border-radius: 8px;
        }

        .css-1pahdxg-control {
            background-color: #FAFAFC;
            border-color: #E6E6F0;
            box-shadow: none;
            padding: 8px;
            border-radius: 8px;
        }
    }

    .prices {
        display: flex;
        margin-top: 24px;

        input {
            font-family: 'Poppins', sans-serif;
            font-size: 16px;
            background: #FAFAFC;
            border: 1px solid #E6E6F0;
            margin-top: 8px;
            padding: 16px 0;
            border-radius: 8px;
            text-indent: 16px;
            color: #888;
        }

        .price-min {
            width: 100%;
            display: flex;
            flex-direction: column;
            padding: 0 15px 0 0;
        }

        .price-max {
            width: 100%;
            display: flex;
            flex-direction: column;
            padding: 0 0 0 15px;
        }
    }
`;

export const Article = styled.article`
    font-family: 'Poppins', sans-serif;
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;
    bottom: 48px;

    .button-search {
        width: 800px;
        height: auto;
        display: flex;
        justify-content: flex-end;
        background: #FAFAFC;
        border: 1px solid #E6E6F0;
        color: #333;
        padding: 32px 48px;
        border-radius: 0 0 8px 8px;

        .enabled-link {
            display: flex;
            align-items: center;
            justify-content: space-between;
            background: #24D169;
            text-decoration: none;
            color: #FFF;
            font-weight: bold;
            border-radius: 4px;
            padding: 8px 24px;
            transition: all 0.25s;

            &:hover {
                background: #2dc168;
            }
        }

        .disabled-link {
            display: flex;
            align-items: center;
            justify-content: space-between;
            background: ${props => (props.buscar ? '#24D169' : '#999')};
            text-decoration: none;
            color: #FFF;
            font-weight: bold;
            border-radius: 4px;
            padding: 8px 24px;
            cursor: not-allowed;
        }
    }
`;
