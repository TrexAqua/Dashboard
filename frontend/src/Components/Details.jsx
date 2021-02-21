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
                <h4>Details</h4>
            </header>
            <div className='link-container'>
                <Link className='link' to='/dashboard'>AUTOMATION DASHBOARD</Link>
                <Link className='link' to='/dashboard'>SMOKE TEST</Link>
                <Link className='link' to='/dashboard'>MANUAL TEST</Link>
                <Link className='link' to='/dashboard'>REPORTS</Link>
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
