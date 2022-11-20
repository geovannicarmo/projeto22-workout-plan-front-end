import Table from 'react-bootstrap/Table';
import styled from 'styled-components';
import { BiCommentDetail } from 'react-icons/bi';
import { useState } from 'react';
import SeeComments from './seeComments';

function ExerciseList({arrayExercice}) {
  const [showComments, setShowComments] = useState(false)
  const [comment, setComment] = useState("")

  return (
    <Container>
    <Table sTriped bordered hover variant="dark">
      <thead>
        <tr className='cTr'>
          <th className='cTh'>Exercicio</th> 
          <th className='cTh'>Carga</th>
          <th className='cTh'>Rpt</th>
          <th className='cTh'>Series</th>
          <th className='cTh'>Pausa</th>
        </tr>
      </thead>
      <tbody>
          {
            arrayExercice.map((value) => 
              <tr className='cTr'>
                <td className='cDt'>{value.category.label}</td>
                <td className='cDt'>{value.carga}</td>
                <td className='cDt'>{value.nRepetitions}</td>
                <td className='cDt'>{value.nSeries}</td>
                <td className='cDt'>{value.break}''</td>
                <Icons>
                  <BiCommentDetail onClick={async() => {
                    setShowComments(true)
                    setComment(value.comments)
                  }
                    }/>
                </Icons>
              </tr>)
          }
      </tbody>
    </Table>
    {
      showComments
      ?
      <SeeComments setShowComments={setShowComments} comment={comment}/>
      :
      <></>
    }
</Container>
  );
}

export default ExerciseList;

const Container = styled.div`
table{
  width: 100%;
}

.cTh{
 margin: 50px;
 border-style: solid;
 width: 22%;
 font-size: 40px;
 @media (max-width: 700px) {
    font-size: 25px;
 }
}

.cDt{
 border-style: solid;
 font-size: 40px;
}
`;  

const Icons = styled.div`
display: flex;
font-size: 25px;
`;  