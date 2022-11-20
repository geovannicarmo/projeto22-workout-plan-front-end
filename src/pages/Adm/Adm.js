import HeaderComponet from "../../components/Header/HeaderComponet"
import NewElement from "../../components/Adm/buttonNewElement"
import styled from "styled-components"

const arrayButtons = ['aluno', 'personal', 'exercício']
export default function AdmInit(){
    return(
        <Container>
        <HeaderComponet/>
            <Buttons>
                {
                    arrayButtons.map((value, index)=>{
                        return(
                            <NewElement element={value} key={index}/>
                            )
                        })
                    }
            </Buttons>
         </Container>

    )
}

const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 30px;

`;

const Container = styled.div`
    height: 100%;
    margin-top: 120px;
`;
