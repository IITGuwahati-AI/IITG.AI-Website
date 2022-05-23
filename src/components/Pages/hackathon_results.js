import React, { Component } from "react";
import PageHeader from "./PageHeader";

class Hackathon_results extends Component {
  render() {
    return (
      <div>
        <PageHeader
          title="Summer AI Course"
          description="An in-depth introductory-level summer course provided by IITG.ai to help you grasp all that you need to get started on your journey of Machine Learning and AI. Have fun learning! "
          backgroundImage="course/brain.jpg"
        />
        <div className="container">
          <div className="home_small_content col-lg-12"></div>

          <h1>Summer Course Capstone Challenge Winners</h1><br></br>
           <h2>Week 7 of the Summer course by IITG.ai consisted of a capstone hackathon challenge.</h2>
           <br></br>
            <img src="img/course/iitgai.png" style={{marginLeft:"60px"}}></img>

<br></br>
            <h2>Link to the solution approaches of the Winners:</h2><br></br>
            <h2> 1st Place - Suryansh Srivastava : <a href = "https://docs.google.com/document/d/1CvyhFzakpPcfUMoSl8bI0NAIgA3xcT26bpLNQEFMLC0/edit" target='blank'>Code Link</a></h2>
            <h2>2nd Place - Amish Agarwal : <a href = "https://drive.google.com/file/d/1BnLe0AZRA0hS4Ney-6guasg5Jktf0i4J/view?usp=sharing" target='blank'>Code Link</a></h2>
            <h2>3rd Place - Sandra Jayan : <a href = "https://docs.google.com/document/d/1tbf1Ola-X1WytjUohpOC2u7rYuV6ZtzdjnViB3S2d1w/edit" target='blank'>Code Link</a></h2>
            <h2>4th Place - Harsh Choudhury : <a href = "https://docs.google.com/document/d/15dgZNh9oaP2uMKyT4sd_ZoeYr_WwMLz9Z6s8oSJBrmo/edit" target='blank'>Code Link</a></h2>
            <h2>5th Place - Gaurang Thakur : <a href = "https://docs.google.com/document/d/1Pefs7Q-jykJpCZso8-gnjTvhgRaDiYOiSJ1TQfSYyDM/edit" target='blank'>Code Link</a></h2>
            <h3 style={{ color: "white" }}>Follow us on social media</h3>
            <br /> <br />
            <h3 style={{ color: "white" }}>Follow us on social media</h3>
            <div className="footer_social contact_social">
              <ul>
                <li>
                  <a href="https://www.facebook.com/iitgai/">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="https://medium.com/iitg-ai">
                    <i className="fab fa-medium"></i>
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com/company/iitg-ai">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/IITGuwahati-AI">
                    <i className="fab fa-github"></i>
                  </a>
                </li>
                <li>
                <a href="https://www.instagram.com/iitg.ai">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
            </div>
            </div>
    );
  }
}

export default Hackathon_results;
