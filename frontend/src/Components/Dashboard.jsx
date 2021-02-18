import React, { useState, useEffect } from 'react'
import { Table, Dropdown, DropdownButton } from 'react-bootstrap';
import Header from './Header'
import '../Styles/Dashboard.css'

const Dashboard = () => {

    const [data, setData] = useState([]);
    const [systems, setSystems] = useState([]);
    const [systemName, setSystemName] = useState('');

    const clickHandler = (e) => {
        setSystemName(e.target.textContent)
        console.log(systemName)
    }

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await fetch('/dashboard').then(data => data.json())
            setData(data)
        }
        fetchData()
    }, [])

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await fetch('/system').then(data => data.json())
            setSystems(data)
        }
        fetchData()
    }, [])

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await fetch(`/filtersystem/${systemName}`).then(data => data.json())
            setData(data)
        }
        fetchData()
    },[systemName])

    return (
        <div>
            <Header title='Dashboard' />
            <DropdownButton id="dropdown-item-button" title="Select System">
                {systems.map(x => {
                    return (
                        <Dropdown.Item onClick={clickHandler}>{x.Systemnm}</Dropdown.Item>                 
                    )
                })}
            </DropdownButton>
            <h3 className='system'>System: {systemName}</h3>
            <Table className='table' responsive size="sm" striped bordered>
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Applname</th>
                    <th>Systemnm</th>
                    <th>testtype</th>
                    <th>rundate</th>
                    <th>Status</th>
                    <th>Tottestcase</th>
                    <th>Totalpass</th>
                    <th>TotFail</th>
                    <th>PctPass</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(x => (
                        <tr key={x.id}>
                            <td>{x.id}</td>
                            <td>{x.Applname}</td>
                            <td>{x.Systemnm}</td>
                            <td>{x.testtype}</td>
                            <td>{x.rundate}</td>
                            <td>{x.Status}</td>
                            <td>{x.Tottestcase}</td>
                            <td>{x.Totalpass}</td>
                            <td>{x.TotFail}</td>
                            <td>{x.Systemnm}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            
        </div>
    )
}

export default Dashboard
