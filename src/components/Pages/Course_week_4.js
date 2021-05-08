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
            <table className="content-table" style={{}}>
              <thead>
              <tr>
                  <th scope="col">Week 4</th>
                  <th scope="col">Overview</th>
                  <th scope="col">Topic 1</th>
                  <th scope="col">Topic 2</th>
                  <th scope="col">Topic 3</th>
                </tr>
              </thead>
              <tbody>
              <tr>
                  <th scope="row">Day 1</th>
                  <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer cursus vitae quam quis ullamcorper. Praesent fringilla lorem sagittis ligula pretium.</td>
                  <td>Lorem ipsum dolor</td>
                  <td>Lorem ipsum dolor</td>
                  <td>Lorem ipsum dolor</td>
                </tr>
              <tr>
                  <th scope="row">Day 2</th>
                  <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer cursus vitae quam quis ullamcorper. Praesent fringilla lorem sagittis ligula pretium.</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope='row'>Day 3</th>
                  <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer cursus vitae quam quis ullamcorper. Praesent fringilla lorem sagittis ligula pretium.</td>
                  <td>Sally</td>
                  <td>72,400</td>
                  <td>Students</td>
                </tr>
                <tr>
                  <th scope="row">Day 4</th>
                  <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer cursus vitae quam quis ullamcorper. Praesent fringilla lorem sagittis ligula pretium.</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">Day 5</th>
                  <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer cursus vitae quam quis ullamcorper. Praesent fringilla lorem sagittis ligula pretium.</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">Day 6</th>
                  <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer cursus vitae quam quis ullamcorper. Praesent fringilla lorem sagittis ligula pretium.</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">Day 7</th>
                  <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer cursus vitae quam quis ullamcorper. Praesent fringilla lorem sagittis ligula pretium.</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                </tr>
                <tr className="active-row">
                  <th scope="row" >Assignments</th>
                  <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer cursus vitae quam quis ullamcorper. Praesent fringilla lorem sagittis ligula pretium.</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                </tr>
              </tbody>
            </table>
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
                  <a href="https://twitter.com/iitgai">
                    <i className="fab fa-twitter"></i>
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
