import styled from 'styled-components'

export const Header = styled.header `
    background-color: hsl(180, 29%, 50%);
    height: 30vh;
    width: 100%;

    @media (max-width: 700px) {
        height: 20vh;
        width: 100%;
    }

    img {
        height: 100%;
        width: 100%;

        &.mobile {
            display: none;
        }
    }

    @media (max-width: 700px) {
        img {
            &.mobile {
                display: block;
            }
            &.desktop {
                display: none;
            }
        }
    }
`
