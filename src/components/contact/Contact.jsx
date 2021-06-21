import React from "react";
import contact from "../../images/contact.jpeg";
import { useForm, ValidationError } from "@formspree/react";
import "./contact.scss";

const Contact = () => {
  const [state, handleSubmit] = useForm("mqkwbodw");
  if (state.succeeded) {
    return <h1>Thanks for joining!</h1>;
  }
  // const [message, setMessage] = useState(false)

  // const handleSubmit = (e) => {
  //     e.preventDefault();
  //     setMessage(true)
  // }

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src={contact} alt="" />
      </div>
      <div className="right">
          <h2>Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email Address</label>
          <input id="email" type="email" name="email" placeholder='Email' />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <textarea id="message" name="message" placeholder='Message' />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button type="submit" disabled={state.submitting}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

{
  /* <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Email' />
        <textarea placeholder='Message'></textarea>
        <button href='mailto:cuba289@gmail.com' type='submit'>Send</button>
    {message && <span id='message'>Thank you for leaving a message, I'll get back to you ASAP :)</span>} 
     </form> */
}
export default Contact;
