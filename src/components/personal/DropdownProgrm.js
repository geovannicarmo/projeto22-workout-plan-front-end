import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Dropdown from 'react-bootstrap/Dropdown';

export default function DropdownProgram({setProgram}) {
    const [programType, setProgramType] = useState('Programa')
    const arrayPrograns = ['A', 'B', 'C']

    return (
        <Dropdown>
            <Dropdown.Toggle variant="">
                {programType}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {
                    arrayPrograns.map((value) =>{return(
                        <Dropdown.Item href="#" onClick={() => 
                            {
                                setProgram(value)
                                setProgramType(value)
                            }
                        }>
                        {value}
                        </Dropdown.Item>
                    )})
                }
            </Dropdown.Menu>
        </Dropdown>
    );
}
