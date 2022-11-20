import styled from "styled-components"

export default function SeeComments({setShowComments, comment}){

    return(    
    <Container onClick={()=>{setShowComments(false)}}>
        <CommentBalloon>
            <p>{ comment }</p>
        </CommentBalloon>
    </Container>
    )
}

const Container = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 2;
    top: 0;
    left: 0;
    `;

const CommentBalloon = styled.div`
    position: fixed;
    left: 25%;
    top: 25%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #DCDCDC	;
    width: 300px;
    height: 200px;
    border-radius: 100px;
`;


