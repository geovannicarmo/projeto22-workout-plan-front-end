import styled from "styled-components";

export default function Program({setProgramSelect, valueProgram, programSelect}){

    let color = '#008B8B'
    if(valueProgram===programSelect){
        color='#40E0D0'
    }
    return(
        <Container onClick={()=>setProgramSelect(valueProgram)} color={color}>
            <h4>Programa: </h4> <h5>{valueProgram}</h5>
        </Container>
)
}

const Container = styled.div`
    margin-top: 70px;
    width: 21%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.color};
    margin-left: 10px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    padding: 5px;
    h5{
        background-color: #B0E0E6;
        border-radius: 100%;
        margin-left: 5px;
        width: 46px;
        height: 46px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 40px;
    }
    h4{
        font-size: 40px;
    }
    @media (max-width: 1000px) {
        width: 31%;
        h4{
            font-size: 20px;
        }
        h5{
            font-size: 20px;
            width: 36px;
            height: 36px;
        }
    }
    @media (max-width: 700px) {
        width: 51%;
        h4{
            font-size: 18px;
        }
        h5{
            font-size: 18px;
            width: 18px;
            height: 18px;
        }
    }
`;