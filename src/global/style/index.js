import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    /* Inicio reset */
      /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
    */
    *{
        font-family: 'Inter', sans-serif;
    }
  
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 1rem;
        vertical-align: baseline;
        box-sizing: border-box;
        
        font-size: 1rem;
       
        text-decoration: none;
        
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        background-color: #121214;
        line-height: 1;
        
        
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    input{
        box-sizing: border-box;
        
         
    }

    button{
        cursor: pointer;
         
    }


    /* Fim reset */

    :root{
        /* Primary Palette */
        --Color-Primary: #FF577F;
        --Color-Primary-Focus: #FF427F;
        --Color-Primary-Negative: #59323F;

        /* Grey Scale Palette */
        --white: #ffffff;
        --black: #00000040;
        --Grey4: #121214;
        --Grey3: #212529;
        --Grey2: #343B41;
        --Grey1: #868E96;
        --Grey0: #F8F9FA;
        /* Feedback Palette */
        --Sucess: #3FE864;
        --Negative: #E83F5B
       

    }



`

export default GlobalStyle