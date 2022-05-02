import React from 'react'
import { useHistory } from 'react-router-dom'
import api from '../../../services/api/index.js'

import * as yup from "yup"
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'

import * as S from "./style.js"
import Button from "../../Button"

import {regexPassWord, regexOnlyString} from '../../../utils/regex.js'
import { Redirect } from 'react-router-dom'

function FormSignup({auth, setAuth, userInfo, setCourseModule}) {
    const history = useHistory()

    const formSchema = yup.object().shape({
        name: yup.string().required("Nome obrigatório!").matches(regexOnlyString,"Precisa conter apenas letras!"),
        email: yup.string().email("Email inválido!").required("Email obrigatório!"),
        password: yup.string().required("Campo obrigatório!").min(6, "Mínimo 6 digitos!").matches(regexPassWord, "Senha fraca"),
        confirmPassword: yup.string().required("Campo obrigatório!").oneOf([yup.ref("password")], "As senhas não conferem!"),
        course_module: yup.string()
     })
    
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(formSchema)
    })

    const defaultFormSchema= {
        bio: "Lorem ipsum dolor emet",
        contact: "linkedin/in/johndoe"
    }

 
    function onSubmitFunc({name, email, password, course_module}){
        const user = {name, email, password, course_module}
        api.post("/users", {...user,...defaultFormSchema})
        .then(()=>{
            history.push("/")
        })
        .catch((err)=> console.log(err))
    
    }

    console.log(errors)

    if(auth){
        return <Redirect to={`/dashboard/${userInfo.name}`}/>
    }
    return (
        <S.Form onSubmit={handleSubmit(onSubmitFunc)} >
            <header>
                <h1>Crie sua Conta</h1>
                <h2>Rapido e grátis, vamos nessa</h2>
            </header>  
            
            <label>Nome</label>
            <input placeholder="Digite aqui seu nome" className={errors.name ? "msgErrorColor" : ""} 
            {...register("name")} />
            <p>{errors.name?.message}</p>

            <label>Email</label>
            <input placeholder="Digite aqui seu email" className={errors.email ? "msgErrorColor" : ""}
            {...register("email")}   />
            <p>{errors.email?.message} </p>

            <label>Senha</label>
            <input placeholder="Digite aqui sua senha" className={errors.password ? "msgErrorColor" : ""}
            {...register("password")}/>
            <p>{errors.password?.message}</p>

            <label>Confirmar Senha</label>
            <input placeholder="Digite novamente sua senha" className={errors.confirmPassword ? "msgErrorColor" : ""}
            {...register("confirmPassword")}/>
            <p>{errors.confirmPassword?.message}</p>

            <label>Selecionar módulo</label>
            <select {...register("course_module")}>
                <option>Primeiro módulo (Introdução ao Frontend)</option>
                <option>Segundo módulo (Frontend Avançado)</option>
                <option>Terceiro módulo (Introdução ao Backend)</option>
                <option>Quarto módulo (Backend Avançado)</option>

            </select>

            <Button type="submit" color="color-primary-Disable">Cadastrar</Button>
        </S.Form>
    )
}

export default FormSignup;