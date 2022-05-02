import React from 'react';
import * as S from "./style.js"
function Card({techTitle, techStatus, ...rest}) {
    return (
        <S.Card {...rest}>
            <h4>
                {techTitle}
            </h4>
            <p>
                {techStatus}
            </p>
        </S.Card>
    )
}

export default Card;
