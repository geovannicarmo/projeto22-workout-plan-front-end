import styled from "styled-components"
import { useNavigate } from "react-router-dom";
import HeaderComponet from "../../components/Header/HeaderComponet";
import { useState } from "react";
import { updatePassAPI } from "../../services/UpdatePassWordAPI";

export default function UpdatePass(){
    const navigate = useNavigate()

    const [passWord, setPassWord] = useState('')
    const [passWordConfirm, setPassWordConfirm] = useState('')
    
    async function NewPass(e){
        e.preventDefault()

        const dataPass = {
            passWord,
            passWordConfirm
        }
        console.log(dataPass)
        if (await updatePassAPI(dataPass)){
            navigate('/')
        }
    }

    return(
        <>
            <HeaderComponet/>
            <Container >
                    <h3>Cadastre a nova senha</h3>
                    <Forms onSubmit={NewPass}>
                        <input type="password" placeholder="Senha" required value={passWord} onChange={(e)=>setPassWord(e.target.value)} />
                        <input type="password" placeholder="Confirme a senha" required value={passWordConfirm} onChange={(e)=>setPassWordConfirm(e.target.value)} />

                        <button onClick={NewPass}> Atualizar senha</button>
                    </Forms>
            </Container>
        </>
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

const Forms = styled.div`
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