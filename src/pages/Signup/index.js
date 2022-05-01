import React from 'react';
import { useHistory } from 'react-router-dom';

import handleNav from '../../utils/handleNav.js';

import * as S from "./style.js"
import kenzieHubLogo from "../../assets/kenzieHubLogo.svg"
import Button from "../../components/Button/"
import FormSignup from '../../components/Form/FormSignup/index.js';


function Signup({setAuth, setCourseModule}) {
    const history = useHistory()

 

    return (
        <S.Container>
            <S.Header>
                <img src={kenzieHubLogo}/>
                <Button onClick={()=> handleNav(history, "/")}>Voltar</Button>
            </S.Header>
            
            <S.Content>
                <FormSignup setAuth={setAuth} setCourseModule={setCourseModule}/>
            </S.Content>
            
            
        </S.Container>
    )
}

export default Signup;
