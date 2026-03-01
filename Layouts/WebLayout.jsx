import {Link, Outlet, useNavigate} from "react-router-dom"

function WebLayout() {
  
  let navigate=useNavigate()
  
  const logout=()=>{
    localStorage.clear()
    navigate("/")
  }
  
  return (  


        <>
<>
  {/* header area */}
  <div className="header__top">
    <div className="container">
      <div className="row justify-content-between">
        <div className="col-lg-6 col-md-6">
          <div className="social__links">
            <a className="link__item gap-10" href="callto:#">
              <i className="flaticon-phone-flip" /> +12505550199
            </a>
            <a className="link__item gap-10" href="mailto:#">
              <i className="flaticon-envelope" /> info@luxurystayhospitality.com
            </a>
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <div className="location">
            <a className="link__item gap-10" href="#">
              <i className="flaticon-marker" />
              280 Augusta Avenue, M5T 2L9 Toronto, Canada
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <header className="main__header header__function">
    <div className="container">
      <div className="row">
        <div className="main__header__wrapper">
          <div className="main__nav">
            <div className="navigation d-none d-lg-block">
              <nav className="navigation__menu" id="main__menu">
                <ul className="list-unstyled">
                  <li className="navigation__menu--item">
                    <Link to="/" className="navigation__menu--item__link">
                      Home
                    </Link>
                    
                  </li>
                  <li className="navigation__menu--item ">
                    <Link to="/viewrooms" className="navigation__menu--item__link">
                      Rooms
                    </Link>
                  
                  </li>
                  <li className="navigation__menu--item has-child has-arrow">
                    <Link to="/about" className="navigation__menu--item__link">
                      About
                    </Link>
                   
                  </li>
             
                  <li className="navigation__menu--item">
                    <Link
                      to="/contact"
                      className="navigation__menu--item__link"
                    >
                      Contact
                    </  Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="main__logo">
            <a href="index.html">
              <img
                className="logo__class w-75"
                src="/imgs/logo.png"
                alt="moonlit"
              />
            </a>
          </div>
          <div className="main__right">
          
         {
           !localStorage.getItem("token")?   <Link
              to="/signup"
              className="theme-btn btn-style sm-btn border d-none d-lg-block"
              aria-label="Sign Up Button"
           
            >
              <span>Sign Up</span>
            </Link>
            
            :  
            
            <Link
              onClick={logout}
              className="theme-btn btn-style sm-btn border d-none d-lg-block"
              aria-label="Sign Up Button"
           
            >
              <span>Log Out</span>
            </Link>

         }
       
       {
localStorage.getItem("token") &&(
          <Link
          to={`/mybookings/${localStorage.getItem("userId")}`}
              
              className="theme-btn btn-style sm-btn fill"
            >
              <span>Bookings</span>
            </Link>
)
        
       }
  
            <button
              className="theme-btn btn-style sm-btn fill menu__btn d-lg-none"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              <span>
                <img src="assets/images/icon/menu-icon.svg" alt="" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
  {/* header area end */}

</>


<Outlet/>


  {/* footer style two */}
  <div className="rts__section rts__footer is__footer__two footer__background has__background__image">
    <div className="container">
      <div className="row">
        <div className="footer__widget__wrapper">
          <div className="rts__widget">
            <a href="index.html">
              <img src="/imgs/logo/footer__two.svg" alt="footer logo" />
            </a>
            <p className="font-sm max-290 mt-20 text-white">
              Each room features plush bedding, high-quality linens, and a
              selection of ensure a restful night's sleep.
            </p>
          </div>
          <div className="rts__widget">
            <span className="widget__title">Quick Links</span>
            <ul>
              <li>
                <a href="#">Rooms &amp; Suites</a>
              </li>
              <li>
                <a href="#">Dining</a>
              </li>
              <li>
                <a href="#">Spa &amp; Wellness</a>
              </li>
              <li>
                <a href="#">Special Offers</a>
              </li>
              <li>
                <a href="blog.html">Blog</a>
              </li>
            </ul>
          </div>
          <div className="rts__widget">
            <span className="widget__title">Guest Service</span>
            <ul>
              <li>24/7 Front Desk</li>
              <li>Parking</li>
              <li>Room Service</li>
              <li>Free Wi-Fi</li>
              <li>Concierge Service</li>
            </ul>
          </div>
          <div className="rts__widget">
            <span className="widget__title">Contact Us</span>
            <ul>
              <li>
                <a href="tel:+12505550199">
                  <i className="flaticon-phone-flip" /> +12505550199
                </a>
              </li>
              <li>
                <a href="mailto:UjJw6@example.com">
                  <i className="flaticon-envelope" />
                  Moonlit@gmail.com
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="flaticon-marker" /> 280 Augusta Avenue, M5T 2L9
                  Toronto, Canada
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="copyright__text">
      <div className="container">
        <div className="row">
          <div className="copyright__wrapper">
            <p className="mb-0">
              Copyright © <span id="year" /> Moonlit. All rights reserved.
            </p>
            <div className="footer__social__link">
              <a href="#" className="link__item">
                Facebook
              </a>
              <a href="#" className="link__item">
                Linkedin
              </a>
              <a href="#" className="link__item">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* footer style two end */}




</>




    );
}

export default WebLayout;