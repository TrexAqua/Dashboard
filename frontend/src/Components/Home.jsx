import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { Button, Form } from 'react-bootstrap'
import '../Styles/Home.css'
const Home = ({history}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()

        if (!email) {
            alert('Please enter your email ')
        } else if(!password){
            alert('Please enter your Password')
        } else {
            history.push('/details')
        }
        
        
    }

    return (
        <div>
            <h1>Team - Tools for Automation and Management</h1>
            <div className='login-container'>
                <h2>Login Screen</h2>
                <Form className='form-container'>
                    <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={e => setEmail(e.target.value)} type="email" placeholder="Enter email" />
                </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" />
                </Form.Group>
                <Button onClick={submitHandler} variant="primary" type="submit">
                            Submit
                </Button>
                </Form>
            </div>

            <div className='button-container'>
                <h2>Features...</h2>
                    <Link className='link' to='/dashboard'>Dashboard Latest Run Statisticts All The Automation run</Link>
                    <Link className='link' to='/catalog'>All Reports Based ont the Application</Link>
                    <Link className='link' to='/details'>All regression Test Items</Link>
                </div>
            
        </div>
    )
}

export default Home
