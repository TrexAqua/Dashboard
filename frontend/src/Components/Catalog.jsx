/* eslint-disable jsx-a11y/no-access-key */
import React, { useEffect, useState } from 'react'
import {Table , DropdownButton, Button} from 'react-bootstrap'
import DropdownItem from 'react-bootstrap/esm/DropdownItem'
import { Link } from 'react-router-dom'
import '../Styles/Catalog.css'

const Catalog = ({ history }) => {

  const [data, setData] = useState([])


  // eslint-disable-next-line no-unused-vars
  const [featureFiles, setFeatureFiles] = useState([]);

  const clickHandler = () => {
    history.push('/')
  }
  const exectionHandler = () => {
    let collection = document.getElementsByClassName('jobcatalogTable')
    let table = collection[0]
    var rows = table.getElementsByTagName('tr')
    let arr = []

    for (let i = 0; i < rows.length; i++) {
      const row = rows[i];
      const trs = row.getElementsByTagName('td')
      let tds = trs[0]
      arr.push(tds)
    }
    arr.shift()
    for (let i = 0; i < arr.length; i++) {
      const td = arr[i];
      const input = td.getElementsByTagName('input')
      if (input[0].checked === true) {
        featureFiles.push(input[0].accessKey)
      }
    }
    console.log(featureFiles)
}
  
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await fetch('/catalog').then(data => data.json())
      setData(data)
    }
    fetchData()
  },[])

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
    <Table className='jobcatalogTable' striped bordered hover size="sm">
  <thead>
       <tr>
      <th></th>
      <th>App Name</th>
      <th>Description</th>
      <th>Featurefile</th>
      <th>TestType</th>
      <th>Action</th>
      <th>Schedule</th>
    </tr>
  </thead>
          <tbody>
            {data.map(x => {
              return <tr key={Math.random()}>
                  <td><input accessKey={x.Runcommand} type="checkbox"/></td>
      <td>{x.Appname}</td>
      <td>{x.Appdesc}</td>
      <td>{x.Runcommand}</td>
      <td>{x.testtype}</td>
      <td><Link to='/basetable'>ShowReports</Link></td>
      <td><Link  to='/scheduler'>ScheduleJob</Link></td>
              </tr>
            })}
  </tbody>
        </Table>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Button onClick={exectionHandler} style={{margin:3}}>Execute Job</Button>
        <Button style={{margin:3}} onClick={clickHandler}>Main Menu</Button>
        </div>
        
        </div>
    )
}

export default Catalog
