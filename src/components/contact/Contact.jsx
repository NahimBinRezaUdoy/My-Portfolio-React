import React from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {RiWhatsappFill} from 'react-icons/ri'
const contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>nahimbinrezaudoy@gmail.com</h5>
            <a href="mailto:nahimbinrezaudoy@gmail.com" target='_blank' className='btn'>Send a message</a>
          </article>
          <article className='contact__option'>
            <BsMessenger className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Nahim Bin Reza Udoy</h5>
            <a href="https://www.messenger.com/t/100009986735633" target='_blank' className='btn'>Send a message</a>
          </article>
          <article className='contact__option'>
            <RiWhatsappFill className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>01724191079</h5>
            <a href="https://api.whatsapp.com/send?phone=+88001724191079" target='_blank' className='btn'>Send a message</a>
          </article>
        </div>
        {/* End of Contact Options */}

        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default contact