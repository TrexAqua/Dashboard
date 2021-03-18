import React, { useEffect, useState } from 'react'
import { Table, DropdownButton,Dropdown, Button } from 'react-bootstrap'


const Base = ({ history, location, match }) => {
    const [status, setStatus] = useState('')
    const [data, setData] = useState([]);
    const [title, setTitle] = useState('')

    const clickHandler = () => {
        history.push('/')
  }
  const dropdownClickHandler = (e) => {
    console.log(e)
    setStatus(e)
  }
  
  useEffect(() => {
    if (location.reporttitle) {
      setTitle(location.reporttitle)
    }
    
    const fetchData = async () => {
      const response = await fetch(`/reportdetail/${match.params.reportname}`).then(response => response.json())
      setData(response.data)
    }
    fetchData()   
  }, [match,location, title])
  
  useEffect(() => {
    if (status !== '' && status !== 'All') {
      const fetchData = async () => {
        const { data } = await fetch(`/statusdetail/${match.params.reportname}/${status}`).then(data => data.json())
        setData(data)
      }
      fetchData()
    }
    if (status === 'All') {
      const fetchData = async () => {
        const { data } = await fetch(`/reportdetail/${match.params.reportname}`).then(data => data.json())
        setData(data)
      }
      fetchData()
    }
  },[status, match])
    return (
        <div>
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <h1 >Simcord Automation Testing Tool - SAAT</h1>
                <h3>Base Table - Simpcord Test Automation</h3>
                Choose P/F
            
                <DropdownButton title='Select Job Name'>
                    <Dropdown.Item eventKey='Pass' onSelect={dropdownClickHandler}>Passed</Dropdown.Item>
                    <Dropdown.Item eventKey='Fail'onSelect={dropdownClickHandler}>Fail</Dropdown.Item>
                    <Dropdown.Item eventKey='All'onSelect={dropdownClickHandler}>All</Dropdown.Item>
                </DropdownButton>
        </div>
            <div>
            <Button onClick={clickHandler}>MainMenu</Button>
          <Button onClick={()=>{history.push('/basetable')}}>Previous</Button>
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
            {data.map(x => (
<tr key={Math.random()}>
      <td>{x.Scno}</td>
      <td>{x.Scdesc}</td>
      <td>{x.input}</td>
      <td>{x.ExpectedResult}</td>
      <td>{x.ActualResult}</td>
      <td>{x.Status}</td>
    </tr>     
            ))}
                
  </tbody>
</Table>
        </div>
    )
}

export default Base
