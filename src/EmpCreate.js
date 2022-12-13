import { type } from "@testing-library/user-event/dist/type";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const EmpCreate = () => {
    
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [isActive, setIsActive] = useState(true);

    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        //console.log({id, name, email, phone, isActive});
        const empData = {id, name, email, phone, isActive}

        

        fetch("http://localhost:8000/employee",
        {
            method: "POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(empData)
        }
        ).then((res) => {
            alert('Saved Successfully!')
            navigate('/')
        }).catch((err) => {
            console.log(err.message())
        })
    }

    return (
        <>
            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={submitHandler}>

                        <div className="card" style={{"textAlign":"left"}}>
                            <div className="card-title">
                                <h2 className="text-center">Add New Employee</h2>
                            </div>
                            <div className="card-body">

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>ID</label>
                                        <input  disabled="disabled" value={id} onChange= {e => setId(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>NAME</label>
                                        <input name={name} onChange= {e => setName(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input value={email} onChange= {e => setEmail(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Phone</label>
                                        <input value={phone} onChange= {e => setPhone(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-check">
                                        <input type="checkbox" checked={isActive} onChange= { e => setIsActive(e.target.checked)} className="form-check-input" />
                                        <label className="form-check-label">Is Active</label>
                                    </div>
                                </div>

                                <div className="col-lg-12" style={{"textAlign":"center"}}>
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-success">Save</button>
                                        <Link to="/" className="btn btn-danger">Cancel</Link>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </form>

                </div>

            </div>
        </>
    );

}

export default EmpCreate