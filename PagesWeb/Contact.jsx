import axios from "axios";
import { useState } from "react";

function Contact() {
    const [contact,setContact] = useState({
        name: "",
        email: "",
        phone: "",
        city: "",
        message: ""
    })
    const [alert,setAlert] = useState({
        success: true,
        message: ""
    })

      let apiUrl = "http://localhost:5000";

    const handleContactInputChange =(e)=>{
    
        let {name,value} = e.target;
        setContact((prev)=>{
            return {
                 ...prev,
                 [name]: value,
            } ;    
        });
    }

    const handleConatctSubmit = async (e)=>{
          e.preventDefault();
        try{

     let res =  await axios.post(`${apiUrl}/contact`,contact)
      console.log(res);

      if(res.data.success){
        setAlert({
            success: true,
            message: "Submit Successfully"
        })
      }

        setContact({
        name: "",
        email: "",
        phone: "",
        city: "",
        message: ""
      });
        }
   catch(err){
    console.log(err);
    setAlert({
        success:false,
        message: err.response?.data?.message || "Something went wrong"
    })
    
   }
    
      
    }
    
    
    return ( 
    <>
    <>
  {/* page header */}
  <div
    className="rts__section page__hero__height page__hero__bg"
    style={{ backgroundImage: "url(imgs/pages/header__bg.webp)" }}
  >
    <div className="container">
      <div className="row align-items-center justify-content-center">
        <div className="col-lg-12">
          <div className="page__hero__content">
            <h1 className="wow fadeInUp">Contact Us</h1>
            <p className="wow fadeInUp font-sm">
              Whether you have questions, need assistance, or simply want to
              share.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* page header end */}
  {/* contact area */}
  <div className="rts__section section__padding">
    <div className="container">
      <div className="row g-30 align-items-center">
        <div className="col-lg-6">
          <div className="rts__contact">
            <span className="h4 d-block mb-30 text-center">
              Love to hear from you Get in touch!
            </span>
            <form
              className="rts__contact__form"
              id="contact-form"
            >
                {alert.message && (
           <p style={{ color: alert.success ? "green" : "red" }}>
           {alert.message}
          </p>
                 )}

              <div className="form-input">
                <label>Your Name</label>
                <div className="pr">
                  <input
                    type="text" value={contact.name} name="name" onChange={handleContactInputChange} placeholder="Your Name"/>
                  <i className="flaticon-user" />
                </div>
              </div>
              <div className="form-input">
                <label>Your Email</label>
                <div className="pr">
                  <input
                    type="email" value={contact.email} name="email" onChange={handleContactInputChange} placeholder="Your Email"/>
                  <i className="flaticon-envelope" />
                </div>
              </div>
              <div className="form-input">
                <label>Phone</label>
                <div className="pr">
                  <input
                    type="number" value={contact.phone} name="phone" onChange={handleContactInputChange} placeholder="Your Phone Number" />
                </div>
              </div>
                <div className="form-input">
                <label htmlFor="email">City</label>
                <div className="pr">
                  <input
                    type="text" value={contact.city} name="city" onChange={handleContactInputChange} placeholder="Your City"/>
                </div>
              </div>
              <div className="form-input">
                <label>Your Message</label>
                <div className="pr">
                  <textarea name="message" value={contact.message} onChange={handleContactInputChange} placeholder="Message"/>
                  <img
                    src="imgs/icon/message.svg"
                    width={20}
                    height={20}
                    alt=""
                  />
                </div>
              </div>
              <button onClick={handleConatctSubmit} type="button" className="theme-btn btn-style fill w-100">
                <span>Send</span>
              </button>
            </form>
            <div id="form-messages" className="mt-20" />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="contact__image">
            <img
              className="rounded-2 w-100 img-fluid"
              src="imgs/pages/contact.webp"
              width={645}
              height={560}
              alt="contact__image"
            />
          </div>
        </div>
      </div>
    </div>
    <div className="container pt-120">
      <div className="row g-30 align-items-center">
        <div className="col-lg-6">
          <div className="contact__map">
            <iframe
              className="w-100"
              height={560}
              src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=phuket+(My%20Business%20Name)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
            />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="contact__info">
            <div className="contact__info__item">
              <h4>Hotel Info Center</h4>
              <p>
                Open Hours: Monday – Sunday <br />
                Telephone:&nbsp;+12505550199 <br />
                Fax: +12505550199 <br />
                Email:&nbsp;info@moonlit.com
              </p>
            </div>
            <div className="contact__info__item">
              <h4>Hotel location</h4>
              <p>
                Address: The Ritz-Carlton (California, USA) <br />
                Telephone:&nbsp;+12505550199 <br />
                Fax: +12505550199 <br />
                Email:&nbsp;info@moonlit.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* contact area end */}
</>

    </>
     );
}

export default Contact;