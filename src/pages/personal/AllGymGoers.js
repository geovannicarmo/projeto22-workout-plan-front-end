import { useState, useEffect } from "react"
import { GetAllGymGoersAPI } from "../../services/GetAllGymGoersAPI"
import EachGymGors from "../../components/personal/EachGymGors"
import styled from 'styled-components'
import HeaderComponet from "../../components/Header/HeaderComponet"

export default function AllGymGoers(){
    const [arrayUser, setArrayUser] = useState(null)
    
    async function fillArrayUser(){
        setArrayUser(await GetAllGymGoersAPI())
    }

    useEffect(() => {
        fillArrayUser()
    },[])
    return(
        <Container>
            <HeaderComponet/>
            <AllGymGoersStyled>
        {
            !arrayUser
            ?
            <></>
            :
            arrayUser.map((data, index) => <EachGymGors data={data} key={index}/>)
        }
            </AllGymGoersStyled>
        </Container>
    )
}

const AllGymGoersStyled = styled.div`
display: flex;
flex-wrap: wrap;
margin-top: 20px;
`;

const Container = styled.div`
  background-color: #F4A460;
  width: 100%;
  height: 100%;
  margin-top: 120px;
`;
