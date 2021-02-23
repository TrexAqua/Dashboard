import React from 'react'
import { Button } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import '../Styles/Details.css'

const Details = ({history}) => {
    const clickHandler = () => {
        history.push('/')
    }

    return (
        <div>
            <header>
                <h4>Main Menu</h4>
            </header>
            <div style={{display: 'flex', justifyContent: 'space-evenly'}} className='link-container'>
                <Link className='link' to='/dashboard'>AUTOMATION DASHBOARD</Link>
                <Link className='link' to='/catalog'>SMOKE TEST</Link>
                <Link className='link' to='/catalog'>MANUAL TEST</Link>
                <Link className='link' to='/catalog'>REPORTS</Link>
            </div>
            <ul>
                <li>Test Environment</li>
                <li>Stage Environment</li>
                <li>Production Environment</li>
            </ul>
            <div className='contain'>
                <Button onClick={clickHandler}>Back To MainMenu</Button>
            </div>
        </div>
    )
}

export default Details
