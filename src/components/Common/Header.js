import React, { Component } from "react";
import { Link } from "react-router-dom";
import homeLogo from "../assets/img/IITG.ai_Logo3.png";
//import homeLogo from '../assets/img/IITG_svg.svg';

class PageWrapper extends Component {
  render() {
    return (
      <div>
        {/*<header className="header d-flex flex-row justify-content-end align-items-center trans_200">

                    <div className="logo mr-auto">
                        <Link to="/"><img src={homeLogo} height="80" alt=""/></Link>
                    </div>

                    <nav className="main_nav justify-self-end text-right">
                        <ul>
                            <li><NavLink to="/about">About Us</NavLink></li>
                            <li><NavLink to="/projects">Projects</NavLink></li>
                            <li><NavLink to="/initiatives">Initiatives</NavLink></li>
                            <li><NavLink to="/people">People</NavLink></li>
							<li><NavLink to="/blogs">Blogs</NavLink></li>
                            <li><NavLink to="/calendar">Calendar</NavLink></li>
                            <li><NavLink to="/contact">Contact</NavLink></li>
							
                        </ul>
                    </nav>

                    <div className="hamburger_container bez_1"  data-target = "hamburger_container">
                        <i className="fa fa-bars trans_200"></i>
                    </div>

                </header>
					
                <div className="menu_container">
                    <div className="menu menu_mm text-right">
                        <div className="menu_close"><i className="far fa-times-circle trans_200"></i></div>
                        <ul className="menu_mm">
                            <li className="menu_mm active"><NavLink to="/index">Home</NavLink></li>
                            <li className="menu_mm"><NavLink to="/about">About Us</NavLink></li>
                            <li className="menu_mm"><NavLink to="/projects">Projects</NavLink></li>
                            <li className="menu_mm"><NavLink to="/initiatives">Initiatives</NavLink></li>
                            <li className="menu_mm"><NavLink to="/people">People</NavLink></li>
							<li className="menu_mm"><NavLink to="/blogs">Blogs</NavLink></li>
                            <li className="menu_mm"><a href="/calendar">Calendar</a></li>
                            <li className="menu_mm"><NavLink to="/contact">Contact</NavLink></li>
                        
                        </ul>
                    </div>
                </div>*/}

        <nav
          class="navbar navbar-expand-sm mb-4 fixed-top"
          style={{ margin: 0 }}
        >
          <Link class="navbar-brand" to="/">
            <Link to="/">
              <img src={homeLogo} height="50" alt="" />
            </Link>
          </Link>

          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span class="navbar-toggler-icon">
              {" "}
              <i
                className="fa fa-bars trans_200"
                style={{ color: "white" }}
              ></i>{" "}
            </span>
          </button>

          <div
            class="collapse navbar-collapse"
            id="mobile-nav"
            data-target=".navbar-collapse"
            data-toggle="collapse"
          >
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <Link class="nav-link" to="/about">
                  About
                </Link>
              </li>

              {/* <li class="nav-item">
                <Link class="nav-link" to="/projects">
                  Projects
                </Link>
              </li> */}

              {/* <li class="nav-item">
                <Link class="nav-link" to="/blogs">
                  Blogs
                </Link>
              </li> */}

              <li class="nav-item dropdown">
                <Link
                  class="nav-link dropdown-toggle"
                  to="/initiatives"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Activities
                </Link>
                <div class="dropdown-menu bg-dark">
                  <Link class="dropdown-item bg-dark" to="/initiatives">
                    Initiatives
                  </Link>
                  <Link class="dropdown-item bg-dark" to="/projects">
                    Projects
                  </Link>
                  <Link class="dropdown-item bg-dark" to="/blogs">
                    Blogs
                  </Link>
				  <Link class="dropdown-item bg-dark" to="/publications">
                    Publications
                  </Link>
                </div>
              </li>

              <li class="nav-item">
                <Link class="nav-link" to="/mlrw">
                  MLRW
                </Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link" to="/people">
                  People
                </Link>
              </li>

              {/* <li class="nav-item">
									<Link class="nav-link" to="/calendar">Calendar</Link>
								</li> */}

{/*               <li class="nav-item">
                <Link class="nav-link" to="/course/week1">
                  Course
                </Link>
              </li> */}

              <li class="nav-item dropdown">
                <Link
                  class="nav-link dropdown-toggle"
                  to="/initiatives"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Course
                </Link>
                <div class="dropdown-menu bg-dark">
                  <Link class="dropdown-item bg-dark" to="/course/week1">
                    Contents
                  </Link>
                  <Link class="dropdown-item bg-dark" to="/hackathon_results">
                    Hackathon Results
                  </Link>
                </div>
              </li>              

              <li class="nav-item">
                <Link class="nav-link" to="/contact">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default PageWrapper;
