import React from 'react'
import { useState, useEffect } from 'react'
import { Button, Table, Dropdown, DropdownButton} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const BaseTable = ({ history }) => {
    const [data, setData] = useState([])
    const [job, setJob] = useState('')
    const [jobs, setJobs] = useState([])

    const clickHandler = () => {
        history.push('/catalog')
    }
    const dropdownClickHandler = (e) => {
        setJob(e)
    }
    
    useEffect(() => {
        const getJobs = async () => {
            const { data } = await fetch('/jobs').then(data => data.json())
            setJobs(data)
        }
        getJobs()
    }, [])
    
    useEffect(() => {
        const getData = async () => {
            const { data } = await fetch('/basetable').then(data => data.json())
            setData(data)
        }
        getData()
    },[])
    useEffect(() => {
        if (job !== '' ) {
            const fetchData = async () => {
                const { data } = await fetch(`/jobs/${job}`).then(data => data.json())
                setData(data)
            }
            fetchData()
        }
    }, [job])
    return (
        <div>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <h1 >Simcord Automation Testing Tool - SAAT</h1>
                <h3>Base Table - Simpcord Test Automation</h3>
                <DropdownButton title='Jobs'>
                    {jobs.map(job => (
                        <Dropdown.Item key={Math.random()} eventKey={job.Jobnm} onSelect={dropdownClickHandler}>{job.Jobnm}</Dropdown.Item>                      
                    ))}
                </DropdownButton>
                <h3>{job}</h3>
            </div>
            
            <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>ReportTitle</th>
    <th>Run Date</th>
      <th>TotalTestCase</th>
      <th>TotalPassed</th>
     <th>TotalFailed</th>
    <th>% Passed</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    
        {data.map(x => (
            <tr key={Math.random()}>
                <td>{x.reporttitle}</td>
                <td>{x.Rundate}</td>
                <td>{x.totaltestcase}</td>
                <td>{x.totalpassed}</td>
                <td>{x.totalfailed}</td>
                <td>{x.Pctpassed}</td>
            <td><Link to={{pathname: `/base/${x.reporttitle}`, reporttitle: x.reporttitle}} reporttitle={x.reporttitle} >
                <Button className="showReportButton"  variant="outline-success" style={{ borderRadius: 8 }}>
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
