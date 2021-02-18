import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Home.css'
const Home = () => {
    return (
        <div>
            <h1>Home Screen</h1>
                <div className='button-container'>
                    <Link className='link' to='/dashboard'>Dashboard</Link>
                    <Link className='link' to='/catalog'>Job Catalog</Link>
                    <Link className='link' to='/details'>Detail Report</Link>
                </div>
            
        </div>
    )
}

export default Home
