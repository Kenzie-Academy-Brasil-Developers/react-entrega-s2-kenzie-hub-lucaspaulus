import React from 'react';
import * as S from "./style.js"

import FormLogin from "../../components/Form/FormLogin"
import kenzieHubLogo from "../../assets/kenzieHubLogo.svg"

function Login({auth, setAuth, userInfo, setCourseModule}) {
    return (
        <S.Container>
            <S.Header>
                <img src={kenzieHubLogo}></img>
            </S.Header>
            
            <S.Content>
                <FormLogin auth={auth} setAuth={setAuth} 
                userInfo={userInfo} setCourseModule={setCourseModule}/>
            </S.Content>
        </S.Container>
    )
}

export default Login;
