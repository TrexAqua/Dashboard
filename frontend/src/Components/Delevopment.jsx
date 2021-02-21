import React from 'react'
import { Button } from 'react-bootstrap'

const Delevopment = ({history}) => {
    const clickHandler = () => {
        history.push('/')
    }
    return (
        <div>
            <h1>
                This Page Is Under Development Right Now!
            </h1>
            <Button onClick={clickHandler}>Go Back</Button>
        </div>
    )
}

export default Delevopment
