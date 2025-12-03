import React, { useState, useEffect } from 'react'
import './contact.css'
import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md'
import { FaTelegram, FaLinkedin, FaPaperPlane } from 'react-icons/fa'
import { RiWhatsappFill } from 'react-icons/ri'
import { BsCheckCircleFill, BsMessenger } from 'react-icons/bs'

// Import EmailJS
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  // Initialize EmailJS with your public key
  useEffect(() => {
    emailjs.init('3_qGl_CIp96g-6syi')
  }, [])

  // Your EmailJS credentials
  const serviceId = 'service_ysg27lu'
  const templateId = 'template_7uk2eih'
  const publicKey = '3_qGl_CIp96g-6syi'

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    setIsSubmitting(true)
    
    try {
      // Send email using EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'nahimbinrezaudoy@gmail.com',
        reply_to: formData.email
      }
      
      console.log('Sending email with params:', templateParams)
      console.log('Using service ID:', serviceId)
      console.log('Using template ID:', templateId)
      
      const result = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      )
      
      console.log('Email sent successfully:', result)
      
      // Show success message
      setIsSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
      
    } catch (error) {
      console.error('EmailJS Error:', error)
      
      // Try FormSubmit.co as fallback
      try {
        console.log('Trying FormSubmit.co fallback...')
        await sendWithFormSubmit()
        
        setIsSubmitted(true)
        setFormData({ name: '', email: '', message: '' })
        
        setTimeout(() => {
          setIsSubmitted(false)
        }, 5000)
        
      } catch (formSubmitError) {
        console.error('FormSubmit Error:', formSubmitError)
        
        // Final fallback to mailto
        alert('Opening your email client. Please click send to complete the message.')
        const subject = `New Contact Form Message from ${formData.name}`
        const body = `
Name: ${formData.name}
Email: ${formData.email}
Message: ${formData.message}

This message was sent from your portfolio website contact form.
        `.trim()
        
        window.location.href = `mailto:nahimbinrezaudoy@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
        
        // Still show success message since we opened mail client
        setIsSubmitted(true)
        setFormData({ name: '', email: '', message: '' })
        
        setTimeout(() => {
          setIsSubmitted(false)
        }, 3000)
      }
      
    } finally {
      setIsSubmitting(false)
    }
  }

  const sendWithFormSubmit = async () => {
    const response = await fetch('https://formsubmit.co/ajax/nahimbinrezaudoy@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message,
        _subject: `New Portfolio Message from ${formData.name}`,
        _template: 'table',
        _captcha: 'false'
      })
    })
    
    if (!response.ok) {
      throw new Error('FormSubmit request failed')
    }
    
    const result = await response.json()
    
    if (!result.success) {
      throw new Error('FormSubmit response not successful')
    }
    
    return true
  }

  const contactInfo = [
    {
      id: 1,
      icon: <MdEmail />,
      title: 'Email',
      details: 'nahimbinrezaudoy@gmail.com',
      link: 'mailto:nahimbinrezaudoy@gmail.com',
      color: '#EA4335'
    },
    {
      id: 2,
      icon: <BsMessenger />,
      title: 'Messenger',
      details: 'Nahim Bin Reza Udoy',
      link: 'https://m.me/100009986735633',
      color: '#006AFF'
    },
    {
      id: 3,
      icon: <RiWhatsappFill />,
      title: 'WhatsApp',
      details: '+880 1724-191079',
      link: 'https://wa.me/8801724191079',
      color: '#25D366'
    },
    {
      id: 4,
      icon: <FaTelegram />,
      title: 'Telegram',
      details: '@NahimUdoy',
      link: 'https://t.me/NahimUdoy',
      color: '#0088cc'
    }
  ]

  const quickReach = [
    {
      id: 1,
      icon: <MdLocationOn />,
      title: 'Location',
      value: 'Dhaka, Bangladesh',
      color: '#FF6B6B'
    },
    {
      id: 2,
      icon: <MdPhone />,
      title: 'Phone',
      value: '+880 1724-191079',
      color: '#4ECDC4'
    },
    {
      id: 3,
      icon: <FaLinkedin />,
      title: 'LinkedIn',
      value: 'Nahim Bin Reza Udoy',
      link: 'https://linkedin.com/in/nahim-udoy',
      color: '#0077B5'
    }
  ]

  return (
    <section id='contact'>
      <div className="container">
        <div className="contact__header">
          <h5>Let's Connect</h5>
          <h2>Get In Touch</h2>
          <p className="contact__subtitle">
            Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        <div className="contact__container">
          {/* Left Side: Contact Cards */}
          <div className="contact__info">
            <div className="contact__cards">
              {contactInfo.map((item) => (
                <a 
                  key={item.id} 
                  href={item.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="contact__card"
                  style={{ '--card-color': item.color }}
                >
                  <div className="card__icon" style={{ background: item.color }}>
                    {item.icon}
                  </div>
                  <div className="card__content">
                    <h4>{item.title}</h4>
                    <p>{item.details}</p>
                    <span className="card__action">
                      Send Message <FaPaperPlane className="action__icon" />
                    </span>
                  </div>
                </a>
              ))}
            </div>

            {/* Quick Reach Section */}
            <div className="quick__reach">
              <h3>Quick Reach</h3>
              <div className="reach__items">
                {quickReach.map((item) => (
                  item.link ? (
                    <a 
                      key={item.id} 
                      href={item.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="reach__item"
                    >
                      <div className="reach__icon" style={{ color: item.color }}>
                        {item.icon}
                      </div>
                      <div className="reach__content">
                        <span className="reach__title">{item.title}</span>
                        <span className="reach__value">{item.value}</span>
                      </div>
                    </a>
                  ) : (
                    <div key={item.id} className="reach__item">
                      <div className="reach__icon" style={{ color: item.color }}>
                        {item.icon}
                      </div>
                      <div className="reach__content">
                        <span className="reach__title">{item.title}</span>
                        <span className="reach__value">{item.value}</span>
                      </div>
                    </div>
                  )
                ))}
              </div>
            </div>

            {/* Response Time Card */}
            <div className="response__card">
              <div className="response__header">
                <BsCheckCircleFill className="response__icon" />
                <h4>Quick Response</h4>
              </div>
              <p>I typically respond within 2-4 hours during business days</p>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="contact__form">
            <div className="form__header">
              <h3>Send Me a Message</h3>
              <p>Fill out the form below and I'll get back to you as soon as possible</p>
            </div>

            {isSubmitted ? (
              <div className="success__message">
                <BsCheckCircleFill className="success__icon" />
                <h4>Message Sent Successfully!</h4>
                <p>Thank you for reaching out. I'll get back to you within 24 hours.</p>
                <button 
                  className="back__btn"
                  onClick={() => setIsSubmitted(false)}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form__group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? 'error' : ''}
                    required
                  />
                  {errors.name && <span className="error__message">{errors.name}</span>}
                </div>

                <div className="form__group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? 'error' : ''}
                    required
                  />
                  {errors.email && <span className="error__message">{errors.email}</span>}
                </div>

                <div className="form__group">
                  <label htmlFor="message">Your Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Tell me about your project, timeline, and budget..."
                    value={formData.message}
                    onChange={handleChange}
                    className={errors.message ? 'error' : ''}
                    required
                  />
                  {errors.message && <span className="error__message">{errors.message}</span>}
                </div>

                <button 
                  type="submit" 
                  className="submit__btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner"></span>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <FaPaperPlane className="btn__icon" />
                    </>
                  )}
                </button>
              </form>
            )}

            <div className="form__footer">
              <p>All fields marked with * are required</p>
              <p>Your information is secure and will never be shared</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact