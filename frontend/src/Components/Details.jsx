import React, {useState, useEffect} from 'react'
import Header from './Header'
import { Table } from 'react-bootstrap'
const Details = () => {

    const [data, setData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const { data } = await fetch('/report').then(data => data.json())
            setData(data)
        }
        fetchData()
    },[])
    return (
        <div>
            <Header title='Details Page' />
            <Table className='table' responsive size="sm" striped bordered>
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Jobnm</th>
                    <th>Appname</th>
                    <th>Reportnm</th>
                    <th>Scno</th>
                    <th>Scdesc</th>
                    <th>input</th>
                    <th>ExpectedResult</th>
                    <th>ActualResult</th>
                    <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(x => (
                        <tr key={x.id}>
                            <td>{x.id}</td>
                            <td>{x.Jobnm}</td>
                            <td>{x.Appname}</td>
                            <td>{x.Reportnm}</td>
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

export default Details
