import React from 'react';
import * as S from "./style.js"

import FormLogin from "../../components/Form/FormLogin"
import kenzieHubLogo from "../../assets/kenzieHubLogo.svg"

function Login({setAuth, setCourseModule}) {
    return (
        <S.Container>
            <S.Header>
                <img src={kenzieHubLogo}></img>
            </S.Header>
            
            <S.Content>
                <FormLogin setAuth={setAuth} setCourseModule={setCourseModule}/>
            </S.Content>
        </S.Container>
    )
}

export default Login;
