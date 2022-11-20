import styled from "styled-components";
import HeaderComponet from "../../components/Header/HeaderComponet";
import { useState } from "react";
import { postNewExerciseGymGoersAPI } from "../../services/PostNewExerciseGymGoersAPI";
import { useParams, useNavigate } from "react-router-dom";
import DropdownExercise from "../../components/personal/DropdownExercise";
import DropdownProgram from "../../components/personal/DropdownProgrm";

export default function NewExercise({opa}){
    const params = useParams();
    const GymGoersId = params.userId
    const navigete = useNavigate()
    
    const [ nRepetitions, setNRepetitions ] = useState('')
    const [ nSeries, setNSeries ] = useState('')
    const [ carga, setCarga ] = useState('')
    const [ comments, setComments ] = useState('')
    const [ program, setProgram ] = useState('')
    const [ pause, setPause ] = useState('')
    const [ ExercisesCategoryId, setExercisesCategoryId ] = useState()

    async function postExercise(event){
        event.preventDefault();
        const data = {
            carga,
            nRepetitions,
            ExercisesCategoryId,
            nSeries,
            comments,
            GymGoersId,
            program,
            break:pause,
        }
        await postNewExerciseGymGoersAPI(data)
        navigete(`/userPageForPersonal/${GymGoersId}`)
    }
    return(
        <Container>
            <HeaderComponet/>
            <Form onSubmit={postExercise}>
                <Dropdown>
                    <DropdownExercise setExercisesCategoryId={setExercisesCategoryId}/>
                    <DropdownProgram setProgram={setProgram}/>
                </Dropdown>

                <input type="number" placeholder="Número de repetições" value={nRepetitions} onChange={(e) => setNRepetitions(e.target.value)}/>
                <input type="number" placeholder="Número de séries"value={nSeries} onChange={(e) => setNSeries(e.target.value)}/>
                <input type="number" placeholder="Carga"value={carga} onChange={(e) => setCarga(e.target.value)}/>
                <input type="number" placeholder="Pausa (em segundos)"value={pause} onChange={(e) => setPause(e.target.value)}/>
                <input type="text" placeholder="Observações e comentários"value={comments} onChange={(e) => setComments(e.target.value)}/>

                <button type="submit"> Cadastrar exercicio </button>
            </Form>
        </Container>
    )
    
}

const Container = styled.div`
margin-top: 120px;
.MI{
    width: 80px;
    height: 200px;
    background-color: red;
}
`;
const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;

    input{
        height: 40px;
        width: 50%;
        margin-top: 16px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    button{
           margin: 16px;
           border-radius: 10px;
           width: 200px;
           height: 30px;
           background-color: #FFFFFF;

    }
`;

const Dropdown = styled.div`
    display: flex;
    @media (max-width: 680px) {
        flex-direction: column;
    }
`;