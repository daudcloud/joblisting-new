import styled from "styled-components";

export const FilterItem = styled.div`
    background-color: hsl(180, 31%, 95%);
    color: hsl(180, 29%, 50%);
    font-weight: 700;
    font-size: .8rem;
    padding: .7em;
    border-radius: .3rem;
    cursor: pointer;
    transition: all 0.1s linear;

    &:hover {
        background-color: hsl(180, 29%, 50%);
        color: hsl(180, 31%, 95%);
    }
`