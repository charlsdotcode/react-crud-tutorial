import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const EmpDetails = () => {


    // employeeId params need the same on App.js route params
    const { employeeId } = useParams();

    const [employeeData, setEmployeeData] = useState({})

    useEffect(() => {
        fetch("http://localhost:8000/employee/" + employeeId).then((res) => {
            return res.json()

        }).then((resp) => {
            setEmployeeData(resp)
            console.log(resp)
        }).catch((err) => {
            console.log(err.message())
        })
    }, []);

    return (
        <>
            <div className="container">
                <div className="card">
                    <div className="card-title">
                        <h2>Employee Details</h2>
                    </div>

                    <div className="card-body" style={{ "textAlign": "left" }}>
                        {
                            employeeData &&
                            <div>
                                <p>Employee ID : {employeeData.id}</p>
                                <p>Employee Name : {employeeData.name}</p>
                                <p>Employee E-mail : {employeeData.email}</p>
                                <p>Employee Contacts : {employeeData.phone}</p>
                            </div>
                        }

                    </div>

                </div>
                <Link className="btn btn-danger btn-lg" to={"/"}>Back</Link>

            </div>

        </>
    );
}

export default EmpDetails