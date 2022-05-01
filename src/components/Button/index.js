import React from 'react';
import * as S from "./style.js"
function Button({children, color, ...rest}) {
    return (
        <S.Button color={color} type="button" {...rest} >
            {children}
        </S.Button>
    )
}

export default Button;
