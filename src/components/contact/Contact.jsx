import React, { useState } from 'react'
import contact from '../../images/contact.jpeg'
import './contact.scss'

const Contact = () => {

    const [message, setMessage] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true)
    }

    return (
        <div className='contact' id='contact'>
            <div className="left">
                <img src={contact} alt="" />
            </div>
            <div className="right">
                <h2>Contact.</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='Email' />
                    <textarea placeholder='Message'></textarea>
                    <button href='mailto:cuba289@gmail.com' type='submit'>Send</button>
                    {message && <span id='message'>Thank you for leaving a message, I'll get back to you ASAP :)</span>}
                </form>
            </div>
        </div>
    )
}

export default Contact
