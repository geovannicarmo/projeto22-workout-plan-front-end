import styled from "styled-components"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import UpdatePass from "../../pages/Auth/UpdatePass";

export default function Logout({setHeaderMenu}){


    const [showUpdatePass, setShowUpdatePass] = useState(true)
    
    const navigate = useNavigate();
    function exit(){
        localStorage.removeItem('name');
        localStorage.removeItem('photo');
        localStorage.removeItem('token');

        navigate('/')
    }
    async function changePass(){
        navigate('/novaSenha')
    }

    return(
        <Container onClick={()=>setHeaderMenu(false)}>
            {
                showUpdatePass
                ?
                <></>
                :
                <UpdatePass setShowUpdatePass={setShowUpdatePass}/>
            }
            <Menu>
                <h4 onClick={exit}>Sair</h4>
                <h4 onClick={changePass}>Trocar Senha</h4>
            </Menu>
        </Container>
        )
}

const Container = styled.div`
    background-color: rgba(50, 40, 30, 0);
    position: fixed;
    width: 200%;
    height: 200%;
    z-index: 1;
`;

const Menu = styled.div`
    width: 180px;
    height: 50px;
    position: fixed;
    background-color: #FF8C00;
    right: 0;
    top: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 8px;
`;