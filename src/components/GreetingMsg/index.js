import React from 'react';
import * as S from "./style.js"
function GretingMsg({param}) {
    return (
         <S.H1>Olá, {param.userNameUrl}</S.H1>
    )
}

export default GretingMsg;
