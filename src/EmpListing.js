import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const EmpListing = () => {

    const [employeeData, setEmployeeData] = useState()

    const navigate = useNavigate();

    const editDetails = (id) => {

    }

    const delDetails = (id) => {

    }

    const loadDetails = (id) => {
        navigate("/employee/details/"+id)
    }

    useEffect(() => {
        fetch("http://localhost:8000/employee").then((res) => {
            return res.json()
        }).then((resp) => {
            setEmployeeData(resp)
        }).catch((err) => {
            console.log(err.message())
        })
    }, [])

    return (
        <div className="container">
            <div className="card">
                <div className="card-title">
                    <h2 className="text-center">Employee List</h2>
                </div>

                <div className="card-body">
                    <div className="div-btn">
                        <Link to="/employee/addnew" className="btn btn-success">Add New (+)</Link>
                    </div>
                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                <td>ID</td>
                                <td>Name</td>
                                <td>Email</td>
                                <td>Phone</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                employeeData &&
                                employeeData.map(item => (
                                    <tr key={item.id}>

                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phone}</td>
                                        <td>

                                            <a className="btn btn-success" onClick={() => editDetails(item.id)}>Edit</a>
                                            <a className="btn btn-danger" onClick={() => delDetails(item.id)}>Del</a>
                                            <a className="btn btn-primary" onClick={() => loadDetails(item.id)}>Info</a>

                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default EmpListing;