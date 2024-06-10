import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavStudent from './NavStudent'

const ViewAll = () => {
    const [student, changeStudent] = useState([])
    const fetchData = () => {
        axios.get("https://courseapplogix.onrender.com/getdata").then(
            (Response) => {
                changeStudent(Response.data)
            }

        ).catch().finally()
    }
    useEffect(() => { fetchData() }, [])
    return (
        <div>
            <NavStudent />
            <div class="p-3 mb-2 bg-primary ">
                <div className="container">
                    <div className="row">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">first name</th>
                                        <th scope="col">last name</th>
                                        <th scope="col">college</th>
                                        <th scope="col">dob</th>
                                        <th scope="col">course</th>
                                        <th scope="col">mobileno</th>
                                        <th scope="col">email</th>
                                        <th scope="col">address</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        student.map(
                                            (value, index) => {
                                                return <tr>
                                                    <th scope="row">{value.firstname}</th>
                                                    <td>{value.lastname}</td>
                                                    <td>{value.college}</td>
                                                    <td>{value.dob}</td>
                                                    <td>{value.course}</td>
                                                    <td>{value.mobileno}</td>
                                                    <td>{value.email}</td>
                                                    <td>{value.address}</td>
                                                </tr>
                                            }
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ViewAll