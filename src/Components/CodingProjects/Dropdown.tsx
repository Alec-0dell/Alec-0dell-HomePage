import { useState } from 'react';
import Arrow from './WhiteArrow.png'
import "./CodingProjects.css"

function Dropdown( props ) {
    const [ display, setDisplay ] = useState( 'none' )
    const [ arrowDirection, setArrowDirection] = useState(false)

    function handleClick() {
        if ( display === 'none' ) {
            setDisplay( 'block' )
            setArrowDirection(true)
        } else {
            setDisplay( 'none' )
            setArrowDirection(false)
        }
    }

    return (
        <div className='Coding-Project-Container'> 
            <div onClick={handleClick} className='Coding-Project-Item-Container'>
                <p className="Coding-Link-Dscrp" >{props.name}</p>
                <img src={Arrow} className="Coding-Icon" style={arrowDirection? { rotate: "180deg"  } : {height: "30px", width: "30px"}}/>
            </div>   
            
            <div style={{display:display}}>
                { props.children }
            </div>
        </div>
    )

}

export { Dropdown }