import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function RoomDetail() {
  // this is the room Id comes when user click on room card and is navigate to room detail page by usenavigate hook
  // and this useparams is used to get the id from url

  let { id } = useParams();
  let apiUrl = "http://localhost:5000";

  let [alert, setAlert] = useState({
    status: true,
    message: "",
  });
// let[userData,setUserData]=useState({

// })
  let [roomDetail, setRoomDetail] = useState({});

  // yeh  state is liye banai gai hai jab user booking kary toh data is state k zariye jai
  let [bookingData, setBookingData] = useState({
    userId: "",
    roomId: "",
    checkInDate: "",
    checkOutDate: "",
    totalPrice: "",
    phoneNumber: "",
    to:"",
    body:"",
    subject:""
  });

  let navigate = useNavigate();
  // is mai hum similar rooms show karrahay hai Room type ki base per
  let [similarRooms, setSimilarRooms] = useState([]);

const fetchUserForEmail=async()=>{
try{ 
   let id=localStorage.getItem("userId")
console.log(`this is Id : ${id}`)
  let  res=await axios.get(`${apiUrl}/showusers/${id}`)
  console.log(res)
if(res.data.success){
  let user=res.data.singleUser
  // setUserData(res.data.singleUser)
        
  setBookingData((prev)=>{
            return{
              ...prev,
              to:user.email,
              subject:"Booking Successfull",
              body:`<h1>Hey ${user.userName}<h1><br/><p>Your Booking Has Been Done We Will Send You Confirm Message Soon</p>`
            }
          })

}



}catch(err){

console.log(err.response.data.message)

}

}

  const fetchRoomById = async () => {
    try {
      let res = await axios.get(`${apiUrl}/rooms/showroom/${id}`);
      console.log(res.data);
      if (res.data.success) {
        setRoomDetail(res.data.findRoomById);

        // is mai hum booking data ki kuch keys ko values pass karrahay hai baki ki keys handlebookingOnchange walay function per assign hongi
        setBookingData((prev) => {
          return {
            ...prev,
            userId: localStorage.getItem("userId"),
            roomId: res.data.findRoomById._id,
            totalPrice: res.data.findRoomById.roomPrice,
          };
        });
      }

      // ========================Else Block is liye use nahi kia kio k jab data.success false horaha hai toh res.status mai hum nay 200 k bajai err k code pass kiye hai or error direct catch mai aata hai
    } catch (err) {
      console.log(err.response.data.message);
    }
  };

  const fetchRoomByType = async () => {
    try {
      let res = await axios.get(
        `${apiUrl}/rooms/roomsbytype/${roomDetail.roomType._id}`
      );
      console.log(res.data);
      if (res.data.success) {
        setSimilarRooms(res.data.findRoomByType);
      }
    } catch (err) {
      console.log(err.response.data.message);
    }
  };

  const navigateToLogin = () => {
    navigate("/login");
  };

  const handleBookingOnChange = async (e) => {
    let { name, value } = e.target;

    setBookingData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const calculateDays = (checkIn, checkOut) => {
    if (!checkIn || !checkOut) {
      return 1;
    }

    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);

    let diffTime = checkOutDate - checkInDate;

    let diffDays = diffTime / (1000 * 60 * 60 * 24);

    return diffDays;
  };

  const handleBookingSubmit = async () => {
    if (bookingData.phoneNumber == "") {
      setAlert({
          status: false,
          message: "Fill Phone Number",
        })
    }
   else if (bookingData.checkInDate == "") {
      setAlert({
          status: false,
          message: "Please Provide Check In Date",
        })
    }
   else if (bookingData.checkOutDate == "") {
      setAlert({
          status: false,
          message: "Please Provide Check Out Date",
        })
    }
    
    else {
      try {
        let res = await axios.post(`${apiUrl}/booking/`, bookingData);

        if (res.data.success) {
          setAlert({
            status: res.data.success,
            message: "Booked Successfully Check The Status",

          });









        }
      } catch (err) {
        setAlert({
          status: false,
          message: err.response.data.message,
        });
      }
    }
  };
  useEffect(() => {
    fetchRoomById();
    fetchUserForEmail()
  }, []);

  useEffect(() => {
    fetchRoomByType();

    if (roomDetail._id) {
      // is mai hum booking data ki kuch keys ko values pass karrahay hai baki ki keys handlebookingOnchange walay function per assign hongi
      setBookingData((prev) => {
        return {
          ...prev,
          userId: localStorage.getItem("userId"),
          roomId: roomDetail._id,
          totalPrice: roomDetail.roomPrice,
        };
      });
    }
  }, [roomDetail]);

  // =================yeh useeffect total days maloom karnay k liye use hota hai============

  useEffect(() => {
    let days = calculateDays(bookingData.checkInDate, bookingData.checkOutDate);

    setBookingData((prev) => {
      return {
        ...prev,
        totalPrice: days * roomDetail.roomPrice,
      };
    });
  }, [bookingData.checkInDate, bookingData.checkOutDate]);

  return (
    <>
      {/* page header */}
      <div
        className="rts__section page__hero__height page__hero__bg no__shadow"
        style={{ backgroundImage: "url(/imgs/pages/header__bg.webp)" }}
      >
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-12">
              <div className="page__hero__content visually-hidden">
                <h1 className="wow fadeInUp">visually-hidden</h1>
                <p className="wow fadeInUp font-sm">visually-hidden</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* page header end */}
      {/* room details two top */}
      <div className="rts__section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="room__details__top">
                <span className="h2 price">{roomDetail.roomPrice}$</span>
                <h1>{roomDetail.roomName}</h1>
                <div className="room__meta">
                  {/* <span>
                <i className="flaticon-construction" />
                35 sqm
              </span>
              <span>
                <i className="flaticon-user" />5 Person
              </span> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* room details two top end */}
      {/* room details area */}
      <div className="rts__section section__padding">
        <div className="container">
          <div className="row g-5 sticky-wrap">
            <div className="col-lg-8">
              <div className="room__details">
                <h4 className="mb-30">Room Description</h4>
                <p>{roomDetail.roomDescription}</p>
                <h4 className="mb-40">Room Image</h4>
                <div className="video__area mb-50 position-relative wow fadeInUp">
                  <div className="video__area__image is__room__details jara-mask-2 jarallax">
                    <img
                      className="radius-10 jarallax-img"
                      src={`${apiUrl}/uploads/${roomDetail.roomImage}`}
                      alt=""
                    />
                  </div>
                </div>
                <span className="h4 d-block mb-30">Room Amenities</span>
                <div className="room__amenity mb-50">
                  <div className="group__row if__room__details__two">
                    <div className="single__item">
                      <img
                        src="/imgs/icon/wifi.svg"
                        height={30}
                        width={36}
                        alt=""
                      />
                      <span>Free Wifi</span>
                    </div>
                    <div className="single__item">
                      <img
                        src="/imgs/icon/shower.svg"
                        height={30}
                        width={36}
                        alt=""
                      />
                      <span>Shower</span>
                    </div>
                  </div>
                  <div className="group__row if__room__details__two">
                    <div className="single__item">
                      <img
                        src="/imgs/icon/aeroplane.svg"
                        height={30}
                        width={36}
                        alt=""
                      />
                      <span>Airport transport</span>
                    </div>
                    <div className="single__item">
                      <img
                        src="/imgs/icon/balcony.svg"
                        height={30}
                        width={36}
                        alt=""
                      />
                      <span>Balcony</span>
                    </div>
                  </div>
                  <div className="group__row if__room__details__two">
                    <div className="single__item">
                      <img
                        src="/imgs/icon/refrigerator.svg"
                        height={30}
                        width={36}
                        alt=""
                      />
                      <span>Refrigerator</span>
                    </div>
                    <div className="single__item">
                      <img
                        src="/imgs/icon/support.svg"
                        height={30}
                        width={36}
                        alt=""
                      />
                      <span>24/7 Support</span>
                    </div>
                  </div>
                  <div className="group__row if__room__details__two">
                    <div className="single__item">
                      <img
                        src="/imgs/icon/desk.svg"
                        height={30}
                        width={36}
                        alt=""
                      />
                      <span>Work Desk</span>
                    </div>
                    <div className="single__item">
                      <img
                        src="/imgs/icon/fitness.svg"
                        height={30}
                        width={36}
                        alt=""
                      />
                      <span>Fitness Center</span>
                    </div>
                  </div>
                </div>
                {/* <span className="h4 d-block mb-50">Room Features</span>
            <div className="room__feature mb-20">
              <div className="room__image__group row row-cols-md-2 row-cols-sm-1 mt-30 mb-50 gap-4 gap-md-0">
                <div className="room__image__item">
                  <img
                    className="rounded-2"
                    src="/imgs/pages/room/r-d-1.webp"
                    alt=""
                  />
                </div>
                <div className="room__image__item">
                  <img
                    className="rounded-2"
                    src="/imgs/pages/room/r-d-2.webp"
                    alt=""
                  />
                </div>
              </div>
              <div className="group__row is__room__details">
                <ul className="list__item">
                  <li>Children and extra beds</li>
                  <li>Climate Control</li>
                </ul>
                <ul className="list__item">
                  <li>Art and Decor</li>
                  <li>Coffee/Tea Maker</li>
                </ul>
                <ul className="list__item">
                  <li>High-End Bedding</li>
                  <li>Smart Technology</li>
                </ul>
              </div>
            </div> */}
                {/* <p>
              Our elegantly appointed rooms and suites are designed to offer the
              utmost in comfort and style. Each room features modern amenities,
              plush furnishings, and thoughtful touches to ensure a relaxing
              stay.
            </p> */}
              </div>
            </div>
            <div className="col-lg-4 sticky-item">
              <div className="rts__booking__form has__background is__room__details">
                <div className="advance__search">
                  <h5 className="pt-0">Book Your Stay</h5>
                  <div className="advance__search__wrapper">
                    {/* single input */}
                    <div className="query__input wow fadeInUp">
                      <label htmlFor="check__in" className="query__label">
                        Check In
                      </label>
                      <div className="query__input__position">
                        <input
                          type="date"
                          id="check__in"
                          name="checkInDate"
                          placeholder="15 Jun 2024"
                          value={bookingData.checkInDate}
                          onChange={handleBookingOnChange}
                        />
                        <div className="query__input__icon">
                          <i className="flaticon-calendar" />
                        </div>
                      </div>
                    </div>
                    {/* single input end */}
                    {/* single input */}
                    <div
                      className="query__input wow fadeInUp"
                      data-wow-delay=".3s"
                    >
                      <label htmlFor="check__out" className="query__label">
                        Check Out
                      </label>
                      <div className="query__input__position">
                        <input
                          type="date"
                          id="check__out"
                          name="checkOutDate"
                          placeholder="15 May 2024"
                          onChange={handleBookingOnChange}
                          value={bookingData.checkOutDate}
                        />
                        <div className="query__input__icon">
                          <i className="flaticon-calendar" />
                        </div>
                      </div>
                    </div>
                    {/* single input end */}
                    {/* single input */}
                    <div
                      className="query__input wow fadeInUp"
                      data-wow-delay=".4s"
                    >
                      <label htmlFor="adult" className="query__label">
                        Phone
                      </label>
                      <div className="query__input__position">
                        <input
                          type="number"
                          name="phoneNumber"
                          placeholder="000-0000-000"
                          onChange={handleBookingOnChange}
                          value={bookingData.phoneNumber}
                        />
                        <div className="query__input__icon">
                          <i className="bi bi-telephone" />
                        </div>
                      </div>
                    </div>
                    {/* single input end */}
                    {/* calculation */}
                    <div className="total__price">
                      <span className="total h6 mb-0">Total Price</span>
                      <span className="price h6 m-0">
                        ${bookingData.totalPrice}
                      </span>
                    </div>
                    {/* calculation end */}
                    {/* submit button */}

                    {localStorage.getItem("token") ? (
                      <button
                        onClick={handleBookingSubmit}
                        className="theme-btn btn-style fill no-border search__btn wow fadeInUp"
                        data-wow-delay=".6s"
                      >
                        <span>Book Your Room</span>
                      </button>
                    ) : (
                      <button
                        onClick={navigateToLogin}
                        className="theme-btn btn-style fill no-border search__btn wow fadeInUp"
                        data-wow-delay=".6s"
                      >
                        <span>Book Your Room</span>
                      </button>
                    )}
                    {/* submit button end */}
                    {alert.message && (
                      <h6 className={alert.status == false && "text-danger"}>
                        {alert.message}
                      </h6>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* room details area end */}
      {/* similar room area */}
      <div className="rts__section pb-120">
        <div className="container">
          <div className="row justify-content-center text-center mb-40">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
              <div className="section__topbar">
                <span className="h6 subtitle__icon__three mx-auto">
                  Similar Rooms
                </span>
                <h2 className="section__title">Similar Rooms</h2>
              </div>
            </div>
          </div>
          <div className="row g-30">
            {similarRooms
              .filter((sr) => sr._id != roomDetail._id)
              .map((sr) => {
                return (
                  <div className="col-xl-4 col-lg-6 col-md-6" key={sr}>
                    <div className="room__card h-100">
                      <div className="room__card__top">
                        <div className="room__card__image" height="100%">
                          <a href="room-details-2.html">
                            <img
                              src={`${apiUrl}/uploads/${sr.roomImage}`}
                              width={420}
                              height={310}
                              alt="room card"
                              className="img-fluid"
                            />
                          </a>
                        </div>
                      </div>
                      <div className="room__card__meta">
                        <a
                          href="room-details-2.html"
                          className="room__card__title h5"
                        >
                          {sr.roomName}
                        </a>
                        <div className="room__card__meta__info">
                          <span>
                            <i className="flaticon-construction" />
                            35 sqm
                          </span>
                          <span>
                            <i className="flaticon-user" />5 Person
                          </span>
                        </div>
                        <div className="room__price__tag">
                          <span className="h6 d-block">{sr.roomPrice}$</span>
                        </div>
                        <a
                          href="room-details-2.html"
                          className="room__card__link"
                        >
                          Discover More
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}

            {similarRooms.filter((sr) => sr._id != roomDetail._id).length ==
              0 && <h3 className="text-center">No Similar Rooms Available</h3>}
          </div>
        </div>
      </div>
      {/* similar room area end */}
    </>
  );
}

export default RoomDetail;
