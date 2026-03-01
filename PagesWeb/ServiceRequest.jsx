import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";

function ServiceRequest() {
   
  let {id}=useParams()
    let apiUrl = "http://localhost:5000";

  let [serviceData,setServiceData]=useState({
bookingId:id,
serviceType:"",
message:""


  })
  
let [alert,setAlert]=useState({
  status:true,
  message:""
})


let handleInputOnChange=(e)=>{

let {name,value}=e.target
setServiceData((prev)=>{
return{
  ...prev,
[name]:value
}
})
}


let handleServiceSubmit=async()=>{

if(serviceData.serviceType==""){
setAlert({
  status:false,
  message:"Select Service Type"
})
}else if(serviceData.message==""){
setAlert({
  status:false,
  message:"Message Empty"
})
}else{
try{
  let res=await axios.post(`${apiUrl}/request/servicerequest`,serviceData)
  if(res.data.success){
    setAlert(
      {
        status:res.data.success,
        message:"Request Sent"
      }
    )
  }
}catch(err){

    setAlert(
      {
        status:false,
        message:err.response.data.message
      }
    )

}




}



}


  return (

<>

<>
  {/* page header */}
  <div
    className="rts__section page__hero__height page__hero__bg"
    style={{ backgroundImage: "url(/imgs/pages/header__bg.webp)" }}
  >
    <div className="container">
      <div className="row align-items-center justify-content-center">
        <div className="col-lg-12">
          <div className="page__hero__content">
            <h1 className="wow fadeInUp">Request A Service</h1>
            <p className="wow fadeInUp font-sm">
              {/* Welcome to Bokinn, where luxury meets comfort in the heart of
              canada. */}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* page header end */}
</>


{/* feedback section */}
<div className="container my-5">
  <div className="row justify-content-center">
    <div className="col-lg-8">

      <div className="card shadow-sm border-0">
        <div className="card-body p-4">

          <h3 className="text-center mb-2">Request Service</h3>
          <p className="text-center text-muted mb-4">
            We Will Be There For You !
          </p>

          
            <div className="row">
              <div className="col-md-12">
                <label className="form-label">Service Type</label>
                <select name="serviceType" id=""  className="form-control" onChange={handleInputOnChange}>

<option value="">Choose Service Type</option>

<option value="Cleaning">Cleaning</option>
<option value="Pick & Drop">Pick & Drop</option>
<option value="Maintance">Maintance</option>

                </select>
              </div>

              <div className="col-md-12 ">
                <label className="form-label">Message</label>
<textarea name="message" id="" className="form-control" onChange={handleInputOnChange}></textarea>
              </div>
            </div>


            <div className="text-center">
              <button type="submit" className="btn btn-primary px-5" onClick={handleServiceSubmit}>
                Send Request
              </button>
            </div>
          
 <div className="col-lg-12 my-3">
                    {alert.message && (
        <div
          className={`alert ${alert.status ? "alert-success" : "alert-danger"}`}
          role="alert"
        >
          {alert.message}
        </div>
      )}
          </div>


        </div>
      </div>

    </div>
  </div>
</div>
{/* feedback section end */}




  {/* client testimonial */}
      <div className="rts__section client__testimonial is__home__two has__background has__shape py-90">
        <div className="section__shape">
          <img src="/imgs/shape/testimonial__two.png" alt="" />
          <div className="shape__two">
            <img src="/imgs/shape/testimonial__two-2.png" alt="" />
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center text-center mb-40">
            <div className="col-lg-6 wow fadeInUp">
              <div className="section__topbar is__home__two">
                <span className="h6 subtitle__icon__three mx-auto text-white">
                  Testimonial
                </span>
                <h2 className="section__title text-white">
                  What Our Client Say
                </h2>
              </div>
            </div>
          </div>
          <div className="row position-relative justify-content-center ">
            <div className="col-lg-10">
              <div
                className="testimonial__slider overflow-hidden wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="swiper-wrapper">
                  {/* single slider item */}
                  <div className="swiper-slide">
                    <div className="single__slider__item is__home ">
                      <div className="slider__rating mb-30">
                        <i className="flaticon-star" />
                        <i className="flaticon-star" />
                        <i className="flaticon-star" />
                        <i className="flaticon-star" />
                        <i className="flaticon-star-sharp-half-stroke" />
                      </div>
                      <span className="slider__text d-block">
                        Choosing Bokinn was one of the best decisions we've ever
                        made. They have proven to be a reliable and innovative
                        partner, always ready to tackle new challenges with and
                        expertise.Their commitment to and delivering tailored.
                      </span>
                      <div className="slider__author__info">
                        <div className="slider__author__info__image">
                          <img src="/imgs/author/author-2.webp" alt="" />
                        </div>
                        <div className="slider__author__info__content">
                          <h6 className="mb-0">Alex Smith</h6>
                          <span>Reactheme Solutions</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* single slider item end */}
                  {/* single slider item */}
                  <div className="swiper-slide">
                    <div className="single__slider__item is__home ">
                      <div className="slider__rating mb-30">
                        <i className="flaticon-star" />
                        <i className="flaticon-star" />
                        <i className="flaticon-star" />
                        <i className="flaticon-star" />
                        <i className="flaticon-star-sharp-half-stroke" />
                      </div>
                      <span className="slider__text d-block">
                        Choosing Bokinn was one of the best decisions we've ever
                        made. They have proven to be a reliable and innovative
                        partner, always ready to tackle new challenges with and
                        expertise.Their commitment to and delivering tailored.
                      </span>
                      <div className="slider__author__info">
                        <div className="slider__author__info__image">
                          <img src="/imgs/author/author-1.png" alt="" />
                        </div>
                        <div className="slider__author__info__content">
                          <h6 className="mb-0">Sarah Martinez</h6>
                          <span>COO of Apex Solutions</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* single slider item end */}
                  {/* single slider item */}
                  <div className="swiper-slide">
                    <div className="single__slider__item is__home ">
                      <div className="slider__rating mb-30">
                        <i className="flaticon-star" />
                        <i className="flaticon-star" />
                        <i className="flaticon-star" />
                        <i className="flaticon-star" />
                        <i className="flaticon-star-sharp-half-stroke" />
                      </div>
                      <span className="slider__text d-block">
                        Choosing Bokinn was one of the best decisions we've ever
                        made. They have proven to be a reliable and innovative
                        partner, always ready to tackle new challenges with and
                        expertise.Their commitment to and delivering tailored.
                      </span>
                      <div className="slider__author__info">
                        <div className="slider__author__info__image">
                          <img src="/imgs/author/author-1.png" alt="" />
                        </div>
                        <div className="slider__author__info__content">
                          <h6 className="mb-0">Sarah Martinez</h6>
                          <span>COO of Apex Solutions</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* single slider item end */}
                </div>
              </div>
            </div>
            <div className="full__width__nav">
              <div className="rts__slide">
                <div className="next slider-button-prev">
                  <svg
                    width={41}
                    height={22}
                    viewBox="0 0 41 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.25536 9.75546H39.0408C39.7335 9.75546 40.2931 10.3151 40.2931 11.0078C40.2931 11.7005 39.7335 12.2601 39.0408 12.2601H4.28054L11.8807 19.8603C12.3699 20.3495 12.3699 21.1439 11.8807 21.6331C11.3915 22.1223 10.597 22.1223 10.1078 21.6331L0.366985 11.8923C0.00693893 11.5322 -0.098732 10.9961 0.0969467 10.5264C0.292625 10.0607 0.750515 9.75546 1.25536 9.75546Z"
                      fill="#65676B"
                    />
                    <path
                      d="M11.0079 0.0028038C11.3288 0.0028038 11.6497 0.124125 11.8924 0.370679C12.3816 0.859874 12.3816 1.65432 11.8924 2.14352L2.13979 11.8961C1.6506 12.3853 0.856151 12.3853 0.366956 11.8961C-0.122239 11.4069 -0.122239 10.6125 0.366956 10.1233L10.1195 0.370679C10.3661 0.124125 10.687 0.0028038 11.0079 0.0028038Z"
                      fill="#65676B"
                    />
                  </svg>
                </div>
              </div>
              <div className="rts__slide">
                <div className="prev slider-button-next">
                  <svg
                    width={41}
                    height={22}
                    viewBox="0 0 41 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M39.0374 12.2499L1.25198 12.245C0.55928 12.2449 -0.000286104 11.6852 -0.000196778 10.9925C-0.000107452 10.2998 0.559603 9.74024 1.2523 9.74033L36.0125 9.74481L28.4134 2.14371C27.9242 1.65445 27.9243 0.859997 28.4136 0.370865C28.9029 -0.118267 29.6973 -0.118164 30.1864 0.371094L39.926 10.1132C40.286 10.4733 40.3916 11.0095 40.1959 11.4791C40.0001 11.9447 39.5422 12.2499 39.0374 12.2499Z"
                      fill="#65676B"
                    />
                    <path
                      d="M29.2835 22.0013C28.9626 22.0012 28.6417 21.8799 28.3991 21.6333C27.9099 21.144 27.91 20.3496 28.3993 19.8604L38.1531 10.1091C38.6424 9.61998 39.4368 9.62008 39.926 10.1093C40.4151 10.5986 40.415 11.393 39.9257 11.8822L30.1719 21.6335C29.9253 21.88 29.6044 22.0013 29.2835 22.0013Z"
                      fill="#65676B"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* client testimonial end */}


      {/* newsletter section */}
      <div className="rts__section section__padding">
        <div className="container">
          <div className="row">
            <div className="footer__newsletter is__separate wow fadeInUp">
              <span className="h2 mb-0">Join Our Newsletter</span>
              <div className="rts__form">
                <form action="#" method="post">
                  <input
                    type="email"
                    name="email"
                    id="subscription"
                    placeholder="Enter your mail"
                    required=""
                  />
                  <button type="submit">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* newsletter section end */}


</>


      );
}

export default ServiceRequest;