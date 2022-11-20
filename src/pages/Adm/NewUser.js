import styled from "styled-components";
import HeaderComponet from "../../components/Header/HeaderComponet";
import { useParams } from 'react-router-dom';
import { useState } from "react";
import { PostNewUserAPI } from "../../services/PostNewUserAPI";
import { useNavigate } from "react-router-dom";

export default function NewUser(){
    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [photo, setPhoto] = useState('')

    const { typeUser } = useParams();

    async function createUser(e){
        e.preventDefault()

        const data = {
            name,
            email,
            photo,
            typeUser
        }
        if (await PostNewUserAPI(data)){
            navigate('/Adm')
        }
    }
    return(
        <Container>
            <HeaderComponet/>
                <h3>{`Quais os dados do ${typeUser} a ser cadastrado.`}</h3>
                <Forms onSubmit={createUser}>
                    <input type="text" placeholder="name" value={name} required  onChange={(e)=>setName(e.target.value)}/>
                    <input type="email" placeholder="email" value={email} required onChange={(e)=>setEmail(e.target.value)}/>
                    <input type="text" placeholder="photo" value={photo} required onChange={(e)=>setPhoto(e.target.value)}/>

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