import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    color: white;

   

`

export const Navbar = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 72px;
    padding: 0 25px;
    position: fixed;
    background-color: var(--Grey4);
 
   /*  background-color: #121214; */
    div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width:100%;
        max-width: 800px
        
        
    }
    img{
        height: 14px;

    }
    button{
            width: 100%;
            height: 32px;
            max-width: 55px;

            font-size: 12px;
            font-weight: 600;
        }
`

export const Header = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 118px;
    border-top: 0.72px solid var(--Grey3)  ;
    border-bottom: 0.72px solid var(--Grey3) ;
    padding: 0 25px;
    margin-top: 72px;
    div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width:100%;
        max-width: 800px
    }

    p{
        font-size: 12px;
        font-weight: 400;
        color: var(--Grey1);
    }
`

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 0 25px;
    box-sizing: border-box;
    
`

export const Main__Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 800px;
    height: 75px;


    h3{
        font-size: 16px;
        font-weight: 600;
        color: var(--Grey0);
    }

    svg{
        cursor: pointer;
    }

    .btnColorDefault{
        fill: var(--Grey3);
        transition: 0.3s;
    }

    .iconColorDefault{
        fill: var(--white);
        transition: 0.3s;
    }

    .btnColorHover{
        fill: var(--Grey2);
    }

    .iconColorHover{
        fill: white;
    }



`


export const Main__Body = styled.div`
display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 800px;
    min-height: 0;
    max-height: 100%;
    background-color: var(--Grey3);
    border-radius: 4px;
    .wrapper{
        min-height: 0;
        max-height: 100%;
         
        
    }
    

`

 