import React, { useState, useEffect } from 'react'; 
import ContactForm from './ContactForm';
import firebaseDb from '../Firebase'; 

const Contacts = () => {


    var [contactObjects, setContactObjects] = useState({});
    var [currentId, setCurrentId] = useState(''); 

    useEffect(() => {
        firebaseDb.child('contacts').on('value', snapshot => {
            if (snapshot.val() != null)
                setContactObjects({
                    ...snapshot.val()
                })
            else 
                setContactObjects({
                    ...snapshot.val()
                })
        })
   

     },[])

    const addOrEdit = (obj) => {
        if (currentId == '')
            firebaseDb.child('contacts').push(
                obj,
                err => {
                    if (err)
                        console.log(err)
                    else
                        setCurrentId('')
                })
        else
            firebaseDb.child(`contacts/${currentId}`).set(
                obj,
                err => {
                    if (err)
                        console.log(err)
                    else
                        setCurrentId('')
                })
    }

    const onDelete = (key) => {
        if (window.confirm('Are you sure to delete this record?')) {
            firebaseDb.child(`contacts/${key}`).remove(
                err => {
                    if (err)
                        console.log(err)
                    else
                        setCurrentId('')
                })

        }
    }

    return (
        <>
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <h1 class="display-4 text-center" style={{ marginBottom: "30px" }}>Contact Register</h1>
                </div>
            </div>


            <div className="row">
                <div className="col-md-5">
                    <ContactForm {...({ addOrEdit, currentId, contactObjects })}/> 
                </div>
                <div className="col-md-7">
                    <table className="table table-borderless table-stripped">
                        <thead className="thead-light">
                            <tr>
                                <th>Full Name</th>
                                <th>Mobile</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                Object.keys(contactObjects).map(id => { // figure out this...
                                    return <tr key={id}>
                                        <td>{contactObjects[id].fullName}</td>
                                        <td>{contactObjects[id].mobile}</td>
                                        <td>{contactObjects[id].email}</td>
                                        <td>
                                            <a className="btn text-primary" onClick={() => { setCurrentId(id) }  }>
                                                <i className="fa fa-pencil"></i>
                                            </a>
                                            <a className="btn text-danger" onClick={() => onDelete(id)}>
                                                <i className="fa fa-trash"></i>
                                            </a>
                                        </td>
                                    </tr>

                                })
                            }
                        </tbody>

                    </table>
                </div>
            </div>

        </>
    ); 
}

export default Contacts; 







// JavaScript source code
