import styled from "styled-components"

export const StyledItem = styled.div`
    width: 100%;
    border-radius: .3rem;
    background: white;
    box-shadow: 0px 10px 10px hsla(180, 29%, 50%, 0.2);
    display: flex;
    align-items: center;
    padding: 2rem 2.5rem;
    position: relative;

    .hr {
        display: none;
        width: 100%;
        border-top: 1px solid hsl(180, 8%, 52%);
    }

    @media (max-width:950px) {
        flex-direction: column;
        align-items: flex-start;
        padding: 2rem 1.5rem;
        gap: 20px;

        .filters {
            margin-left: 0;
        }

        img {
            width: 50px;
            position: absolute;
            top: 0;
            transform: translateY(-50%);
        }

        .hr {
            display: block;
        }
    }

    &.featured::before {
        content: "";
        position: absolute;
        border-radius: .3rem 0 0 .3rem;
        background-color: hsl(180, 29%, 50%);
        top: 0;
        left: 0;
        bottom: 0;
        width: .35rem;
    }

    
`

export const Company = styled.h4`
    color: hsl(180, 29%, 50%);
    font-size: .85rem;
    margin-right: .5rem;
`

export const Pill = styled.span`
    text-transform: uppercase;
    font-size: .6rem;
    font-weight: 700;
    background: ${props => props.new ? "hsl(180, 29%, 50%)" : "hsl(180, 14%, 20%)"};
    padding: 0.7em 1em 0.4em;
    border-radius: 3rem;
    color: hsl(180, 52%, 96%);
`

export const Title = styled.h1`
    color: hsl(180, 14%, 20%);
    font-size: 1.1rem;
    cursor: pointer;
    transition: color 0.1s linear;

    &:hover {
        color: hsl(180, 29%, 50%);
    }

    @media (max-width: 950px) {
        font-size: 1rem;
    }
`

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 2rem;
    align-self: stretch;
    .info-header {
        display: flex;
        align-items: center;
        gap: .5rem;
    }
    .info-footer {
        color: hsl(180, 8%, 52%);
        display: flex;
        align-items: center;
        font-size: .9rem;
        gap: .8rem;
    }

    @media (max-width: 950px) {
        margin-left: 0;
        gap: 15px;

        .info-footer {
            font-size: .8rem;
        }
    }
`

export const Filters = styled.div`
    margin-left: auto;
    gap: 1rem;
    display: flex;
    flex-wrap: wrap;

    @media (max-width: 950px) {
        margin-left: 0;
    }
`