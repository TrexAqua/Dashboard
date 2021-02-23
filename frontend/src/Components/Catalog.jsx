import React from 'react'
import {Table , DropdownButton, Button} from 'react-bootstrap'
import DropdownItem from 'react-bootstrap/esm/DropdownItem'
import { Link } from 'react-router-dom'

const Catalog = ({history}) => {
  const clickHandler = () => {
    history.push('/')
  }


    return (
        <div>
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <h1 >Simcord Automation Testing Tool - SAAT</h1>
                <h3>ReportCatalog - Simpcord Test Automation</h3>
                Choose a report <DropdownButton title='Reports on the Page:'>
                  <DropdownItem>Adhoc</DropdownItem>
                  <DropdownItem>Adhoc</DropdownItem>
                  <DropdownItem>Adhoc</DropdownItem>
                </DropdownButton>
    </div>
    <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>ReportCatalog</th>
      <th>Description</th>
      <th>Featurefile</th>
      <th>Immediate Execution</th>
      <th>TestType</th>
      <th>Action</th>
      <th>Schedule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Adhoc</td>
      <td>Adhoc</td>
      <td>Adhoc</td>
      <td>Adhoc</td>
      <td>Adhoc</td>
      <td><Link to='/basetable'>ShowReports</Link></td>
      <td><Link  to='/scheduler'>ScheduleJob</Link></td>
    </tr>
    <tr>
      <td>Adhoc</td>
      <td>Adhoc</td>
      <td>Adhoc</td>
      <td>Adhoc</td>
      <td>Adhoc</td>
      <td><Link to='/basetable'>ShowReports</Link></td>
      <td><Link  to='/scheduler'>ScheduleJob</Link></td>
    </tr>
    <tr>
      <td>Adhoc</td>
      <td>Adhoc</td>
      <td>Adhoc</td>
      <td>Adhoc</td>
      <td>Adhoc</td>
      <td><Link to='/basetable'>ShowReports</Link></td>
      <td><Link  to='/scheduler'>ScheduleJob</Link></td>
    </tr>
    <tr>
      <td>Adhoc</td>
      <td>Adhoc</td>
      <td>Adhoc</td>
      <td>Adhoc</td>
      <td>Adhoc</td>
      <td><Link to='/basetable'>ShowReports</Link></td>
      <td><Link  to='/scheduler'>ScheduleJob</Link></td>
    </tr>
              <tr>
      <td>Adhoc</td>
      <td>Adhoc</td>
      <td>Adhoc</td>
      <td>Adhoc</td>
      <td>Adhoc</td>
      <td><Link to='/basetable'>ShowReports</Link></td>
      <td><Link  to='/scheduler'>ScheduleJob</Link></td>
    </tr>
    <tr>
      <td>Adhoc</td>
      <td>Adhoc</td>
      <td>Adhoc</td>
      <td>Adhoc</td>
      <td>Adhoc</td>
      <td><Link to='/basetable'>ShowReports</Link></td>
      <td><Link  to='/scheduler'>ScheduleJob</Link></td>
    </tr>
    <tr>
      <td>Adhoc</td>
      <td>Adhoc</td>
      <td>Adhoc</td>
      <td>Adhoc</td>
      <td>Adhoc</td>
      <td><Link to='/basetable'>ShowReports</Link></td>
      <td><Link  to='/scheduler'>ScheduleJob</Link></td>
    </tr>
   <tr>
      <td>Adhoc</td>
      <td>Adhoc</td>
      <td>Adhoc</td>
      <td>Adhoc</td>
      <td>Adhoc</td>
      <td><Link to='/basetable'>ShowReports</Link></td>
      <td><Link  to='/scheduler'>ScheduleJob</Link></td>
    </tr>
     <tr>
      <td>Adhoc</td>
      <td>Adhoc</td>
      <td>Adhoc</td>
      <td>Adhoc</td>
      <td>Adhoc</td>
      <td><Link to='/basetable'>ShowReports</Link></td>
      <td><Link  to='/scheduler'>ScheduleJob</Link></td>
    </tr>
      <tr>
      <td>Adhoc</td>
      <td>Adhoc</td>
      <td>Adhoc</td>
      <td>Adhoc</td>
      <td>Adhoc</td>
      <td><Link to='/basetable'>ShowReports</Link></td>
      <td><Link  to='/scheduler'>ScheduleJob</Link></td>
    </tr>
   <tr>
      <td>Adhoc</td>
      <td>Adhoc</td>
      <td>Adhoc</td>
      <td>Adhoc</td>
      <td>Adhoc</td>
      <td><Link to='/basetable'>ShowReports</Link></td>
      <td><Link  to='/scheduler'>ScheduleJob</Link></td>
    </tr>
   <tr>
      <td>Adhoc</td>
      <td>Adhoc</td>
      <td>Adhoc</td>
      <td>Adhoc</td>
      <td>Adhoc</td>
      <td><Link to='/basetable'>ShowReports</Link></td>
      <td><Link  to='/scheduler'>ScheduleJob</Link></td>
    </tr>
     <tr>
      <td>Adhoc</td>
      <td>Adhoc</td>
      <td>Adhoc</td>
      <td>Adhoc</td>
      <td>Adhoc</td>
      <td><Link to='/basetable'>ShowReports</Link></td>
      <td><Link  to='/scheduler'>ScheduleJob</Link></td>
    </tr>
      <tr>
      <td>Adhoc</td>
      <td>Adhoc</td>
      <td>Adhoc</td>
      <td>Adhoc</td>
      <td>Adhoc</td>
      <td><Link to='/basetable'>ShowReports</Link></td>
      <td><Link  to='/scheduler'>ScheduleJob</Link></td>
    </tr>
    <tr>
      <td>Adhoc</td>
      <td>Adhoc</td>
      <td>Adhoc</td>
      <td>Adhoc</td>
      <td>Adhoc</td>
      <td><Link to='/basetable'>ShowReports</Link></td>
      <td><Link  to='/scheduler'>ScheduleJob</Link></td>
    </tr>
      <tr>
      <td>Adhoc</td>
      <td>Adhoc</td>
      <td>Adhoc</td>
      <td>Adhoc</td>
      <td>Adhoc</td>
      <td><Link to='/basetable'>ShowReports</Link></td>
      <td><Link  to='/scheduler'>ScheduleJob</Link></td>
    </tr>

  </tbody>
        </Table>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <Button style={{margin:3}}>Select Report</Button>
        <Button style={{margin:3}} onClick={clickHandler}>Main Menu</Button>
        </div>
        
        </div>
    )
}

export default Catalog
