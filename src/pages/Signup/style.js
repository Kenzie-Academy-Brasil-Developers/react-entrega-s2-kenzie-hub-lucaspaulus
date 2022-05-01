import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    
    height: 100vh;
    padding: 0 25px;


     
`

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 370px;
    height: 50px;
    margin: 0 auto;
    margin-top: 56px;
    margin-bottom: 30px;
     

    img{
        width: 100%;
        max-width: 122px;
    }

    button{
        font-weight: 600;
        max-width: 68px;
        font-size: 0.7rem;
    }

    
`

export const Content = styled.div`
    width: 100%;
    max-width: 370px;
    margin: 0 auto;
   

`


