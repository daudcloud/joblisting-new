import styled from "styled-components";

export const StyledList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 5rem 0;
    position: relative;

    @media (max-width: 950px) {
        gap: 45px;
    }
`