import Table from 'react-bootstrap/Table';
import styled from 'styled-components';
import { HiOutlineTrash } from 'react-icons/hi';
import { BiEditAlt } from 'react-icons/bi';
import { deleteExerciseGymGoersAPI } from '../../services/DeleteExerciseGymGoersAPI';

export default function ExerciseList({arrayExercice, setRenderExerciseList, renderExerciseList}) {
  return (
    <Container>
    <Table sTriped bordered hover variant="dark">
      <thead>
        <tr>
          <th class='cTh'>Exercicio</th> 
          <th class='cTh'>Carga</th>
          <th class='cTh'>N°Rpt</th>
          <th class='cTh'>N°Series</th>
          <th class='cTh'>Pausa</th>
        </tr>
      </thead>
          {
            arrayExercice && arrayExercice.length>0
            ?
            <tbody>
              {
            arrayExercice.map((value) => <tr> 
                <td class='cDt'>{value.category.label}</td>
                <td class='cDt'>{value.carga}</td>
                <td class='cDt'>{value.nRepetitions}</td>
                <td class='cDt'>{value.nSeries}</td>
                <td class='cDt'>{value.break}''</td>
                <Icons>
                  <BiEditAlt onClick={() => alert('Esse recurso estará disponivel em breve')}/>
                  <HiOutlineTrash onClick={async() => {
                    await deleteExerciseGymGoersAPI(value.id)
                    setRenderExerciseList(!renderExerciseList)
                  }
                }/>
                </Icons>
              </tr>)
              }
           </tbody>
                :
                <>
                </>
          }
    </Table>
</Container>
  );
}

const Container = styled.div`
table{
  width: 100%;
}

.cTh{
 margin: 50px;
 border-style: solid;
 width: 22%;
 font-size: 30px;
 @media (max-width: 700px) {
    font-size: 20px;
 }
}

.cDt{
 border-style: solid;
 font-size: 20px;
}
`;  

const Icons = styled.div`
display: flex;
font-size: 25px;
`;  