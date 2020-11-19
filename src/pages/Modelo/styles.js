import styled from 'styled-components';

export const Square = styled.div`
    width: 500px;
    height: auto;
    padding: 24px;
    background: #FFF;
    color: #333;
    border-radius: 8px;

    span {
        color: #F3123C;
    }

    p {
        font-size: 14px;
        text-transform: uppercase;
        color: #666;
        margin-top: 8px;
    }

    .skeleton {
        display: flex;
        margin: 16px auto;
    }

    .rect-skeleton {
        width: 100%;
        height: 120px;
        border-radius: 8px;
    }

    img {
        width: 150px;
        display: flex;
        margin: 16px auto;
    }

    table {
        width: 100%;
        text-align: left;

        th, td, tr {
            font-size: 14px;
            color: #666;
            padding: 8px;
        }
    }
`;
