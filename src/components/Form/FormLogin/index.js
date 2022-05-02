import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import api  from '../../../services/api/index.js'

import * as yup from "yup"
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'

import * as S from "./style.js"
import Button from "../../Button"

import {FaEye} from "react-icons/fa"
import {FaEyeSlash} from "react-icons/fa"

import { Link } from 'react-router-dom'
import toggleEye from "../../../utils/toggleEye.js"
import { Redirect } from 'react-router-dom'

function FormLogin({auth , setAuth, userInfo, setCourseModule}) {
    const history = useHistory()
    const [userName, setUserName] = useState("")
    const [eye, setEye] = useState(<FaEye/>)
    
    const formSchema = yup.object().shape({
        email: yup.string().email("Email inválido").required("Email é obrigatório"),
        password: yup.string().required("Senha é obrigatório").min(6, "Mínimo 6 digitos!")

    })

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(formSchema)
    })

    function onSubmitFunc(data){
        api.post("/sessions", data)
        .then((response)=>{
            const { token, user } = response.data
            localStorage.setItem("@KenzieHub-m3:token", JSON.stringify(token))
            localStorage.setItem("@KenzieHub-m3:user" , JSON.stringify(user))
            
            setAuth(true)
            history.push(`/dashboard/${user.name}`)

        })


    }

    if(auth){
        return <Redirect to={`/dashboard/${userInfo.name}`}/>
    }

    return (
        <S.Form onSubmit={handleSubmit(onSubmitFunc)}>      
            <header>
                <h1>Login</h1>
            </header>

            <label>Email</label>
            <input  className={errors.email ? "msgErrorColor" : ""} 
            placeholder="Digite aqui seu Email" {...register("email")}/>
            <p>{errors.email?.message}</p>
          
            <label>Senha</label>
            <S.ContainerPassword>
                <input className={errors.password ? "msgErrorColor" : ""} 
                type={eye.type.name === "FaEye" ? "password" : "text"} 
                placeholder="Digite aqui sua senha" {...register("password")}/>
              
                <div onClick={()=>toggleEye(eye, setEye, <FaEye/>, <FaEyeSlash/>)}>{eye}</div>
            </S.ContainerPassword>
            <p>{errors.password?.message}</p>

            <Button type="submit" color="color-primary">Entrar</Button>
            <Link to="/signup">Ainda não possui uma conta?</Link>
            <Button onClick={()=> history.push("/signup")} color="grey1">Cadastra-se</Button>
            
        </S.Form>
    )
}

export default FormLogin;
