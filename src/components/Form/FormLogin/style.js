import styled from "styled-components"

export const Form = styled.form`
    display: flex;
    flex-direction: column;

    background-color: var(--Grey3);
    box-shadow: 0px 4px 40px -10px var(--black);
    border-radius: 4px;
    padding: 42px 22px;

    h1, label{
        color: var(--Grey0);
    }



    label{
        font-size: 12px;
        font-weight: 400;
    }

    header{
        display: flex;
        justify-content: center;
        margin-bottom: 28px;

        h1{
            font-weight: 700;
            font-size: 18px;
        }
    }
    
    p{
        margin-bottom: 25px;
        text-align: center;
        color: var(--Color-Primary);
        font-size: 12px;
        margin-top: 12px;
        transition: 0.3s;
    }


    label{
        margin-bottom: 22px;
    }


    input{
        height: 48px;
        width: 100%;
        border-radius: 4px;
        background-color: var(--Grey2);
        border: 0.973988px solid var(--Grey2);
        padding-left: 15px;
        padding-right: 15px;
        color: var(--Grey1);
        font-weight: 400;
        position: relative;
      
        &::placeholder{
            color: var(--Grey1);
        }
    }

    input:focus{
        color: var(--Grey0);
        outline: none;
        border: 1.2182px solid var(--Grey0)
        
    }

    .msgErrorColor, .msgErrorColor:focus{
        border: 1.2182px solid var(--Color-Primary);
        color: var(--Grey0);
    }

    button{
        font-weight: 500;
        font-size: 16px;
    }

    button + a {
        align-self: center;
        margin: 34px 0 22px 0;
    }

    a{
        font-weight: 600;
        font-size: 12px;
        color: var(--Grey1);

    }


`

export const ContainerPassword = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;

    div{
        display: flex;
        width: 14px;
        position: absolute;
        margin-right: 22px;
        color:var(--Grey1);
        cursor: pointer;
        z-index: 0;
         
        svg{
            z-index: 2;
        }
    }


   
`