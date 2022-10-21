import React from 'react'
import '../App.css'

export default function under() {
    return (
        <div>
            <div className="overlay" />
            <div className="stars" aria-hidden="true" />
            <div className="starts2" aria-hidden="true" />
            <div className="stars3" aria-hidden="true" />
            <main className="main">
                <section className="contact">
                    <h1 className="title">Awesome Thing</h1>
                    <h2 className="sub-title">Site Under Construction</h2>
                    <div className="contacts">
                        <h3> Contact Us</h3>
                        <div className="email">
                            <h3> Email: -support@paving-plus.com</h3>
                        </div>
                        <div className="Phone">
                            <h3>Phone No.: - +91 88252 17361</h3>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}
