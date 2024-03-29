import React, { useState } from 'react';
import api from '../../../services/api/index.js';

import * as yup from "yup"
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'

import { Button } from '../../Button/style.js';
import * as S from "./style.js"

function ModalAddTech({showModal, setShowModal}) {
 
    const token = JSON.parse(localStorage.getItem("@KenzieHub-m3:token"))
   
 
    const formSchema = yup.object().shape({
        title: yup.string().required(),
        status: yup.string().required()

    })

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(formSchema)
    })

    function onSubmitFunc(data){
   
        api.post("/users/techs", data,{
            headers:{
                Authorization: `Bearer ${token}`
            }

        })   
    }
    return (
        <S.Container showModal={showModal}>
            <S.Header>
                <p>Cadastrar Tecnologia</p>
                <svg onClick={()=>setShowModal("")} width="11" height="13" viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.856 10.816C9.99467 10.9653 10.064 11.1307 10.064 11.312C10.064 11.5147 9.984 11.696 9.824 11.856C9.664 12.0053 9.48267 12.08 9.28 12.08C9.056 12.08 8.864 11.984 8.704 11.792L5.232 7.424L1.744 11.792C1.584 11.984 1.39733 12.08 1.184 12.08C0.981333 12.08 0.8 12.0053 0.64 11.856C0.48 11.696 0.4 11.5147 0.4 11.312C0.4 11.1413 0.464 10.976 0.592 10.816L4.272 6.256L0.768 1.904C0.64 1.76533 0.576 1.6 0.576 1.408C0.576 1.20533 0.650667 1.02933 0.8 0.879999C0.96 0.719999 1.14133 0.639999 1.344 0.639999C1.568 0.639999 1.76 0.735999 1.92 0.927999L5.232 5.104L8.544 0.927999C8.69333 0.735999 8.88533 0.639999 9.12 0.639999C9.32267 0.639999 9.504 0.719999 9.664 0.879999C9.824 1.02933 9.904 1.20533 9.904 1.408C9.904 1.58933 9.83467 1.75467 9.696 1.904L6.192 6.256L9.856 10.816Z" fill="#868E96"/>
                </svg>

               
            </S.Header>

            <S.Body>
                <form onSubmit={handleSubmit(onSubmitFunc)}>
                    <label>Nome</label>
                    <input {...register("title")}/>

                    <label>Selecionar status</label>
                    <select {...register("status")}>
                        <option>Iniciante</option>
                        <option>Intermediário</option>
                        <option>Avançado</option>

                    </select>

                    <Button color='color-primary'>Cadastrar Tecnologia</Button>
                    

                </form>
            </S.Body>
            
        </S.Container>
    )
}

export default ModalAddTech;
