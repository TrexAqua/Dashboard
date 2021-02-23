import React from 'react'
import { Button, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const BaseTable = ({history}) => {
    const clickHandler = () => {
        history.push('/catalog')
    }

    return (
        <div>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <h1 >Simcord Automation Testing Tool - SAAT</h1>
                <h3>Base Table - Simpcord Test Automation</h3>
            </div>
            <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>ReportTitle</th>
      <th>TotalTestCase</th>
      <th>TotalPassed</th>
      <th>TotalFailed</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Lorem ipsum dolor sit amet.</td>
      <td></td>
      <td>0</td>
      <td>60</td>
      <td><Link to='/base'>Show Report</Link></td>
                    </tr>
                        <tr>
      <td>Lorem ipsum dolor sit amet.</td>
      <td></td>
      <td>0</td>
      <td>60</td>
      <td><Link to='/base'>Show Report</Link></td>
                    </tr>
                        <tr>
      <td>Lorem ipsum dolor sit amet.</td>
      <td></td>
      <td>0</td>
      <td>60</td>
      <td><Link to='/base'>Show Report</Link></td>
                    </tr>
                        <tr>
      <td>Lorem ipsum dolor sit amet.</td>
      <td></td>
      <td>0</td>
      <td>60</td>
      <td><Link to='/base'>Show Report</Link></td>
                    </tr>
                        <tr>
      <td>Lorem ipsum dolor sit amet.</td>
      <td></td>
      <td>0</td>
      <td>60</td>
      <td><Link to='/base'>Show Report</Link></td>
                    </tr>
                        <tr>
      <td>Lorem ipsum dolor sit amet.</td>
      <td></td>
      <td>0</td>
      <td>60</td>
      <td><Link to='/base'>Show Report</Link></td>
                    </tr>
                        <tr>
      <td>Lorem ipsum dolor sit amet.</td>
      <td></td>
      <td>0</td>
      <td>60</td>
      <td><Link to='/base'>Show Report</Link></td>
                    </tr>
                        <tr>
      <td>Lorem ipsum dolor sit amet.</td>
      <td></td>
      <td>0</td>
      <td>60</td>
      <td><Link to='/base'>Show Report</Link></td>
                    </tr>
                        <tr>
      <td>Lorem ipsum dolor sit amet.</td>
      <td></td>
      <td>0</td>
      <td>60</td>
      <td><Link to='/base'>Show Report</Link></td>
                    </tr>
                        <tr>
      <td>Lorem ipsum dolor sit amet.</td>
      <td></td>
      <td>0</td>
      <td>60</td>
      <td><Link to='/base'>Show Report</Link></td>
                    </tr>
                        <tr>
      <td>Lorem ipsum dolor sit amet.</td>
      <td></td>
      <td>0</td>
      <td>60</td>
      <td><Link to='/base'>Show Report</Link></td>
                    </tr>

                </tbody>
            </Table>
            <div style={{display: 'flex', justifyContent: 'center'}}>
            <Button onClick={clickHandler}>Report Catalog</Button>

            </div>
        </div>
    )
}

export default BaseTable
