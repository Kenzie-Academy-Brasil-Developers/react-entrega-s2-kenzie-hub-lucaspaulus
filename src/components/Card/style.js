import styled from "styled-components";

export const Card = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    background-color: var(--Grey4);
    margin: 0px 18px;
    padding: 0 12px;
    margin-bottom: 16px;
    border-radius: 4px;
    margin: 16px 16px;

    h4{
        font-size: 14px;
        font-weight: 700;
        color: var(--Grey0);
    }

    p{
        font-size: 12px;
        font-weight: 400;
        color: var(--Grey1);

    }

    &:hover{
        background-color: var(--Grey2);

        p{
        
            color: var(--Grey0);

        }
    }
`