import styled from "styled-components";
import HeaderComponet from "../../components/Header/HeaderComponet";
import { useState } from "react";
import { PostNewExeciseTypeAPI } from "../../services/PostNewExeciseTypeAPI";
import { useNavigate } from "react-router-dom";

export default function NewExerciseType(){
    const [exercise, setExercise] = useState('')
    const navigate = useNavigate()

    async function createExercise(e){
        e.preventDefault()
        const data = {
            label: exercise
        }
        if (await PostNewExeciseTypeAPI(data)){
            navigate('/Adm')
        }
    }
    return(
        <Container>
            <HeaderComponet/>
                <h3>Qual o nome do exercício as ser cadastrado.</h3>
                <Forms onSubmit={createExercise}>
                    <input type="text" placeholder="Exercício" required value={exercise} onChange={(e)=>setExercise(e.target.value)} />

                    <button>Cadastrar</button>
                </Forms>
        </Container>
    )
}

const Container = styled.div`
    height: 100%;
    margin-top: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Forms = styled.form`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    input{
        margin: 15px;
        border-radius: 10px;
    }
    button{
        border-radius: 10px;
        background-color: #FFFFFF;
    }
`;