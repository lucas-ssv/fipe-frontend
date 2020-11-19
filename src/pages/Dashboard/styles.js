import styled from 'styled-components';

export const Header = styled.header`
    padding: 0 250px;
    margin-top: 150px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .brand {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;

        h1 {
            font-size: 200px;
            color: #F3123C;
        }

        p {
            width: 368px;
            font-size: 24px;
            opacity: 0.4;
            margin-left: 10px;
        }
    }

    svg {
        border-radius: 8px;
    }
`;

export const Section = styled.section`
    padding: 0 250px;
    margin-top: 150px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;

    a.fipe {
        padding: 32px 72px;
        background: rgba(90,90,90,.4);
        color: #FFF;
        text-decoration: none;
        font-size: 32px;
        font-weight: bold;
        border-radius: 8px;
        margin: 0 10px;
        display: flex;
        align-items: center;
        transition: all 0.25s;

        &:hover {
            opacity: .8;
        }

        svg {
            margin-right: 24px;
        }
    }

    a.buscar {
        padding: 32px 48px;
        background: #F3123C;
        text-transform: uppercase;
        color: #FFF;
        text-decoration: none;
        font-size: 32px;
        font-weight: bold;
        border-radius: 8px;
        margin: 0 10px;
        display: flex;
        align-items: center;
        transition: all 0.25s;

        &:hover {
            opacity: .8;
        }

        svg {
            margin-right: 24px;
        }
    }
`;
