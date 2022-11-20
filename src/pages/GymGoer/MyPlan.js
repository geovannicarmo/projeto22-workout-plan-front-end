import ExerciseList from "../../components/GymGoer/execicesTable";
import { GetMyExercisesAPI } from "../../services/GetMyExercisesAPI";
import { useEffect, useState } from "react";
import HeaderComponet from "../../components/Header/HeaderComponet";
import styled from "styled-components";
import Program from "../../components/GymGoer/Program";

export default function MyPlan(){

    const [arrayExercise, setArrayExercise] = useState([])
    // const [renderExerciseList, setRenderExerciseList] = useState(false)?
    const [programSelect, setProgramSelect] = useState('A')

    async function GetAExerciseGymGoers(){
        setArrayExercise(await GetMyExercisesAPI())
    }
    useEffect(() => {
        GetAExerciseGymGoers()
    },[])

    return(
        <>
            <HeaderComponet/>
            <Container>
                <Prograns>
                    {
                        ['A', 'B', 'C'].map((value, index)=><Program setProgramSelect={setProgramSelect} programSelect={programSelect} valueProgram={value} key={index}/>)
                    }
                </Prograns>
                {
                    arrayExercise && arrayExercise.length>0
                    ?
                    <ExerciseList arrayExercice={arrayExercise.filter(value=>value.program===programSelect)}/>
                    :
                    <>
                        <h4>Não há exercícios cadastrados.</h4>
                    </>
                }
            </Container>
        </>
    )
}

const Prograns = styled.div`
    margin-top: 70px;
    height: 60px;
    display: flex;
    align-items: center;
    margin-bottom: 40px;
    `;

const Container = styled.div`
    margin-left: 1%;
    display: flex;
    flex-direction: column;
    width: 98%;
`;