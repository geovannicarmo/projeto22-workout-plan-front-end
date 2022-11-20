import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

export default function EachGymGors({data}){
    const id = data.id;
    const navigate = useNavigate();

    function goUserPage(){
        navigate(`/userPageForPersonal/${id}`)
    }
    return(
        <EachGymGorsStyled onClick= {goUserPage}>
            <img src={data.photo} alt='alunoFT' />
            <h3>{data.name}</h3>
        </EachGymGorsStyled>
    )
}

const EachGymGorsStyled = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
    align-items: center;
    justify-content: center;

    img{
        width: 50px;
        height: 50px;
        border-radius: 100%;
    }
    h3{
        font-size: 15px;
        margin: 5px;
    }
`;