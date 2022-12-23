import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

const EmpEdit = () => {

    const { employeeId } = useParams();

    useEffect(() => {
        fetch("http://localhost:8000/employee/" + employeeId).then((res) => {
            return res.json()

        }).then((resp) => {
            setId(resp.id)
            setName(resp.name)
            setEmail(resp.email)
            setPhone(resp.phone)
            setIsActive(resp.isActive)

        }).catch((err) => {
            console.log(err.message())
        })
    });

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [isActive, setIsActive] = useState(true);
    const [valid, setvalid] = useState(false);

    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        //console.log({id, name, email, phone, isActive});
        const empData = { id, name, email, phone, isActive }



        fetch("http://localhost:8000/employee/"+ employeeId,
            {
                method: "PUT",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(empData)
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

                        <div className="card" style={{ "textAlign": "left" }}>
                            <div className="card-title">
                                <h2 className="text-center">Edit Employee</h2>
                            </div>
                            <div className="card-body">
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>ID</label>
                                        <input disabled="disabled" value={id} onChange={e => setId(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>NAME</label>
                                        <input required value={name} onMouseDown={e => setvalid(true)} onChange={e => setName(e.target.value)} className="form-control"></input>
                                    </div>

                                    {/* IF NAME LENGTH IS EQUAL TO 0, AND IF ONMOUSEDOWN/FOCUS ON INPUT IS TRUE THEN DISPLAY SPAN */}
                                    {name.length === 0 && valid && <span className="text-danger">Please enter the name.</span>}
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input required value={email} onChange={e => setEmail(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Phone</label>
                                        <input required value={phone} onChange={e => setPhone(e.target.value)} className="form-control"/>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-check">
                                        <input type="checkbox" checked={isActive} onChange={e => setIsActive(e.target.checked)} className="form-check-input" />
                                        <label className="form-check-label">Is Active</label>
                                    </div>
                                </div>

                                <div className="col-lg-12" style={{ "textAlign": "center" }}>
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


export default EmpEdit