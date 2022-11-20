import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Dropdown from 'react-bootstrap/Dropdown';
import { GetExerciseCategory } from '../../services/GetExerciseCategory';

export default function DropdownExercise({setExercisesCategoryId}) {
    const [exerciseType, setExerciseType] = useState('Exercicio')
    const [arrayExerciseType, setArrayExerciseType] = useState(null)

   async function getExerciseType(){
        setArrayExerciseType(await GetExerciseCategory())
    }
    
    useEffect(()=>{
        getExerciseType()
    },[])
    return (
        <Dropdown>
            <Dropdown.Toggle variant="">
                {exerciseType}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {
                    !arrayExerciseType
                    ?
                    <></>
                    :
                    arrayExerciseType.map((value) =>{return(
                        <Dropdown.Item href="#" onClick={() => 
                            {
                                    setExercisesCategoryId(value.id)
                                    setExerciseType(value.label)
                            }
                        }>
                        {value.label}
                        </Dropdown.Item>
                    )})
                }
            </Dropdown.Menu>
        </Dropdown>
    );
}
