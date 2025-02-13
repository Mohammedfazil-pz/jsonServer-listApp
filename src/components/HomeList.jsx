import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { getAllStudents } from '../services/allFunctionsAPI'


const HomeList = () => {

    const [students,setStudents]=useState([])

    const fetchStudents=async()=>{
        try {
            const serverResponce=await getAllStudents()
            if(serverResponce.status>=200&&serverResponce.status<=300){
                setStudents(serverResponce.data)
            }else{
                alert("Please contact admin!")
            }
        } catch (error) {
            alert("Internal Error")
        }
    }

    useEffect(()=>{
        fetchStudents()
    },[students])



    
    return (
        <div>
            <Table striped bordered hover className='mt-4'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Grade</th>
                        <th>Place</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((a)=>(
                        <tr>
                        <td>{a.id}</td>
                        <td>{a.name}</td>
                        <td>{a.grade}</td>
                        <td>{a.place}</td>
                    </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default HomeList
