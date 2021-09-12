import styled from 'styled-components'

export const Header = styled.header`
    background-color: hsl(180, 29%, 50%);
    height: 30vh;
    width: 100%;
    position: relative;

    .mobile, .desktop {
        position: relative;
        width: 100%;
        height: 100%;
    }

    .mobile {
        display: none;
    }

    @media (max-width: 950px) {
        .mobile {
            display: block;
        }
        .desktop {
            display: none;
        }
    }
`
