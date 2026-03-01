import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
function Home() {
  let apiUrl = "http://localhost:5000";

  let [roomList, setRoomList] = useState([]);
    const [feedbacks, setFeedbacks] = useState([]);
  
let navigate=useNavigate()
  const fetchRooms = async () => {
  try
  {
      let res = await axios.get(`${apiUrl}/rooms/showrooms`);
    console.log(res);
    if (res.data.success) {
      setRoomList(res.data.roomsList)
      console.log("Rooms Fetched");
    }
    // else block isliye nahi rakha kio k agar res.status.success false hota hai toh api mai res.status mai err ka code pass kia hua hai or err hamesha catch mai aata hai
  }catch(err){
  console.log(err.response.data.message);

  }
  
  
  };


let navigateToRoomDetail=(roomId)=>{

navigate(`/roomdetail/${roomId}`)

}



// ==================== Fetch Feed Back For testimonial=================

    const fetchFeedbacks = async () => {
      try {
        const res = await axios.get(`${apiUrl}/feedback`);
        if (res.data.success) {
          setFeedbacks(res.data.feedback);
        }
      } catch (err) {
        console.error("Error fetching feedbacks:", err);
      }
    };



useEffect(()=>{

fetchRooms()
fetchFeedbacks()

},[])


  return (
    <>
      {/* banner area */}
      <div className="rts__section banner__area is__home__two banner__height banner__center">
        <div className="banner__content">
          <div className="banner__slider__image">
            <img src="/imgs/banner/slides-2.webp" alt="" />
          </div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="banner__slide__content">
                  <h1 className="wow fadeInUp">
                    Luxury Stay Hospitality Experience Comfort &amp; Elegance
                  </h1>
                  <div className="banner__slide__content__info">
                    <div className="item wow fadeInUp" data-wow-delay=".3s">
                      <span className="h2 d-block">30+</span>
                      <p>Hotel Room</p>
                    </div>
                    <div className="item wow fadeInUp" data-wow-delay=".5s">
                      <span className="h2 d-block">20+</span>
                      <p>Pool &amp; Spa Center</p>
                    </div>
                    <div className="item wow fadeInUp" data-wow-delay=".7s">
                      <span className="h2 d-block">50+</span>
                      <p>Experience Staff</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* banner area end */}
      {/* advance search */}
      <div
        className="rts__section advance__search__section is__home__one wow fadeInUp"
        data-wow-delay=".5s"
      >
        <div className="container">
          <div className="row">
            <form
              action="https://html.themewant.com/moonlit/room-two.html"
              method="post"
              className="advance__search"
            >
              <div className="advance__search__wrapper wow fadeInUp">
                {/* single input */}
                <div className="query__input">
                  <label htmlFor="check__in" className="query__label">
                    Check In
                  </label>
                  <input
                    type="text"
                    id="check__in"
                    name="check__in"
                    placeholder="15 Jun 2024"
                    required=""
                  />
                  <div className="query__input__icon">
                    <i className="flaticon-calendar" />
                  </div>
                </div>
                {/* single input end */}
                {/* single input */}
                <div className="query__input">
                  <label htmlFor="check__out" className="query__label">
                    Check Out
                  </label>
                  <input
                    type="text"
                    id="check__out"
                    name="check__out"
                    placeholder="15 May 2024"
                    required=""
                  />
                  <div className="query__input__icon">
                    <i className="flaticon-calendar" />
                  </div>
                </div>
                {/* single input end */}
                {/* single input */}
                <div className="query__input">
                  <label htmlFor="adult" className="query__label ">
                    Adult
                  </label>
                  <select name="adult" id="adult" className="form-select">
                    <option value={1}>1 Person</option>
                    <option value={2}>2 Person</option>
                    <option value={3}>3 Person</option>
                    <option value={4}>4 Person</option>
                    <option value={5}>5 Person</option>
                    <option value={6}>6 Person</option>
                    <option value={7}>7 Person</option>
                    <option value={8}>8 Person</option>
                    <option value={9}>9 Person</option>
                  </select>
                  <div className="query__input__icon">
                    <i className="flaticon-user" />
                  </div>
                </div>
                {/* single input end */}
                {/* single input */}
                <div className="query__input">
                  <label htmlFor="child" className="query__label ">
                    Child
                  </label>
                  <select name="child" id="child" className="form-select">
                    <option value={1}>1 Child</option>
                    <option value={2}>2 Child</option>
                    <option value={3}>3 Child</option>
                    <option value={4}>4 Child</option>
                    <option value={5}>5 Child</option>
                    <option value={6}>6 Child</option>
                    <option value={7}>7 Child</option>
                    <option value={8}>8 Child</option>
                    <option value={9}>9 Child</option>
                  </select>
                  <div className="query__input__icon">
                    <i className="flaticon-user" />
                  </div>
                </div>
                {/* single input end */}
                {/* submit button */}
                <button className="theme-btn btn-style fill no-border search__btn">
                  <span>Check Now</span>
                </button>
                {/* submit button end */}
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* advance search end */}
      {/* about us */}
      <div className="rts__section about__area is__home__two section__padding">
        <div className="section__shape">
          <img src="/imgs/about/section__shape.svg" alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="about__wrapper">
              <div className="content">
                <span className="h6 subtitle__icon__two d-block wow fadeInUp">
                  About Us
                </span>
                <h2 className="content__title wow fadeInUp">
                  Welcome To Our Moonlit Hotel &amp; Resort
                </h2>
                <p
                  className="content__subtitle wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  Welcome to Bokinn, where luxury meets comfort in the heart of
                  canada. Since 1999, we have been dedicated to providing an
                  exceptional stay for our guests, blending modern amenities
                  with timeless elegance.Our beautifully designed rooms and
                  suites offer stunning views and plush accommodations, ensuring
                  a restful retreat whether you're here for business or leisure.
                </p>
                <a
                  href="#"
                  className="theme-btn btn-style fill no-border wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <span>Learn More</span>
                </a>
              </div>
              <div className="image ">
                <div className="position-relative ">
                  <div className="jara-mask-1 jarallax image-height">
                    <img
                      src="/imgs/about/about-2.webp"
                      className="jarallax-img"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* about us end */}
      {/* facilities */}
      <div className="rts__section facilities__area has__background has__shape py-90">
        <div className="section__shape">
          <img src="/imgs/shape/facility-1.svg" alt="" />
        </div>
        <div className="container">
          <div className="row justify-content-center text-center mb-40">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
              <div className="section__topbar">
                <span className="h6 subtitle__icon__three mx-auto">
                  Facilities
                </span>
                <h2 className="section__title">Hotel Facilities</h2>
              </div>
            </div>
          </div>
          <div className="row g-4 wow fadeInUp" data-wow-delay=".5s">
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div className="card rts__card no-border is__home radius-6">
                <div className="card-body">
                  <div className="icon">
                    <img src="/imgs/icon/bed.svg" alt="" />
                  </div>
                  <a href="#">
                    <h6 className="card-title h6 mb-15">Rooms and Suites</h6>
                  </a>
                  <p className="card-text">
                    Varied types of rooms, from standard to luxury suites,
                    equipped with essentials like beds.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div className="card rts__card no-border is__home radius-6">
                <div className="card-body">
                  <div className="icon">
                    <img src="/imgs/icon/security.svg" alt="" />
                  </div>
                  <a href="#">
                    <h6 className="card-title h6 mb-15">24-Hour Security</h6>
                  </a>
                  <p className="card-text">
                    On-site security personnel and best surveillance. from
                    standard to luxury suites,Secure storage for valuables.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div className="card rts__card no-border is__home radius-6">
                <div className="card-body">
                  <div className="icon">
                    <img src="/imgs/icon/gym.svg" alt="" />
                  </div>
                  <a href="#">
                    <h6 className="card-title h6 mb-15">Fitness Center</h6>
                  </a>
                  <p className="card-text">
                    Equipped with exercise machines and weights.Offering
                    massages, facials, and other treatments.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div className="card rts__card no-border is__home radius-6">
                <div className="card-body">
                  <div className="icon">
                    <img src="/imgs/icon/swimming-pool.svg" alt="" />
                  </div>
                  <a href="#">
                    <h6 className="card-title h6 mb-15">Swimming Pool</h6>
                  </a>
                  <p className="card-text">
                    Indoor or outdoor pools for leisure or exercise.Offering
                    massages, facials, and other treatments
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* facilities end */}
      {/* our room */}
      <div className="rts__section section__padding">
        <div className="container">
          <div className="row">
            <div className="section__wrapper mb-40  wow fadeInUp">
              <div className="section__content__left">
                <span className="h6 subtitle__icon__two d-block wow fadeInUp">
                  Room
                </span>
                <h2 className="content__title h2 lh-1">Our Rooms</h2>
              </div>
              <div className="section__content__right">
                <p>
                  Our rooms offer a harmonious blend of comfort and elegance,
                  designed to provide an exceptional stay for every guest. Each
                  room features plush bedding, high-quality linens, and a
                  selection of pillows to ensure a restful night's sleep.
                </p>
              </div>
            </div>
          </div>
          {/* row end */}
    
          <div className="row">
  
 

 <div className="row g-4">
    {roomList.slice(0,6).map((room) => (
      <div key={room._id} className="col-sm-6 col-md-4 col-lg-4">
        <div className="card bg-dark text-white border-0 overflow-hidden">
          <img
            src={room.roomImage ? `${apiUrl}/uploads/${room.roomImage}` : "assets/images/room/default.jpg"}
            className="card-img"
            alt={room.roomName}
            style={{ height: "400px",objectFit: "cover" }}
          />
          <div className="card-img-overlay d-flex flex-column justify-content-end p-3" style={{ background: "rgba(0,0,0,0.4)" }}>
            <h5 className="card-title text-light text-center">{room.roomName}</h5>
            <p className="card-text mb-0  text-light text-center "><strong>Price: </strong>${room.roomPrice}</p>
<button className="btn btn-outline-light" onClick={()=>{navigateToRoomDetail(room._id)}}>View Room</button>

          </div>
        </div>
      </div>
    ))}
  </div>


          </div>
        </div>
      </div>
      {/* our room end */}



================================================




===============================================


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
       {feedbacks.slice(0,4).map((fb)=>{

return(
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
                     {fb.comment}
                      </span>
                      <div className="slider__author__info">
                        <div className="slider__author__info__image">
                          <img src="/imgs/author/author-2.webp" alt="" />
                        </div>
                        <div className="slider__author__info__content">
                          <h6 className="mb-0">{fb.userId?.userName || "Jhon Doe"}</h6>
                          {/* <span>Reactheme Solutions</span> */}
                        </div>
                      </div>
                    </div>
                  </div>
)

                 })}
                 
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




      {/* video section start */}
      <div className="rts__section section__padding video has__shape">
        <div className="section__shape">
          <div className="shape__1">
            <img src="/imgs/shape/video-1.svg" alt="" />
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="video__area position-relative wow fadeInUp">
                <div className="video__area__image jara-mask-2 jarallax">
                  <img
                    className="radius-10 jarallax-img"
                    src="/imgs/video/video-bg-2.webp"
                    alt=""
                  />
                </div>
                <div className="video--spinner__wrapper ">
                  <div className="rts__circle">
                    <svg className="spinner" viewBox="0 0 100 100">
                      <defs>
                        <path
                          id="circle-2"
                          d="M50,50 m-37,0a37,37 0 1,1 74,0a37,37 0 1,1 -74,0"
                        />
                      </defs>
                      <text>
                        <textPath xlinkHref="#circle-2">
                          Watch Now * Watch Now * Watch Full Video *
                        </textPath>
                      </text>
                    </svg>
                    <div className="rts__circle--icon">
                      <a
                        href="https://www.youtube.com/watch?v=qOwxqRGHy5Q"
                        className="video-play"
                      >
                        <i className="flaticon-play" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* video section end */}
      {/* special section start */}
      <div className="rts__section offer__area is__home__one has__shape p-0">
        <div className="section__shape">
          <img src="/imgs/offer/section__bg.svg" alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div
              className="section__wrapper mb-40 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="section__content__left">
                <span className="h6 subtitle__icon__two d-block wow fadeInUp">
                  Special Offer
                </span>
                <h2 className="content__title h2 lh-1">Special Offer</h2>
              </div>
              <div className="section__content__right">
                <p>
                  Experience the ultimate in luxury and relaxation with our
                  exclusive special offer! Book your stay now and enjoy 20% off
                  our best available rates.
                </p>
              </div>
            </div>
          </div>
          {/* row end */}
          <div className="row row-60">
            {/* single offer item */}
            <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
              <div className="single__offer">
                <div className="single__offer__image">
                  <img
                    src="/imgs/offer/1.webp"
                    width={310}
                    height={310}
                    alt=""
                  />
                </div>
                <div className="single__offer__content">
                  <a href="#">
                    <h6>Family Fun Package</h6>
                  </a>
                  <ul className="offer__included">
                    <li>
                      <i className="flaticon-check-circle" /> 15% off on family
                      suites
                    </li>
                    <li>
                      <i className="flaticon-check-circle" /> Free meals for
                      kids under 12
                    </li>
                    <li>
                      <i className="flaticon-check-circle" /> Complimentary
                      tickets
                    </li>
                    <li>
                      <i className="flaticon-check-circle" /> The local
                      amusement park
                    </li>
                    <li>
                      <i className="flaticon-check-circle" /> Daily
                      family-friendly activities
                    </li>
                  </ul>
                  <a href="#" className="underline__style">
                    Book Now
                  </a>
                </div>
              </div>
            </div>
            {/* single offer item end */}
            {/* single offer item */}
            <div className="col-lg-6 wow fadeInUp" data-wow-delay=".4s">
              <div className="single__offer">
                <div className="single__offer__image">
                  <img
                    src="/imgs/offer/2.webp"
                    width={310}
                    height={310}
                    alt=""
                  />
                </div>
                <div className="single__offer__content">
                  <a href="#">
                    <h6>Spa Retreat</h6>
                  </a>
                  <ul className="offer__included">
                    <li>
                      <i className="flaticon-check-circle" /> A two-night stay
                      in a premium room
                    </li>
                    <li>
                      <i className="flaticon-check-circle" /> Daily spa
                      treatments
                    </li>
                    <li>
                      <i className="flaticon-check-circle" /> Healthy breakfast
                      and lunch options
                    </li>
                    <li>
                      <i className="flaticon-check-circle" /> Access to all spa
                      facilities
                    </li>
                    <li>
                      <i className="flaticon-check-circle" /> 25% off for stays
                      of 7 nights or more
                    </li>
                  </ul>
                  <a href="#" className="underline__style">
                    Book Now
                  </a>
                </div>
              </div>
            </div>
            {/* single offer item end */}
            {/* single offer item */}
            <div className="col-lg-6 wow fadeInUp" data-wow-delay=".5s">
              <div className="single__offer">
                <div className="single__offer__image">
                  <img
                    src="/imgs/offer/3.webp"
                    width={310}
                    height={310}
                    alt=""
                  />
                </div>
                <div className="single__offer__content">
                  <a href="#">
                    <h6>Business Traveler Special</h6>
                  </a>
                  <ul className="offer__included">
                    <li>
                      <i className="flaticon-check-circle" /> 10% off on
                      executive rooms
                    </li>
                    <li>
                      <i className="flaticon-check-circle" /> Complimentary
                      high-speed Wi-Fi
                    </li>
                    <li>
                      <i className="flaticon-check-circle" /> Access to the
                      business lounge
                    </li>
                    <li>
                      <i className="flaticon-check-circle" /> Free airport
                      shuttle service
                    </li>
                    <li>
                      <i className="flaticon-check-circle" /> Daily
                      family-friendly activities
                    </li>
                  </ul>
                  <a href="#" className="underline__style">
                    Book Now
                  </a>
                </div>
              </div>
            </div>
            {/* single offer item end */}
            {/* single offer item */}
            <div className="col-lg-6 wow fadeInUp" data-wow-delay=".6s">
              <div className="single__offer">
                <div className="single__offer__image">
                  <img
                    src="/imgs/offer/4.webp"
                    width={310}
                    height={310}
                    alt=""
                  />
                </div>
                <div className="single__offer__content">
                  <a href="#">
                    <h6>Romantic Getaway</h6>
                  </a>
                  <ul className="offer__included">
                    <li>
                      <i className="flaticon-check-circle" /> A two-night stay
                      in a deluxe suite
                    </li>
                    <li>
                      <i className="flaticon-check-circle" /> A bottle of
                      champagne and chocolates
                    </li>
                    <li>
                      <i className="flaticon-check-circle" /> Romantic dinner
                      for two
                    </li>
                    <li>
                      <i className="flaticon-check-circle" /> Couples massage at
                      our spa
                    </li>
                    <li>
                      <i className="flaticon-check-circle" /> Couples massage at
                      our spa
                    </li>
                  </ul>
                  <a href="#" className="underline__style">
                    Book Now
                  </a>
                </div>
              </div>
            </div>
            {/* single offer item end */}
          </div>
        </div>
      </div>
      {/* special section end */}
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

export default Home;
