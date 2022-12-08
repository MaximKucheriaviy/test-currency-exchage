import styled from "styled-components";

export const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding-left: 50px;
    padding-right: 50px;

    border-bottom: 3px solid white;
    box-shadow: 0px 0px 10px #ffd344;
    & .excageList{
        display: flex;
        gap: 20px;
        font-size: 20px;
        & .name{
            font-weight: 700;
        }
        & .value{
            font-weight: 400;
            margin-left: 10px;
            color: coral;
        }
    }
`