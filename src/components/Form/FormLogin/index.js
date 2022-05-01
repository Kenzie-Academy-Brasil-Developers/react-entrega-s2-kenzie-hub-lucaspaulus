import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

import * as yup from "yup"
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'

import * as S from "./style.js"
import Button from "../../Button"

import {FaEye} from "react-icons/fa"
import {FaEyeSlash} from "react-icons/fa"

import { Link } from 'react-router-dom'
import handleNav from '../../../utils/handleNav.js'
import toggleEye from "../../../utils/toggleEye.js"
import { unstable_renderSubtreeIntoContainer } from 'react-dom'

function FormLogin({setAuth, setCourseModule}) {
    const history = useHistory()
    const [eye, setEye] = useState(<FaEye/>)
    
    const formSchema = yup.object().shape({
        email: yup.string().email("Email inválido").required("Email é obrigatório"),
        password: yup.string().required("Senha é obrigatório").min(6, "Mínimo 6 digitos!")

    })

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(formSchema)
    })

    function onSubmitFunc(data){

        axios
        .post("https://kenziehub.herokuapp.com/sessions", data)
        .then((response)=>{
            
            //window.localStorage.clear()
            window.localStorage.setItem("authToken", response.data.token)

            setAuth(true)
            handleNav(history,`/dashboard/${response.data.user.name}`)
           
            setTimeout(()=> setCourseModule(response.data.user.course_module), 100)
         
        })

        .catch((err)=>console.log(err.response.data))
        
    }


    console.log(errors)
    
    return (
        <S.Form onSubmit={handleSubmit(onSubmitFunc)}>      
            <header>
                <h1>Login</h1>
            </header>

            <label>Email</label>
            <input value="LIFEISGOOD@gmail.com" className={errors.email ? "msgErrorColor" : ""} 
            placeholder="Digite aqui seu Email" {...register("email")}/>
            <p>{errors.email?.message}</p>
          
            <label>Senha</label>
            <S.ContainerPassword>
                <input value="LIFEisGOOD@1" className={errors.password ? "msgErrorColor" : ""} 
                type={eye.type.name === "FaEye" ? "password" : "text"} 
                placeholder="Digite aqui sua senha" {...register("password")}/>
              
                <div onClick={()=>toggleEye(eye, setEye, <FaEye/>, <FaEyeSlash/>)}>{eye}</div>
            </S.ContainerPassword>
            <p>{errors.password?.message}</p>

            <Button type="submit" color="color-primary">Entrar</Button>
            <Link to="/signup">Ainda não possui uma conta?</Link>
            <Button onClick={()=> handleNav(history, "/signup")} color="grey1">Cadastra-se</Button>
            
        </S.Form>
    )
}

export default FormLogin;
