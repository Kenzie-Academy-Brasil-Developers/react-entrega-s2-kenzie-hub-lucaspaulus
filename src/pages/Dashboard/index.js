import React from 'react';
import { useParams } from 'react-router-dom';
import * as S from "./style.js"

import GretingMsg from '../../components/GreetingMsg/index.js';

function Dashboard({courseModule}) {
    const param = useParams()

    return (
        <S.Container>
            <S.Navbar>

            </S.Navbar>

            <S.Header>
                <GretingMsg param={param}/>
                <p>{courseModule}</p>
            </S.Header>

            <S.Main>
                
            </S.Main>

        </S.Container>
    )
}

export default Dashboard;
