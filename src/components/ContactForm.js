import React, { useState, useEffect } from 'react';

const ContactForm = (props) => {
    const initialFieldValues = {
        fullName: '', 
        mobile: '', 
        email: '',
        address: ''
    }

    var [values, setValues] = useState(initialFieldValues)

    useEffect(() => {
        if (props.currentId == '')
            setValues({
                ...initialFieldValues
            })
        else
            setValues({
                ...props.contactObjects[props.currentId]
            })

    }, [props.currentId, props.contactObjects])

    const handleInputChange = (e) => {
        var { name, value } = e.target; // de-structing? yes it is de-structuring from the input properties assigned below in the JSX
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleFormSubmit = (e) => {
        e.preventDefault(); 
        props.addOrEdit(values); 
    }


    return (
        <form autocomplete="off" onSubmit={handleFormSubmit} style={{ marginBottom: "30px" }}>
            <div className="form-group input-group">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="fa fa-user"></i>
                     </div>
                </div>
                <input className="form-control" placeholder="Full Name" name="fullName" value={values.fullName} onChange={handleInputChange} style={{ marginBottom: "15px" }} />
            </div>
            <div className="form-row">
                <div className="form-group input-group col-md-6">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fa fa-mobile"></i>
                        </div>
                    </div>
                    <input className="form-control" placeholder="Mobile" name="mobile" value={values.mobile} onChange={handleInputChange} style={{ marginBottom: "15px" }}/>
                </div>
                <div className="form-group input-group col-md-6">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fa fa-envelope"></i>
                        </div>
                    </div>
                    <input className="form-control" placeholder="Email" name="email" value={values.email} onChange={handleInputChange} style={{ marginBottom: "15px" }}/>
                </div>
            </div>

            <div className="form-group">
                <textarea className="form-control" placeholder="Address" name="address" value={values.address} onChange={handleInputChange} />
            </div>

            <div className="form-group" style={{ marginTop: "30px" }}>
                <input type="submit" value={props.currentId == '' ? "Save" : "Update"} className="btn btn-primary btn-block" style={{ width: "100%" }} />
            </div>
        </form>
    );
}

export default ContactForm;







// JavaScript source code







// JavaScript source code
