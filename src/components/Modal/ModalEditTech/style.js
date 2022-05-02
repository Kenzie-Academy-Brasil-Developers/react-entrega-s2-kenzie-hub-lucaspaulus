import styled from "styled-components"

export const Container = styled.div`
    display: ${(props)=> props.showModalEdit === "on" ? "flex" : "none"};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background: #12121480;
    position: fixed;
    padding: 0 25px;



`


export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 369px;
    height: 50px;
    border-radius: 4px 4px 0px 0px;
    background-color: var(--Grey2);
    padding: 12px 20px;
   

    p{
        font-size: 14px;
        font-weight: 700;
        color: var(--Grey0);
    }

    svg{
        cursor: pointer;
        padding: 2px;
        &:hover{
        path{
            fill: var(--Grey3);
        }
        
    }

    }
     
   

`

export const Body = styled.div`
    width: 100%;
    max-width: 369px;
    display: flex;
    background-color: var(--Grey3);
    form{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 24px 22px 32px 22px;

        label{
            font-weight: 400;
            font-size: 12.182px;
            margin-bottom: 22px;
        }

        input, select{
            width: 100%;
            height: 48px;
            padding-left: 15px;
            padding-right: 15px;
            border-radius: 4px;
            background-color: var(--Grey2);
            border: 0.973988px solid var(--Grey2);
            color: var(--Grey1);
            font-weight: 400;
            font-size: 16px;
            margin-bottom: 20px;
            
        }
        
        input:focus, select:focus{
        color: var(--Grey0);
        outline: none;
        border: 1.2182px solid var(--Grey0);
        
        } 
    }

    button{
        height: 48px;
        font-size: 16px;
        font-weight: 500;
    }
    
    div{
        display: flex;
        justify-content: space-between;
        width: 100%;

        button:nth-child(1){
            margin-right: 22px;
            width: 73%;
        }

        button:nth-child(2){
            width: 30%;
        }
    }

`