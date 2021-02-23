import React from 'react'
import { Table, DropdownButton } from 'react-bootstrap'
import DropdownItem from 'react-bootstrap/esm/DropdownItem'
import { Link } from 'react-router-dom'

const Scheduler = () => {
    

    return (
        <div>
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <h1 >Report Management System</h1>
                <h3>Job Scheduler - Simpcord Test Automation</h3>
                Choose the jobname<DropdownButton title='Jobs On Page'>
                    <DropdownItem>Adhoc</DropdownItem>
                    <DropdownItem>Adhoc</DropdownItem>
                    <DropdownItem>Adhoc</DropdownItem>
                    <DropdownItem>Adhoc</DropdownItem>
                </DropdownButton>
        </div>   
    <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>SCNO</th>
      <th>SCDESC</th>
      <th>INPUT</th>
      <th>Expected Result</th>
      <th>Actual Result</th>
      <th>Passed/Failed</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Job Name</td>
      <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, aperiam?</td>
      <td></td>
      <td>Lorem, ipsum dolor.</td>
      <td>n</td>
      <td><Link>Execute Now</Link>  <Link>Discard</Link></td>
                    </tr>
                    <tr>
      <td>Job Name</td>
      <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, aperiam?</td>
      <td></td>
      <td>Lorem, ipsum dolor.</td>
      <td>n</td>
      <td><Link>Execute Now</Link>  <Link>Discard</Link></td>
                    </tr>
                    <tr>
      <td>Job Name</td>
      <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, aperiam?</td>
      <td></td>
      <td>Lorem, ipsum dolor.</td>
      <td>n</td>
      <td><Link>Execute Now</Link>  <Link>Discard</Link></td>
                    </tr>
                    
                    <tr>
      <td>Job Name</td>
      <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, aperiam?</td>
      <td></td>
      <td>Lorem, ipsum dolor.</td>
      <td>n</td>
      <td><Link>Execute Now</Link>  <Link>Discard</Link></td>
                    </tr>
                    <tr>
      <td>Job Name</td>
      <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, aperiam?</td>
      <td></td>
      <td>Lorem, ipsum dolor.</td>
      <td>n</td>
      <td><Link>Execute Now</Link>  <Link>Discard</Link></td>
                    </tr>
                    <tr>
      <td>Job Name</td>
      <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, aperiam?</td>
      <td></td>
      <td>Lorem, ipsum dolor.</td>
      <td>n</td>
      <td><Link>Execute Now</Link>  <Link>Discard</Link></td>
                    </tr>
                    <tr>
      <td>Job Name</td>
      <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, aperiam?</td>
      <td></td>
      <td>Lorem, ipsum dolor.</td>
      <td>n</td>
      <td><Link>Execute Now</Link>  <Link>Discard</Link></td>
                    </tr>
                    <tr>
      <td>Job Name</td>
      <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, aperiam?</td>
      <td></td>
      <td>Lorem, ipsum dolor.</td>
      <td>n</td>
      <td><Link>Execute Now</Link>  <Link>Discard</Link></td>
                    </tr>
                    <tr>
      <td>Job Name</td>
      <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, aperiam?</td>
      <td></td>
      <td>Lorem, ipsum dolor.</td>
      <td>n</td>
      <td><Link>Execute Now</Link>  <Link>Discard</Link></td>
                    </tr>
                    <tr>
      <td>Job Name</td>
      <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, aperiam?</td>
      <td></td>
      <td>Lorem, ipsum dolor.</td>
      <td>n</td>
      <td><Link>Execute Now</Link>  <Link>Discard</Link></td>
                    </tr>
                    <tr>
      <td>Job Name</td>
      <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, aperiam?</td>
      <td></td>
      <td>Lorem, ipsum dolor.</td>
      <td>n</td>
      <td><Link>Execute Now</Link>  <Link>Discard</Link></td>
                    </tr>
                    <tr>
      <td>Job Name</td>
      <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, aperiam?</td>
      <td></td>
      <td>Lorem, ipsum dolor.</td>
      <td>n</td>
      <td><Link>Execute Now</Link>  <Link>Discard</Link></td>
    </tr>
    
                    
    

  </tbody>
</Table>
        </div>
    )
}

export default Scheduler
