import React from 'react'
import './contact.scss'

const Contact = () => {
    return (
        <div className='contact' id='contact'>
            <div className="left">
                
            </div>
            <div className="right">
                <h2>Contact.</h2>
                <form action="">
                    <input type="text" placeholder='Email' />
                    <textarea placeholder='Message'></textarea>
                    <button type='submit'></button>
                </form>
            </div>
        </div>
    )
}

export default Contact
