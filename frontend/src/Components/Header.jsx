import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../Styles/Header.css'
const Header = ({title}) => {
    return (
        <div className='header'>
        <Container className='container'>
            <h1>Welcome To {title}</h1>
            <Link className='link' variant='light' to='/'>Go Back?</Link>
            </Container>
        </div>
    )
}

export default Header
