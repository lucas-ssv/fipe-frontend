import styled from 'styled-components';

export const Square = styled.div`
    width: 500px;
    height: auto;
    padding: 24px;
    background: #FFF;
    color: #333;
    border-radius: 8px;

    .disabled {
        cursor: not-allowed;
        background: #888;
        opacity: .5;
    }

    select {
        font-family: 'Poppins', sans-serif;
        color: #888;
        width: 100%;
        padding: 10px;
        margin-bottom: 16px;
        background: #FAFAFC;
        border: 1px solid #E6E6F0;
        border-radius: 4px;
        text-indent: 8px;
        -webkit-appearance: none;
        transition: all 0.25s;
    }

    span {
        font-family: 'Poppins', sans-serif;
        font-size: 14px;
        color: #666;
    }

    a {
        font-family: 'Poppins', sans-serif;
        border-radius: 4px;
        width: 100%;
        display: flex;
        justify-content: center;
        padding: 10px;
        background: #343a40;
        text-decoration: none;
        color: #FFF;
        font-size: 18px;
        font-weight: bold;
        transition: all 0.25s;

        &:hover {
            background: #23262b;
        }
    }
`;
