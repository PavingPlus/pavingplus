
import React, { useState } from 'react';

const Popup = () => {

    const [fullName, setFullName] = useState()
    const [email, setEmail] = useState()
    const [number, setNumber] = useState()
    const [subject, setSubject] = useState()
    const [question, setQuestion] = useState()

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!fullName || !email || !number || !subject || !question ) {
            alert("Please fill all provided fields!")
        } else {
            fetch("https://paving-backend.herokuapp.com/popup/send-mail", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",

                },
                body: JSON.stringify({
                    fullName, email, subject, number, question
                })
            }).then(res => res.json()).then(data => alert("Message send! we will contact you as soon as possible.")).catch((error) => alert(error))
        }



    }

    return (
        <div className="modal fade popups conslt-popup " id="exampleModal"
        tabindex="-1"
        aria-hidden="true" >
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-header">
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                </div>
                <div className="modal-body">
                    <div className="contact-form-one popup">
                        <div className="c-form-2">
                            <h3>Start Consulting</h3>
                            <div className="parallax" style={{ backgroundImage: 'url(assets/images/pattren.png)' }} />
                            <form action='#'>
                                <div className="row g-0">
                                    <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} className="form-control" id="exampleInputText1" placeholder="Full Name" />
                                </div>
                                <div className="row g-0">
                                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" placeholder="Email Address" />
                                </div>
                                <div className="row g-0">
                                    <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder="Phone No" />
                                </div>
                                <div className="row g-0">
                                    <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder="Subject" />
                                </div>
                                <div className="row g-0">
                                    <textarea value={question} onChange={(e) => setQuestion(e.target.value)} placeholder="Question / Message?" defaultValue={""} />
                                </div>
                                <button type="submit"  onClick={handleSubmit} className="theme-btn">
                                    Submit Now <i className="fas fa-angle-double-right" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}


export default Popup;
