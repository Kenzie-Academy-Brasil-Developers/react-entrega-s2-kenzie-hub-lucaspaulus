import React, { Children, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


import GretingMsg from '../../components/GreetingMsg/index.js';
import { Redirect } from 'react-router-dom';

import * as S from "./style.js"
import kenzieHubLogo from "../../assets/kenzieHubLogo.svg"
import { Button } from '../../components/Button/style.js';

import api from '../../services/api/index.js';
import ModalAddTech from '../../components/Modal/ModalAddTech/index.js';
import Card from '../../components/Card/index.js';

function Dashboard({ userInfo, auth, setAuth}) {
    const param = useParams()
    const userId = JSON.parse(localStorage.getItem("@KenzieHub-m3:user"))

    const [showModal, setShowModal] = useState("")
 

    const [btnColor, setBtnColor] = useState("")
    const [iconColor, setIcontColor] = useState("")
    
    useEffect(()=>{
        api.get(`/users/b16317d3-2912-4c14-80bc-3484c3b7d510`)
        .then((response)=> setTech(response.data.techs))
    },[])
    const [tech, setTech] = useState()

    
    if(!auth){
        return <Redirect to="/"/>
    }

    function exitDashboard(){
       localStorage.clear()
       setAuth(false)
       return <Redirect to="/"/>
     
    }

    // Adiciona um hover no botao em formato svg
    function hoverBtn(colorbtn,colorIcon){

        setBtnColor(colorbtn)
        setIcontColor(colorIcon)

    }


    console.log(userId)

   

    return (
        <S.Container>

            <ModalAddTech showModal={showModal} setShowModal={setShowModal}/>
            <S.Navbar>
          
                <div>
                    <img src={kenzieHubLogo}></img>
                    <Button onClick={exitDashboard}>Sair</Button>
                    
                </div>
  
                 
            </S.Navbar>
            
            <S.Header>
                <div>
                    <GretingMsg param={param}/>
                    <p>{userInfo.course_module}</p>
                </div>
            </S.Header>

            <S.Main>
                <S.Main__Header>
                    <h3>Tecnologias</h3>

                    <svg onClick={()=>setShowModal("on")} onMouseOver={()=>hoverBtn("btnColorHover","iconColorHover")} 
                    onMouseOut={()=>hoverBtn("btnColorDefault","iconColorDefault")}
                    width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect className={btnColor} x="0.514648" width="32.4853" height="32" rx="4" fill="#212529"/>
                    <path className={iconColor} d="M15.9721 21.5625H18.1055V17.3281H22.4041V15.2266H18.1055V11H15.9721V15.2266H11.6814V17.3281H15.9721V21.5625Z" fill="white"/>
                    </svg>
                </S.Main__Header>

                <S.Main__Body>
                    <div className='wrapper'>
                            {tech && tech.map((tech)=>(
                                <Card key={tech.id} techTitle={tech.title} techStatus={tech.status}></Card>

                            ) 

                            )}
                            
                           
                    </div>

                </S.Main__Body>
            </S.Main>
            
        </S.Container>
    )
}

export default Dashboard;
