import React, { useState, useEffect } from 'react'
import { Table, Dropdown, DropdownButton } from 'react-bootstrap';
import Header from './Header'
import '../Styles/Dashboard.css'

const Dashboard = () => {

    const [data, setData] = useState([]);
    const [systems, setSystems] = useState([]);
    const [systemName, setSystemName] = useState('');
    const [appNames, setAppNames] = useState([]);
    const [singleAppName, setSingleAppName] = useState('')

    const clickHandler = (e) => {
        setSystemName(e.target.textContent)
    }

    const clickHandlerForApp = (e) => {
        setSingleAppName(e.target.textContent)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await fetch('/dashboard' ).then(data => data.json())
            setData(data)
        }
        fetchData()
    }, [])

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await fetch('/system' ).then(data => data.json())
            setSystems(data)
        }
        fetchData()
    }, [])

    useEffect(() => {
        if (systemName !== '') {
            const fetchData = async () => {
            const { data } = await fetch(`/filtersystem/${systemName}`).then(data => data.json())
            setData(data)
        }
            fetchData()
        }
        
    }, [systemName])

    useEffect(() => {
        if (systemName !== '') {
            const fetchData = async () => {
                const { data } = await fetch(`/appname/${systemName}`).then(data => data.json())
                setAppNames(data)
                console.log(data)
            }
            fetchData()
        }
    }, [systemName])
    
    useEffect(() => {
        if (singleAppName !== '') {
            const fetchData = async () => {
                const { data } = await fetch(`/related/${systemName}/${singleAppName}`).then(data => data.json())
                setData(data)
                console.log(data)
            }
            fetchData()
        }
    },[singleAppName, systemName])

    return (
        <div>
            <Header title='Dashboard' />
            <div className='dropdown-container'>
            <DropdownButton id="dropdown-item-button" title="Select System">
                {systems.map(x => {
                    return (
                        <Dropdown.Item onClick={clickHandler}>{x.Systemnm}</Dropdown.Item>                 
                    )
                })}
            </DropdownButton>
            {/* //if there is any system selected then only this code will run*/}
            {systemName && <DropdownButton id="dropdown-item-button" title="Select App Name">
                {appNames.map(x => {
                    return (
                        <Dropdown.Item onClick={clickHandlerForApp}>{x.Applname}</Dropdown.Item>                 
                    )
                })}
                </DropdownButton>      
            }
            </div>
            <div className='heading-container'>
                <h3 className='system'>System: {systemName}</h3>
            {systemName  && <h3 className='app'>App Name : {singleAppName}</h3>}
            </div>
            

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
