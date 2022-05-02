import styled from "styled-components"

export const Button = styled.button`
    width: 100%;
    height: 40px;
    border-radius: 4px;
    transition: 0.2ms;
    background-color: ${(props)=> 
        props.color === "color-primary" ? "#FF577F" 
        : 
        props.color === "grey1" ? "#868E96"
        :
        props.color === "color-primary-Disable" ? "#59323F"
        :
        "#212529"
    
    };



    border: 1.2182px solid transparent ;
    color: ${(props)=> !props.color ? " #F8F9FA" : "#ffffff"};
    transition: 0.3s;

    &:hover{
        background-color: ${(props)=> 
            props.color === "color-primary"? "#FF427F" 
            : 
            props.color === "grey1"? "#343B41"
            :
            props.color === "color-primary-Disable" ? ""
            :
            "#343B41"
            

           
        
        };

        
    }

    

`