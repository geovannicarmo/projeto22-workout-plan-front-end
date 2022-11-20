import styled from 'styled-components'
import { BiChevronDown } from "react-icons/bi";
import { useState } from 'react';
import Logout from './LogOut';


export default function HeaderComponet(){

    const [headerMenu, setHeaderMenu] = useState(false);
    const name = localStorage.getItem('name')
    const photo = localStorage.getItem('photo')

    return (
        <Container>
            <h1>logo</h1>
            <Profile onClick={()=>setHeaderMenu(true)}>
                <img src={photo} alt='profileImg'/>
                <h3>{name}</h3>
                <BiChevronDown/>
            </Profile>
            {
                headerMenu
                ?
                <Logout setHeaderMenu = {setHeaderMenu}/>
                :
                <></>
            }
        </Container>
    )
}


const Container = styled.div`
    z-index: 1;
    position: fixed;
    width: 100%;
    margin-bottom: 200px;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #FF8C00;
    h1{
        margin-left: 20px;
    }
   `;

const Profile = styled.div`
   display: flex;
   align-items: center;
   flex-direction: column;
   justify-content: space-between;
   margin-left: 12px;
   margin-right: 10px;
   margin-top: 10px;

   img{
    width: 55px;
    height: 45px;
    border-radius: 100%;
   }
   h3{
    margin: 0;
    font-size: 100%;
   }
`;