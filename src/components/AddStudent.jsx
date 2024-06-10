import React, { useState } from 'react'
import NavStudent from './NavStudent'
import axios from 'axios'

const AddStudent = () => {
    const [student, setStudent] = useState(
        {
            "firstname": "",
            "lastname": "",
            "college": "",
            "dob": "",
            "course": "",
            "mobileno": "",
            "email": "",
            "address": ""

        }

    )
    const inputHandler = (event) => {
        setStudent({ ...student, [event.target.name]: event.target.value })
    }
    const readValue = () => {
        console.log(student)
        axios.post("https://courseapplogix.onrender.com/addstudents",student).then(
            (Response)=>{
                console.log(Response.data)
              if (Response.data.status=="success") {
                alert("successfull")
              } else {
                alert("Error")
              }
            }
        ).catch().finally()
    }
    return (
        <div>
            <NavStudent />
            <div class="p-3 mb-2 bg-primary ">
                <div className="container">
                    <div className="row">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <div className="row g-3">
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" className="form-label">FIRST NAME</label>
                                    <input type="text" className="form-control" name='firstname' value={student.firstname} onChange={inputHandler} />
                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" className="form-label">LAST NAME</label>
                                    <input type="text" className="form-control" name='lastname' value={student.lastname} onChange={inputHandler} />
                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" className="form-label">COLLEGE</label>
                                    <textarea id="" className="form-control" name='college' value={student.college} onChange={inputHandler}></textarea>
                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" className="form-label">DOB</label>
                                    <input type="date" name='dob' id="" className="form-control"  value={student.dob} onChange={inputHandler} />

                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" className="form-label">COURSE</label>
                                    <input type="text" className="form-control" name='course' value={student.course} onChange={inputHandler} />
                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" className="form-label">MOBILE NO</label>
                                    <input type="text" className="form-control" name='mobileno' value={student.mobileno} onChange={inputHandler} />
                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" className="form-label">EMAIL</label>
                                    <input type="email" id="" className="form-control" name="email" value={student.email} onChange={inputHandler} />
                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" className="form-label">ADDRESS</label>
                                    <textarea id="" className="form-control" name='address' value={student.address} onChange={inputHandler}></textarea>
                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <button className="btn btn-success" onClick={readValue}>SUBMIT</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddStudent