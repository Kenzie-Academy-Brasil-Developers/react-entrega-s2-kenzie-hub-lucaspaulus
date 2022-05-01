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
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 370px;
    margin: 0 auto;
    margin-top: 56px;
    margin-bottom: 35px;

    img{
        width: 100%;
        max-width: 144px;
    }

`


export const Content = styled.div`
    width: 100%;
    max-width: 370px;
    margin: 0 auto;

`