import { useParams } from 'react-router-dom';
import HeaderComponet from '../../components/Header/HeaderComponet';
import styled from 'styled-components'
import { useEffect, useState } from 'react';
import getGymGoersDataAPI from '../../services/GetGymGoersDataAPI'
import ExerciseList from './exercicesTable'; 
import { CgPlayListAdd } from 'react-icons/cg';
import { useNavigate } from 'react-router-dom';

export default function UserPageForPersonal(){

    const [gymGoerData, setGymGoerData] = useState(null)
    const [renderExerciseList, setRenderExerciseList] = useState(false)

    const params = useParams();
    const userId = params.userId
    const navigate = useNavigate()

    async function GetAExerciseGymGoers(){
        setGymGoerData(await getGymGoersDataAPI(userId))
        console.log(gymGoerData)
    }
    useEffect(() => {
        GetAExerciseGymGoers()
    },[renderExerciseList])
    return(
        <>
            <Container>
                <HeaderComponet/>
                <GymGoers>
                    {
                        gymGoerData
                        ?
                        <>
                            <ProfileGymGoers>
                                <img src={gymGoerData.photo} alt='hotel 1' />
                                <h1>Ficha de {gymGoerData.name}</h1>
                            </ProfileGymGoers>
                            <Program>
                                <h3>Programa: </h3> <h5> A</h5>
                            </Program>
                            <ExerciseList arrayExercice = {gymGoerData.Exercises.filter(value=>value.program==='A')} setRenderExerciseList = {setRenderExerciseList} renderExerciseList={renderExerciseList}/>

                            <Program>
                                <h3>Programa: </h3> <h5> B</h5>
                            </Program>
                            <ExerciseList arrayExercice = {gymGoerData.Exercises.filter(value=>value.program==='B')} setRenderExerciseList = {setRenderExerciseList} renderExerciseList={renderExerciseList}/>

                            <Program>
                                <h3>Programa: </h3> <h5> C</h5>
                            </Program>
                            <ExerciseList arrayExercice = {gymGoerData.Exercises.filter(value=>value.program==='C')} setRenderExerciseList = {setRenderExerciseList} renderExerciseList={renderExerciseList}/>
                        </>
                        :
                        <></>
                    } 
                    <ButtonNewExercise onClick={()=> navigate(`/newExercise/${userId}`)}>
                        <CgPlayListAdd/>
                        <h3>Novo exercicio</h3>
                    </ButtonNewExercise>                     
                </GymGoers>
            </Container>
        </>
    )
};

const GymGoers = styled.div`
`;

const Container = styled.div`
  background-color: #F4A460;
  width: 100%;
  height: 100%;
  margin-bottom: 50px;
  `;

const ProfileGymGoers = styled.div`

    align-items: center;
    margin-left: 20px;
    display: flex;
    img{
        border-radius: 20%;
        width: 50px;
        height: 50px;
        margin-right: 20px;
    }
`;

const ButtonNewExercise = styled.div`
    display: flex;
    align-items: center;
    margin-left: 30px;
    font-size: 22px;
    border-radius:20px;
    border-style: inherit;
    background-color: gray;
    width: 320px;
    justify-content: center;
    font-size: 30px;
    margin: 46px;

    h3{
        margin-left: 15px;
        font-size: 20px;
    }
`;

const Program = styled.div`
    margin-top: 70px;
    width: 160px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FFDAB9	;
    margin-left: 10px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    h5{
        background-color: #FFE4B5;
        border-radius: 100%;
        margin-left: 5px;
        width: 26px;
        height: 26px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;