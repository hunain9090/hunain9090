import { Link, Outlet, useNavigate } from "react-router-dom";


function AdminLayout() {
const adminLogout=()=>{
  localStorage.removeItem("adminToken");
  localStorage.removeItem("role");
  navigate("/staff-login");
  
  
}

  let navigate=useNavigate()
  return (
    <>
      <>
        <div className="row" id="proBanner">
          <div className="col-12">
            <span className="d-flex align-items-center purchase-popup">
              <p>
                Get tons of UI components, Plugins, multiple layouts, 20+ sample
                pages, and more!
              </p>
              <button
               onClick={adminLogout}
                
                className="btn download-button purchase-button ml-auto"
              >
                LogOut
              </button>
              
            </span>
          </div>
        </div>
        <div className="container-scroller">
          {/* partial:partials/_navbar.html */}
          <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
            <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
              <a className="navbar-brand brand-logo" href="index.html">
                <img src="images/logo.svg" alt="logo" />
              </a>
              <a className="navbar-brand brand-logo-mini" href="index.html">
                <img src="images/logo-mini.svg" alt="logo" />
              </a>
              <button
                className="navbar-toggler navbar-toggler align-self-center d-none d-lg-flex"
                type="button"
                data-toggle="minimize"
              >
                <span className="typcn typcn-th-menu" />
              </button>
            </div>
            <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
              <ul className="navbar-nav mr-lg-2">
                <li className="nav-item  d-none d-lg-flex">
                  <a className="nav-link" href="#">
                    Calendar
                  </a>
                </li>
                <li className="nav-item  d-none d-lg-flex">
                  <a className="nav-link active" href="#">
                    Statistic
                  </a>
                </li>
                <li className="nav-item  d-none d-lg-flex">
                  <a className="nav-link" href="#">
                    Employee
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav navbar-nav-right">
                <li className="nav-item d-none d-lg-flex  mr-2">
                  <a className="nav-link" href="#">
                    Help
                  </a>
                </li>
                <li className="nav-item dropdown d-flex">
                  <a
                    className="nav-link count-indicator dropdown-toggle d-flex justify-content-center align-items-center"
                    id="messageDropdown"
                    href="#"
                    data-toggle="dropdown"
                  >
                    <i className="typcn typcn-message-typing" />
                    <span className="count bg-success">2</span>
                  </a>
                  <div
                    className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"
                    aria-labelledby="messageDropdown"
                  >
                    <p className="mb-0 font-weight-normal float-left dropdown-header">
                      Messages
                    </p>
                    <a className="dropdown-item preview-item">
                      <div className="preview-thumbnail">
                        <img
                          src="images/faces/face4.jpg"
                          alt="image"
                          className="profile-pic"
                        />
                      </div>
                      <div className="preview-item-content flex-grow">
                        <h6 className="preview-subject ellipsis font-weight-normal">
                          David Grey
                        </h6>
                        <p className="font-weight-light small-text mb-0">
                          The meeting is cancelled
                        </p>
                      </div>
                    </a>
                    <a className="dropdown-item preview-item">
                      <div className="preview-thumbnail">
                        <img
                          src="images/faces/face2.jpg"
                          alt="image"
                          className="profile-pic"
                        />
                      </div>
                      <div className="preview-item-content flex-grow">
                        <h6 className="preview-subject ellipsis font-weight-normal">
                          Tim Cook
                        </h6>
                        <p className="font-weight-light small-text mb-0">
                          New product launch
                        </p>
                      </div>
                    </a>
                    <a className="dropdown-item preview-item">
                      <div className="preview-thumbnail">
                        <img
                          src="images/faces/face3.jpg"
                          alt="image"
                          className="profile-pic"
                        />
                      </div>
                      <div className="preview-item-content flex-grow">
                        <h6 className="preview-subject ellipsis font-weight-normal">
                          {" "}
                          Johnson
                        </h6>
                        <p className="font-weight-light small-text mb-0">
                          Upcoming board meeting
                        </p>
                      </div>
                    </a>
                  </div>
                </li>
                <li className="nav-item dropdown  d-flex">
                  <a
                    className="nav-link count-indicator dropdown-toggle d-flex align-items-center justify-content-center"
                    id="notificationDropdown"
                    href="#"
                    data-toggle="dropdown"
                  >
                    <i className="typcn typcn-bell mr-0" />
                    <span className="count bg-danger">2</span>
                  </a>
                  <div
                    className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"
                    aria-labelledby="notificationDropdown"
                  >
                    <p className="mb-0 font-weight-normal float-left dropdown-header">
                      Notifications
                    </p>
                    <a className="dropdown-item preview-item">
                      <div className="preview-thumbnail">
                        <div className="preview-icon bg-success">
                          <i className="typcn typcn-info-large mx-0" />
                        </div>
                      </div>
                      <div className="preview-item-content">
                        <h6 className="preview-subject font-weight-normal">
                          Application Error
                        </h6>
                        <p className="font-weight-light small-text mb-0">
                          Just now
                        </p>
                      </div>
                    </a>
                    <a className="dropdown-item preview-item">
                      <div className="preview-thumbnail">
                        <div className="preview-icon bg-warning">
                          <i className="typcn typcn-cog mx-0" />
                        </div>
                      </div>
                      <div className="preview-item-content">
                        <h6 className="preview-subject font-weight-normal">
                          Settings
                        </h6>
                        <p className="font-weight-light small-text mb-0">
                          Private message
                        </p>
                      </div>
                    </a>
                    <a className="dropdown-item preview-item">
                      <div className="preview-thumbnail">
                        <div className="preview-icon bg-info">
                          <i className="typcn typcn-user-outline mx-0" />
                        </div>
                      </div>
                      <div className="preview-item-content">
                        <h6 className="preview-subject font-weight-normal">
                          New user registration
                        </h6>
                        <p className="font-weight-light small-text mb-0">
                          2 days ago
                        </p>
                      </div>
                    </a>
                  </div>
                </li>
                <li className="nav-item nav-profile dropdown">
                  <a
                    className="nav-link dropdown-toggle  pl-0 pr-0"
                    href="#"
                    data-toggle="dropdown"
                    id="profileDropdown"
                  >
                    <i className="typcn typcn-user-outline mr-0" />
                    <span className="nav-profile-name">Evan Morales</span>
                  </a>
                  <div
                    className="dropdown-menu dropdown-menu-right navbar-dropdown"
                    aria-labelledby="profileDropdown"
                  >
                    <a className="dropdown-item">
                      <i className="typcn typcn-cog text-primary" />
                      Settings
                    </a>
                    <a className="dropdown-item">
                      <i className="typcn typcn-power text-primary" />
                      Logout
                    </a>
                  </div>
                </li>
              </ul>
              <button
                className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
                type="button"
                data-toggle="offcanvas"
              >
                <span className="typcn typcn-th-menu" />
              </button>
            </div>
          </nav>
          {/* partial */}
          <div className="container-fluid page-body-wrapper">
            {/* partial:partials/_settings-panel.html */}
            <div className="theme-setting-wrapper">
              <div id="settings-trigger">
                <i className="typcn typcn-cog-outline" />
              </div>
              <div id="theme-settings" className="settings-panel">
                <i className="settings-close typcn typcn-delete-outline" />
                <p className="settings-heading">SIDEBAR SKINS</p>
                <div className="sidebar-bg-options" id="sidebar-light-theme">
                  <div className="img-ss rounded-circle bg-light border mr-3" />
                  Light
                </div>
                <div
                  className="sidebar-bg-options selected"
                  id="sidebar-dark-theme"
                >
                  <div className="img-ss rounded-circle bg-dark border mr-3" />
                  Dark
                </div>
                <p className="settings-heading mt-2">HEADER SKINS</p>
                <div className="color-tiles mx-0 px-4">
                  <div className="tiles success" />
                  <div className="tiles warning" />
                  <div className="tiles danger" />
                  <div className="tiles primary" />
                  <div className="tiles info" />
                  <div className="tiles dark" />
                  <div className="tiles default border" />
                </div>
              </div>
            </div>
            {/* partial */}
            {/* partial:partials/_sidebar.html */}
            <nav className="sidebar sidebar-offcanvas" id="sidebar">
           {/* ====================================yeh admin ho toh yeh menues show ho start======================== */}
           
             {
localStorage.getItem("role")=="admin" &&(

 <ul className="nav">
                <li className="nav-item">
                  <div className="text-center sidebar-profile">
                    <div className="">
                      <img src="/imgs/logoAdmin.png" alt="image" className="img-fluid w-75" />
                      <span className="sidebar-status-indicator" />
                    </div>
                    <div className="sidebar-profile-name">
                      <p className="sidebar-name">LuxuryStay Hospitality</p>
                      <p className="sidebar-designation">Welcome</p>
                    </div>
                  </div>
               
                  <p className="sidebar-menu-title">Dash menu</p>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/dashboard">
                    <i className="typcn typcn-device-desktop menu-icon" />
                    <span className="menu-title">
                      Dashboard{" "}
                      <span className="badge badge-primary ml-3">New</span>
                    </span>
                  </Link>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="collapse"
                    href="#ui-basic"
                    aria-expanded="false"
                    aria-controls="ui-basic"
                  >
                    <i className="typcn typcn-briefcase menu-icon" />
                    <span className="menu-title">Rooms</span>
                    <i className="typcn typcn-chevron-right menu-arrow" />
                  </a>
                  <div className="collapse" id="ui-basic">
                    <ul className="nav flex-column sub-menu">
                      <li className="nav-item">
                        {" "}
                        <Link className="nav-link" to="/dashboard/addroom">
                          Add Rooms
                        </Link>
                      </li>
                      <li className="nav-item">
                        {" "}
                        <Link className="nav-link" to="showroom">
                          View Rooms
                        </Link>
                      </li>
                      
           <li className="nav-item">
                        {" "}
                        <Link className="nav-link" to="addstatus">
Add Status    

                    </Link>
                      </li>
    <li className="nav-item">
                        {" "}
                        <Link className="nav-link" to="showstatus">
View Status    

                    </Link>
                      </li>
    <li className="nav-item">
                        {" "}
                        <Link className="nav-link" to="addtype">
Add Types    

                    </Link>
                      </li>
    <li className="nav-item">
                        {" "}
                        <Link className="nav-link" to="showtype">
View Types    

                    </Link>
                      </li>



                    </ul>
                  </div>
                </li>
                
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="collapse"
                    href="#form-elements"
                    aria-expanded="false"
                    aria-controls="form-elements"
                  >
                    <i className="typcn typcn-film menu-icon" />
                    <span className="menu-title">Bookings</span>
                    <i className="menu-arrow" />
                  </a>
                  <div className="collapse" id="form-elements">
                    <ul className="nav flex-column sub-menu">
                      <li className="nav-item">
                        <Link
                        to="showbooking"
                          className="nav-link"
                          
                        >
                         View Bookings
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                        to="showrequest"
                          className="nav-link"
                          
                        >
                         View Service Requests
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <Link
                  to="/dashboard/showcontact"
                    className="nav-link"
                    data-toggle="collapse"
                    
                    aria-expanded="false"
                    aria-controls="charts"
                  >
                    <i className="typcn typcn-chart-pie-outline menu-icon" />
                    <span className="menu-title">Contact Details</span>
                    <i className="menu-arrow" />
                  </Link>
                  <div className="collapse" id="charts">
                    <ul className="nav flex-column sub-menu">
                      <li className="nav-item">
                        {" "}
                        <a
                          className="nav-link"
                          href="pages/charts/chartjs.html"
                        >
                          ChartJs
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
to="/dashboard/showstaff"
                    aria-expanded="false"
                    aria-controls="tables"
                  >
                    <i className="typcn typcn-th-small-outline menu-icon" />
                    <span className="menu-title">Show Staff</span>
                    <i className="menu-arrow" />
                  </Link>
               
                </li>

                  <li className="nav-item">
                  <Link
                    className="nav-link"
to="/dashboard/showfeedback"
                    aria-expanded="false"
                    aria-controls="tables"
                  >
                    <i className="typcn typcn-th-small-outline menu-icon" />
                    <span className="menu-title">Show Feedback</span>
                    <i className="menu-arrow" />
                  </Link>
               
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="collapse"
                    href="#icons"
                    aria-expanded="false"
                    aria-controls="icons"
                  >
                    <i className="typcn typcn-compass menu-icon" />
                    <span className="menu-title">Users</span>
                    <i className="menu-arrow" />
                  </a>
                  <div className="collapse" id="icons">
                    <ul className="nav flex-column sub-menu">
                      <li className="nav-item">
                        {" "}
                        <Link className="nav-link" to="/dashboard/showusers">
                          Show Users
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
          
              </ul>


)


             }


           {/* ====================================yeh admin ho toh yeh menues show ho Ends======================== */}


           {/* ====================================yeh Manager ho toh yeh menues show ho start======================== */}

             {
localStorage.getItem("role")=="manager" &&(

 <ul className="nav">
                <li className="nav-item">
                  <div className="text-center sidebar-profile">
                    <div className="">
                      <img src="/imgs/logoAdmin.png" alt="image" className="img-fluid w-75" />
                      <span className="sidebar-status-indicator" />
                    </div>
                    <div className="sidebar-profile-name">
                      <p className="sidebar-name">LuxuryStay Hospitality</p>
                      <p className="sidebar-designation">Welcome</p>
                    </div>
                  </div>
               
                  <p className="sidebar-menu-title">Dash menu</p>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/dashboard">
                    <i className="typcn typcn-device-desktop menu-icon" />
                    <span className="menu-title">
                      Dashboard{" "}
                      <span className="badge badge-primary ml-3">New</span>
                    </span>
                  </Link>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="collapse"
                    href="#ui-basic"
                    aria-expanded="false"
                    aria-controls="ui-basic"
                  >
                    <i className="typcn typcn-briefcase menu-icon" />
                    <span className="menu-title">Rooms</span>
                    <i className="typcn typcn-chevron-right menu-arrow" />
                  </a>
                  <div className="collapse" id="ui-basic">
                    <ul className="nav flex-column sub-menu">
                      <li className="nav-item">
                        {" "}
                        <Link className="nav-link" to="/dashboard/addroom">
                          Add Rooms
                        </Link>
                      </li>
                      <li className="nav-item">
                        {" "}
                        <Link className="nav-link" to="showroom">
                          View Rooms
                        </Link>
                      </li>

======
    <li className="nav-item">
                        {" "}
                        <Link className="nav-link" to="addstatus">
Add Status    

                    </Link>
                      </li>
    <li className="nav-item">
                        {" "}
                        <Link className="nav-link" to="showstatus">
Add Status    

                    </Link>
                      </li>
    <li className="nav-item">
                        {" "}
                        <Link className="nav-link" to="addtype">
Add Types    

                    </Link>
                      </li>
    <li className="nav-item">
                        {" "}
                        <Link className="nav-link" to="showtype">
View Types    

                    </Link>
                      </li>

========


                      
                    

                      
                    </ul>

                  </div>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="collapse"
                    href="#form-elements"
                    aria-expanded="false"
                    aria-controls="form-elements"
                  >
                    <i className="typcn typcn-film menu-icon" />
                    <span className="menu-title">Bookings</span>
                    <i className="menu-arrow" />
                  </a>
                  <div className="collapse" id="form-elements">
                    <ul className="nav flex-column sub-menu">
                      <li className="nav-item">
                        <Link
                        to="showbooking"
                          className="nav-link"
                          
                        >
                         View Bookings
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                        to="showrequest"
                          className="nav-link"
                          
                        >
                         View Service Requests
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <Link
                  to="/dashboard/showcontact"
                    className="nav-link"
                    data-toggle="collapse"
                    
                    aria-expanded="false"
                    aria-controls="charts"
                  >
                    <i className="typcn typcn-chart-pie-outline menu-icon" />
                    <span className="menu-title">Contact Details</span>
                    <i className="menu-arrow" />
                  </Link>
                  <div className="collapse" id="charts">
                    <ul className="nav flex-column sub-menu">
                      <li className="nav-item">
                        {" "}
                        <a
                          className="nav-link"
                          href="pages/charts/chartjs.html"
                        >
                          ChartJs
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
to="/dashboard/showstaff"
                    aria-expanded="false"
                    aria-controls="tables"
                  >
                    <i className="typcn typcn-th-small-outline menu-icon" />
                    <span className="menu-title">Show Staff</span>
                    <i className="menu-arrow" />
                  </Link>
               
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="collapse"
                    href="#icons"
                    aria-expanded="false"
                    aria-controls="icons"
                  >
                    <i className="typcn typcn-compass menu-icon" />
                    <span className="menu-title">Users</span>
                    <i className="menu-arrow" />
                  </a>
                  <div className="collapse" id="icons">
                    <ul className="nav flex-column sub-menu">
                      <li className="nav-item">
                        {" "}
                        <a className="nav-link" href="pages/icons/mdi.html">
                          Show Users
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
          
              </ul>


)


             }


           {/* ====================================yeh Manager ho toh yeh menues show ho Ends======================== */}

           




 {/* ====================================yeh Receptionist ho toh yeh menues show ho start======================== */}

             {
localStorage.getItem("role")=="receptionist" &&(

 <ul className="nav">
                <li className="nav-item">
                  <div className="text-center sidebar-profile">
                    <div className="">
                      <img src="/imgs/logoAdmin.png" alt="image" className="img-fluid w-75" />
                      <span className="sidebar-status-indicator" />
                    </div>
                    <div className="sidebar-profile-name">
                      <p className="sidebar-name">LuxuryStay Hospitality</p>
                      <p className="sidebar-designation">Welcome</p>
                    </div>
                  </div>
               
                  <p className="sidebar-menu-title">Dash menu</p>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/dashboard">
                    <i className="typcn typcn-device-desktop menu-icon" />
                    <span className="menu-title">
                      Dashboard{" "}
                      <span className="badge badge-primary ml-3">New</span>
                    </span>
                  </Link>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="collapse"
                    href="#ui-basic"
                    aria-expanded="false"
                    aria-controls="ui-basic"
                  >
                    <i className="typcn typcn-briefcase menu-icon" />
                    <span className="menu-title">Rooms</span>
                    <i className="typcn typcn-chevron-right menu-arrow" />
                  </a>
                  <div className="collapse" id="ui-basic">
                    <ul className="nav flex-column sub-menu">
                      <li className="nav-item">
                        {" "}
                        <Link className="nav-link" to="/dashboard/addroom">
                          Add Rooms
                        </Link>
                      </li>
                      <li className="nav-item">
                        {" "}
                        <Link className="nav-link" to="showroom">
                          View Rooms
                        </Link>
                      </li>
                      <li className="nav-item">
                        {" "}
                        <a
                          className="nav-link"
                          href="pages/ui-features/typography.html"
                        >
                          Typography
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="collapse"
                    href="#form-elements"
                    aria-expanded="false"
                    aria-controls="form-elements"
                  >
                    <i className="typcn typcn-film menu-icon" />
                    <span className="menu-title">Bookings</span>
                    <i className="menu-arrow" />
                  </a>
                  <div className="collapse" id="form-elements">
                    <ul className="nav flex-column sub-menu">
                      <li className="nav-item">
                        <Link
                        to="showbooking"
                          className="nav-link"
                          
                        >
                         View Bookings
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                        to="showrequest"
                          className="nav-link"
                          
                        >
                         View Service Requests
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <Link
                  to="/dashboard/showcontact"
                    className="nav-link"
                    data-toggle="collapse"
                    
                    aria-expanded="false"
                    aria-controls="charts"
                  >
                    <i className="typcn typcn-chart-pie-outline menu-icon" />
                    <span className="menu-title">Contact Details</span>
                    <i className="menu-arrow" />
                  </Link>
                  <div className="collapse" id="charts">
                    <ul className="nav flex-column sub-menu">
                      <li className="nav-item">
                        {" "}
                        <a
                          className="nav-link"
                          href="pages/charts/chartjs.html"
                        >
                          ChartJs
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
to="/dashboard/showstaff"
                    aria-expanded="false"
                    aria-controls="tables"
                  >
                    <i className="typcn typcn-th-small-outline menu-icon" />
                    <span className="menu-title">Show Staff</span>
                    <i className="menu-arrow" />
                  </Link>
               
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="collapse"
                    href="#icons"
                    aria-expanded="false"
                    aria-controls="icons"
                  >
                    <i className="typcn typcn-compass menu-icon" />
                    <span className="menu-title">Users</span>
                    <i className="menu-arrow" />
                  </a>
                  <div className="collapse" id="icons">
                    <ul className="nav flex-column sub-menu">
                      <li className="nav-item">
                        {" "}
                        <a className="nav-link" href="pages/icons/mdi.html">
                          Show Users
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
          
              </ul>


)


             }


           {/* ====================================yeh Receptionist ho toh yeh menues show ho Ends======================== */}




 {/* ====================================yeh HouseKeeping ho toh yeh menues show ho start======================== */}

             {
localStorage.getItem("role")=="housekeeping" &&(

 <ul className="nav">
                <li className="nav-item">
                  <div className="text-center sidebar-profile">
                    <div className="">
                      <img src="/imgs/logoAdmin.png" alt="image" className="img-fluid w-75" />
                      <span className="sidebar-status-indicator" />
                    </div>
                    <div className="sidebar-profile-name">
                      <p className="sidebar-name">LuxuryStay Hospitality</p>
                      <p className="sidebar-designation">Welcome</p>
                    </div>
                  </div>
               
                  <p className="sidebar-menu-title">Dash menu</p>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/dashboard">
                    <i className="typcn typcn-device-desktop menu-icon" />
                    <span className="menu-title">
                      Dashboard{" "}
                      <span className="badge badge-primary ml-3">New</span>
                    </span>
                  </Link>
                </li>
               
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="collapse"
                    href="#form-elements"
                    aria-expanded="false"
                    aria-controls="form-elements"
                  >
                    <i className="typcn typcn-film menu-icon" />
                    <span className="menu-title">Service Requests</span>
                    <i className="menu-arrow" />
                  </a>
                  <div className="collapse" id="form-elements">
                    <ul className="nav flex-column sub-menu">
                
                      <li className="nav-item">
                        <Link
                        to="showrequest"
                          className="nav-link"
                          
                        >
                         View Service Requests
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
    
            
          
              </ul>


)


             }


           {/* ====================================yeh HouseKeeping ho toh yeh menues show ho Ends======================== */}



            </nav>
            {/* partial */}
            <div className="main-panel">
              <Outlet />
              {/* partial:partials/_footer.html */}
              <footer className="footer">
                <div className="d-sm-flex justify-content-center justify-content-sm-between">
                  <span className="text-center text-sm-left d-block d-sm-inline-block">
                    Copyright ©{" "}
                    <a href="https://www.bootstrapdash.com/" target="_blank">
                      bootstrapdash.com
                    </a>{" "}
                    2020
                  </span>
                  <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">
                    Free{" "}
                    <a href="https://www.bootstrapdash.com/" target="_blank">
                      Bootstrap dashboard{" "}
                    </a>
                    templates from Bootstrapdash.com
                  </span>
                </div>
              </footer>
              {/* partial */}
            </div>
            {/* main-panel ends */}
          </div>
          {/* page-body-wrapper ends */}
        </div>
        {/* container-scroller */}
      </>
    </>
  );
}

export default AdminLayout;
