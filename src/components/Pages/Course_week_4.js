import React, { Component } from "react";
import PageHeader from "./PageHeader";
import './Course/course_table.css';

class Course_week_4 extends Component {
  render() {
    return (
      <div>
        <PageHeader
          title="Summer AI Course"
          description="An in-depth introductory-level summer course provided by IITG.ai to help you grasp all that you need to get started on your journey of Machine Learning and AI. Have fun learning! "
          backgroundImage="course/brain.jpg"
        />
        <div className="container">
          <div className="home_small_content col-lg-12">
          <table className="week-table" >
              <thead>
              <tr>
                  <th>
                    <a href="#/course/week1">Week 1</a>
                  </th>
                  <th>
                    <a href="#/course/week2">Week 2</a>
                  </th>
                  <th>
                    <a href="#/course/week3">Week 3</a>
                  </th>
                  <th className="active-tab">
                    <a href="#/course/week4">Week 4</a>
                  </th>
                  <th>
                    <a href="#/course/week5">Week 5</a>
                  </th>
                  <th>
                    <a href="#/course/week6">Week 6</a>
                  </th>
                  <th>
                    <a href="#/course/week7">Week 7</a>
                  </th>
                </tr>
              </thead>
            </table>
            <br></br>

            {/* <table class="table table-bordered text-center table-hover table-lg">
              <thead class = 'thead-dark'>
                <tr>
                  <th scope="col">Week #</th>
                  <th scope="col">Overview</th>
                  <th scope="col">Topic 1</th>
                  <th scope="col">Topic 2</th>
                  <th scope="col">Topic 3</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Day 1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">Day 2</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">Day 3</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">Day 4</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">Day 5</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">Day 6</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">Day 7</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">Assignments</th>
                  <td colspan="2">Larry the Bird</td>
                  <td>@twitter</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table> */}
           <h1>Hackathon Week</h1><br></br>
           <h3>Week 4 consists of a hackathon conducted on the basis of the topics that had been taught in the first 3 weeks of the course. Have fun experimenting new ways of applying what you've learnt!</h3>
           <br></br>
           <h3> Link to the hackathon - <a href = "https://www.kaggle.com/c/iitgaisummerhackathon">Link</a></h3>
            <br /> <br />
            <h2>Solution Approach to the hackathon by IITG.ai members Debarshi Chanda and Manan Kakkar - <a href = "https://www.kaggle.com/debarshichanda/summer-hackathon-solution-approach">Link</a></h2>
            <br></br><br></br>
            <h2>Congratulations to the <b>Winners</b> of the Hackathon:</h2><br></br>
            <h3> 1st Place - Rohit R : <a href = "https://docs.google.com/document/d/1_0sGUUmIcYnUZVaB1KepR7c4fxccNnYNfk59wy6EdJ4/edit">Code Link</a></h3>
            <h3>2nd Place - Pranshu Kandoi : <a href = "https://docs.google.com/document/d/1VU4tFU5Oc-f6yiMxepD4tswdI8s1NKXDoAljovfMS-k/edit?usp=sharing">Code Link</a></h3>
            <h3>3rd Place - Pranshu Pandya : <a href = "https://docs.google.com/document/d/1MPyZ3X26x48KJlmCa4amXKSoKx9W_dEtEV4EmxbDzQE/edit?usp=sharing">Code Link</a></h3>
            <h3>4th Place - Amish : <a href = "https://drive.google.com/drive/folders/15iUGaUp_bf245fFDDfwxL-yKL4XU1RxM?usp=sharing">Code Link</a></h3>
            <h3>5th Place - Varun Bharadwaj : <a href = "https://docs.google.com/document/d/1kDQKGRvGWrwDDSR5PMZBjYw6ji1hCSSRfuEFahYhiSU/edit">Code Link</a></h3>
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
      </div>
    );
  }
}

export default Course_week_4;
