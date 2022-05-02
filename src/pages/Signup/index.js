import React from 'react';
import { useHistory } from 'react-router-dom';

import * as S from "./style.js"
import kenzieHubLogo from "../../assets/kenzieHubLogo.svg"
import Button from "../../components/Button/"
import FormSignup from '../../components/Form/FormSignup/index.js';


function Signup({auth, setAuth, userInfo, setCourseModule}) {
    const history = useHistory()

    return (
        <S.Container>
            <S.Header>
                <img src={kenzieHubLogo}/>
                <Button onClick={()=> history.push("/")}>Voltar</Button>
            </S.Header>
            
            <S.Content>
                <FormSignup auth={auth} setAuth={setAuth} userInfo={userInfo} setCourseModule={setCourseModule}/>
            </S.Content>
            
            
        </S.Container>
    )
}

export default Signup;
