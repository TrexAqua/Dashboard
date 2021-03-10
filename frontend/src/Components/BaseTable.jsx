import React from 'react'
import { useState, useEffect } from 'react'
import { Button, Table, Dropdown, DropdownButton} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const BaseTable = ({ history }) => {
    const [data, setData] = useState([])
    const [status, setStatus] = useState('')

    const clickHandler = () => {
        history.push('/catalog')
    }
    const dropdownClickHandler = (e) => {
        setStatus(e)
        console.log(status)
    }
    

    useEffect(() => {
        const getData = async () => {
            const { data } = await fetch('/basetable').then(data => data.json())
            setData(data)
        }
        getData()
    },[])
    useEffect(() => {
        if (status !== '' && status !== 'All') {
            const fetchData = async () => {
                const { data } = await fetch(`/basetable/${status}`).then(data => data.json())
                setData(data)
            }
            fetchData()
        }
    }, [status])
    useEffect(() => {
        if (status === 'All') {
            const fetchData = async () => {
                const { data } = await fetch('/basetable').then(data => data.json())
                setData(data)
            }
            fetchData()
        }
    },[status])
    return (
        <div>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <h1 >Simcord Automation Testing Tool - SAAT</h1>
                <h3>Base Table - Simpcord Test Automation</h3>
                <DropdownButton title='Reports on the Page:'>
                    <Dropdown.Item eventKey='pass' onSelect={dropdownClickHandler}>Passed</Dropdown.Item>
                    <Dropdown.Item eventKey='fail'onSelect={dropdownClickHandler}>Failed</Dropdown.Item>
                    <Dropdown.Item eventKey='All'onSelect={dropdownClickHandler}>All</Dropdown.Item>
                </DropdownButton>
                <h3>{status}</h3>
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
    
        {data.map(x => (
            <tr>
                <td>{x.reporttitle}</td>
                <td>{x.totaltestcase}</td>
                <td>{x.totalpassed}</td>
                <td>{x.totalfailed}</td>
            <td><Link to={{pathname: '/base', reporttitle: x.reporttitle}} reporttitle={x.reporttitle} >
                <Button class="showReportButton" renderAs="button" variant="outline-success" style={{ "border-radius": "8px" }}>
                    <span>Show Report</span>
                </Button>
            </Link></td>
            </tr>
    ))}   
      
                
                </tbody>
            </Table>
            <div style={{display: 'flex', justifyContent: 'center'}}>
            <Button onClick={clickHandler}>Report Catalog</Button>

            </div>
        </div>
    )
}

export default BaseTable
