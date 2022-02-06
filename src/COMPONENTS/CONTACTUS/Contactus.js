import React from 'react'
import './contactus.css';
import { FaPhone,FaEnvelope,FaMapMarkerAlt,FaTwitter,FaInstagram,FaFacebook,FaYoutube } from 'react-icons/fa';
function Contact_us() {
    return (
        
          <body className='body-contactus'>
           <div>
           <h1 className='h1-contactus'>Contact US</h1>
      <p className="sub-title-contactus" >Any question or remarks? Just write us a message!</p>

      <div className="contact-container-contactus">
        <div className="contact-info-contactus">
          <h4 className="h4-contactus">
            Contact Information
          </h4>
          <p className='p-contactus'>Fill up the form and our team will get back</p>
          <div className="icon-text-contactus">
            < FaPhone className='fa-contactus'/>
            <span className='span-contactus'>123456789</span>
          </div>
          <div className="icon-text-contactus">
          < FaEnvelope className='fa-contactus'/>
            <span className='span-contactus'>addyourmail.gmail.com</span>
          </div>
          <div className="icon-text-contactus">
          < FaMapMarkerAlt className='fa-contactus'/>
            <span className='span-contactus'>Aashraya main office address</span>
          </div>
          <div className="social-media-contactus">
            <a href="#" className="icon-circle-contactus">
            < FaTwitter className='fab-contactus'/>
            </a>
            <a href="#" className="icon-circle-contactus">
            < FaInstagram className='fab-contactus'/>
            </a>
            <a href="#" className="icon-circle-contactus">
            < FaFacebook className='fab-contactus'/>

            </a>
            <a href="#" className="icon-circle-contactus">
            < FaYoutube className='fab-contactus'/>
            </a>
          </div>
        </div>
        <form>
          <div className="col-contactus">
            <div className="form-group-contactus">
              <label className='label-contactus'>First Name</label>
              <input className='input-contactus' type="text" />
            </div>
            <div className="form-group-contactus">
              <label className='label-contactus'>Last Name</label>
              <input className='input-contactus'type="text" />
            </div>
          </div>
          <div className="col-contactus">
            <div className="form-group-contactus">
              <label className='label-contactus'>E-Mail</label>
              <input className='input-contactus' type="email" />
            </div>
            <div className="form-group-contactus">
              <label className='label-contactus'>Phone</label>
              <input className='input-contactus' type="tel" />
            </div>
          </div>
          <div className="col-contactus">
            <div className="form-group-contactus">
              <label className='label-contactus'>Write Your message </label>

              <textarea className='textarea-contactus'></textarea>

            </div>


          </div>
          <div className="form-group-contactus right-contactus">
            <button className="button-contactus">Send message</button>

          </div>
        </form>
      </div >
      </div>
      </body>
       
    )
}

export default Contact_us