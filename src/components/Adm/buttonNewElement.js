import styled from "styled-components"
import { useNavigate } from "react-router-dom";

export default function NewElement({element}){
    const navigate = useNavigate()
    function goForm(){
        if(element==='aluno'||element==='personal'){
            navigate(`/novoUsuario/${element}`)
        }
        if(element==='exercício'){
            navigate('/novoExercicio')
        }
    }
    return(
        <Container onClick={goForm}>
            <h1>Novo {element}</h1>
        </Container>
    )
}

const Container = styled.div`
    margin: 20px;
    width: 70%;
    background-color: #FF7F50;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
