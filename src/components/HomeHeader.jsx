import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addEachStudent } from '../services/allFunctionsAPI';

const HomeHeader = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [student,setStudent]=useState({
        name:"",
        grade:"",
        place:""
    })

    const addStudent=async()=>{
      try {
        if(student.name&&student.grade&&student.place){
          const serverResponce=await addEachStudent(student)
          if(serverResponce.status>=200&&serverResponce.status<=300){
            alert("Student Added Succesfully!")
            setShow(false)
            setStudent({
              name:"",
              grade:"",
              place:""
          })
          
          }else{
            alert("Please contact admin!")
          }
        }else{
          alert("Please fill all the fields!")
        }
        
      } catch (error) {
        
      }
    }



  return (
    <div>
      <div className='d-flex justify-content-between mt-3'>
            <h1>StudentsList</h1>
            <button className='btn btn-success' onClick={handleShow}>Add students</button>
        </div>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add student</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <FloatingLabel
        controlId="floatingInput"
        label="Student name"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="Student name" onChange={(e)=>setStudent({...student,name:e.target.value})} />
      </FloatingLabel>


      <FloatingLabel
        controlId="floatingInput"
        label="Student grade"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="Student grade" onChange={(e)=>setStudent({...student,grade:e.target.value})}/>
      </FloatingLabel>

      <FloatingLabel
        controlId="floatingInput"
        label="Student place"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="Student place" onChange={(e)=>setStudent({...student,place:e.target.value})}/>
      </FloatingLabel>



        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addStudent}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default HomeHeader
