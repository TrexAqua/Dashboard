import React, { useState, useEffect } from 'react'
import {Table} from 'react-bootstrap'
import Header from './Header'

const Catalog = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await fetch('/catalog').then(data => data.json())
            setData(data)
            console.log(data)
        }
        fetchData()
    },[])

    return (
        <div>
            <Header title='Catalog Page' />
            <Table className='table' responsive size="sm" striped bordered>
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Jobnm</th>
                    <th>Appname</th>
                    <th>Appdesc</th>
                    <th>TestScenarioxls</th>
                    <th>Runcommand</th>
                    <th>testtype</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(x => (
                        <tr key={x.id}>
                            <td>{x.id}</td>
                            <td>{x.Jobnm}</td>
                            <td>{x.Appname}</td>
                            <td>{x.Appdesc}</td>
                            <td>{x.TestScenarioxls}</td>
                            <td>{x.Runcommand}</td>
                            <td>{x.testtype}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default Catalog
