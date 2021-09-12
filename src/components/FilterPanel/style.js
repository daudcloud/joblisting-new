import styled from "styled-components";

export const StyledFilterPanel = styled.div`
    position: absolute;
    padding: 1.2em 2.5em;
    transform: translateY(-50%);
    top: 0;
    left: 0;
    right: 0;
    background: white;
    border-radius: .3rem;
    box-shadow: 0px 10px 10px hsla(180, 29%, 50%, 0.2);
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: space-between;
    overflow: scroll;
    max-height: 100px;

    .filters {
        display: flex;
        gap: 20px;
        flex-wrap: wrap;
    }

    .clear {
        color: hsl(180, 29%, 50%);
        cursor: pointer;
        font-size: .8rem;
        font-weight: 700;
        flex-shrink: 0;

        &:hover {
            text-decoration: underline;
        }
    }

    .filter-wrapper {
        display: flex;
        align-items: center;
        border-radius: .3rem;
        overflow: hidden;
    }

    .remove {
        background: hsl(180, 29%, 50%);
        align-self: stretch;
        display: flex;
        align-items: center;
        padding: .5rem;
        cursor: pointer;
        transition: background-color 0.1s linear;

        &:hover {
            background: hsl(180, 14%, 20%);
        }
    }
`

export const FilterItem = styled.div`
    background-color: hsl(180, 31%, 95%);
    color: hsl(180, 29%, 50%);
    font-weight: 700;
    font-size: .8rem;
    padding: .7em;
    transition: all 0.1s linear;
`