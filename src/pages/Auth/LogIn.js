import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postLoginAPI } from "../../services/PostLoginAPI";

export default function LogIn(){

    const [email, setemail] = useState('')
    const [password, setPassword] = useState('')
    const [typeUser, setTypeUser] = useState('Aluno')

    const navigate = useNavigate();

    async function logInto(e){
        e.preventDefault()
        const dataLogIn = {
            email,
            password,
            typeUser
        }
        const resLogin = await postLoginAPI(dataLogIn);
        if(resLogin){
            localStorage.setItem('token', resLogin.token)
            localStorage.setItem('name', resLogin.name)
            localStorage.setItem('photo', resLogin.photo)
            navigate(`${typeUser}`)
        }

    }
    return(
        <Container>
            <SideText>
                <h2>Ta la o corpo no chão</h2>
            </SideText>
            <Form onSubmit={logInto}>
                <input type="email" placeholder="email" value={email} required onChange={e => setemail(e.target.value)}/>

                <input type="password" placeholder="password" value={password} required onChange={e => setPassword(e.target.value)}/>

                <InputRadio>
                    <input type="radio" id="Aluno" name="fav_language" value="Aluno" defaultChecked onClick={()=>setTypeUser('Aluno')}/>
                    <label htmlFor="Aluno">Aluno</label>
                    <input type="radio" id="Personal" name="fav_language" value="Personal" onClick={()=>setTypeUser('Personal')}/>
                    <label htmlFor="Personal">Personal</label>
                    <input type="radio" id="Adm" name="fav_language" value="Adm" onClick={()=>setTypeUser('Adm')}/>
                    <label htmlFor="Adm">Adm</label>
                </InputRadio>
                    

                <button>Entrar</button>
            </Form>

        </Container>
    )
}

const Form = styled.form`
    width: 100%;
    margin-top: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    input{
        margin-bottom: 15px;
        border-radius: 5px;
        width: 80%;
        height: 60px;
        font-size: 30px;
        background-color: #FFFFFF;
    }
    button{
        border-radius: 10px;
        width: 80%;
        height: 40px;
        font-size: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #FFFFFF;
    }

    @media (max-width: 680px) {
        margin-top: 40px;
    }
    `;

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    button{
        width: 200px;
        text-decoration: none;
        padding-left: 200px;
        padding-right: 200px;
        height: 50px;
        @media (max-width: 680px) {
            width: 100px;
            padding-left: 100px;
            padding-right: 100px;
        }
    }
    @media (max-width: 680px) {
        flex-direction: column;
    }
    `;

const InputRadio = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;

    input{
        margin-left: 35px;
        margin-top: 12px;
        margin-right: 10px;
        width: 20px;
        @media (max-width: 700px) {
            margin-left: 25px;
            margin-right: 5px;
        }
    }
    label{
        margin-right: 20px;
        font-size: 34px;
        @media (max-width: 700px) {
            font-size: 24px;
            margin-left: 0px;
            margin-right: 0px;
        }
    }
`;

const SideText = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    h2{
        margin: 20px;
        margin-top: 20%;
        font-size: 60px;
    }

    @media (max-width: 680px) {
        margin-top: 0px;
        height: 50px;
        h2{
            margin-left: 20%;
            font-size: 30px;
            margin: 16px;
        }
    }
`;