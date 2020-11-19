import styled from 'styled-components';

const Nav = styled.div`
    font-family: 'Poppins', sans-serif;
    max-width: 800px;
    margin: 0 auto;

    svg {
        position: absolute;
        top: 16px;
        transition: all 0.25s;

        &:hover {
            color: #FFF !important;
        }
    }
`;

export default Nav;
