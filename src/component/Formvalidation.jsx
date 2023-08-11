import { useState } from "react";

const Formvalidation = () => {

    const [input, setInput] = useState({
        email: '',
        password: '',
        address: '',
        address2: '',
        city: '',
        sata: '',
        zip: '',
        check: ''
    })
    const [formerror, setFormError] = useState({})

    const allRecord = (e) => {
        setInput({
            ...input, [e.target.name]: e.target.value
        })
    }

    const alldata = () => {
        const err = {};
        if (!input.email) {
            err.email = "Email is required";
        }
        if (!input.password) {
            err.password = "Password is required";
        }
        if (!input.address) {
            err.address = "Address is required";
        }
        if (!input.address2) {
            err.address2 = "Address is required";
        }
        if (!input.city) {
            err.city = "City is required";
        }
        if (!input.sata) {
            err.sata = "Sata is required";
        }
        if (!input.zip) {
            err.zip = "Zip is required";
        }
        if (!input.check) {
            err.check = "Check is required";
        }
        setFormError(err);
    }
    return (
        <>

            <table className="row g-3 col-7 py-5 px-4 mx-auto mt-5" style={{backgroundColor:"#8080806e",borderRadius:"30px"}}>
                <tbody className="col-12 row">
                    <tr>
                        <td className="col-12 row m-0">
                            <div className="col-6 mb-3">
                                <label className="form-label">Email</label>
                                <input type="email" name="email" onChange={allRecord} className="form-control" />
                                <span style={{ color: 'red' }}>{formerror.email}</span>
                            </div>
                            <div className="col-6 mb-3">
                                <label className="form-label">Password</label>
                                <input type="password" name="password" onChange={allRecord} className="form-control" />
                                <span style={{ color: 'red' }}>{formerror.password}</span>
                            </div>
                        </td>
                        <td className="col-12 row m-0">
                            <div className="col-12 mb-3">
                                <label className="form-label">Address</label>
                                <input type="text" name="address" onChange={allRecord} className="form-control" placeholder="1234 Main St" />
                                <span style={{ color: 'red' }}>{formerror.address}</span>
                            </div>
                            <div className="col-12 mb-3">
                                <label className="form-label">Address 2</label>
                                <input type="text" name="address2" onChange={allRecord} className="form-control" placeholder="Apartment, studio, or floor" />
                                <span style={{ color: 'red' }}>{formerror.address2}</span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="col-12 row m-0">
                            <div className="col-md-6 mb-3">
                                <label className="form-label">City</label>
                                <input type="text" name="city" onChange={allRecord} className="form-control" />
                                <span style={{ color: 'red' }}>{formerror.city}</span>
                            </div>
                            <div className="col-md-4 mb-3">
                                <label className="form-label">State</label>
                                <select name="sata" onChange={allRecord} className="form-select">
                                    <option selected>Choose...</option>
                                    <option>Chennai</option>
                                    <option>Surat</option>
                                    <option>Mumbai</option>
                                </select>
                                <span style={{ color: 'red' }}>{formerror.sata}</span>
                            </div>
                            <div className="col-md-2 mb-3">
                                <label className="form-label">Zip</label>
                                <input type="text" name="zip" onChange={allRecord} className="form-control" />
                                <span style={{ color: 'red' }}>{formerror.zip}</span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="col-12 row m-0">
                            <div className="col-12 mb-3">
                                <div className="form-check">
                                    <input name="check" onChange={allRecord} className="form-check-input" type="checkbox" />
                                    <label className="form-check-label" >
                                        Check me out
                                    </label>
                                    <span style={{ color: 'red',paddingLeft:"15px" }}>{formerror.check}</span>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td >
                            <div className="col-12 ms-2">
                                <button onClick={() => alldata()} type="submit" className="btn btn-primary">Sign in</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}
export default Formvalidation;