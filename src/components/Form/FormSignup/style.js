import styled from "styled-components"

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    padding: 42px 22px;
    background-color: var(--Grey3);
    box-shadow: 0px 4px 40px -10px var(--black);
    border-radius: 4px;

    h1, label{
        color: var(--Grey0);
    }

    label{
        font-size: 12px;
        font-weight: 400;
    }

    h2{  
        font-size: 12px;
        font-weight: 400;
        color: var(--Grey1);
    }

    p{
        margin-bottom: 25px;
        text-align: center;
        color: var(--Color-Primary);
        font-size: 12px;
        margin-top: 12px;
        transition: 0.3s;
    }
    
    header{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 28px;

        h1{
            margin-bottom: 22px;
            font-size: 18px;
            font-weight: 700;
        }
    }


    label{
        margin-bottom: 22px;
    }

    input, select{
        height: 48px;
        border-radius: 4px;
        background-color: var(--Grey2);
        border: 0.973988px solid var(--Grey2);
        padding-left: 15px;
        padding-right: 15px;
        color: var(--Grey1);
        font-weight: 400;

        &::placeholder{
            color: var(--Grey1);
        }
    }

    input:focus, select:focus{
        color: var(--Grey0);
        outline: none;
        border: 1.2182px solid var(--Grey0);
        
    } 

    .msgErrorColor, .msgErrorColor:focus{
        border: 1.2182px solid var(--Color-Primary);
        color: var(--Grey0);
    }

    Button{
        margin-top: 20px;
        font-weight: 500;
        font-size: 16px;
    }


`