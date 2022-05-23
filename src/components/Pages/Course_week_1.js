import React, { Component } from "react";
import PageHeader from "./PageHeader";
import './Course/course_table.css';

class Course_week_1 extends Component {
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
                  <th className="active-tab">
                    <a href="#/course/week1">Week 1</a>
                  </th>
                  <th>
                    <a href="#/course/week2">Week 2</a>
                  </th>
                  <th>
                    <a href="#/course/week3">Week 3</a>
                  </th>
                  <th>
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
                  <th scope="col">Week 1</th>
                  <th scope="col">Overview</th>
                  <th scope="col">Topic 1</th>
                  <th scope="col">Topic 2</th>
                  <th scope="col">Topic 3</th>
                </tr>
              </thead>
              <tbody>
              <tr>
                  <th scope="row">Day 1</th>
                  <td>Python Environment Setup and Introduction to Python</td>
                  <td><p>Anaconda Setup<br></br>
                  <a href = "https://www.datacamp.com/community/tutorials/installing-anaconda-windows" target="blank">Windows</a>
                  <br></br><a href = "https://www.datacamp.com/community/tutorials/installing-anaconda-mac-os-x" target="blank">Mac OS</a></p></td>
                  <td>
                  <p><a href = "https://pythonforundergradengineers.com/opening-a-jupyter-notebook-on-windows.html#:~:text=The%20last%20way%20to%20open" target="blank">Setting Up Jupyter Notebook</a></p></td>
                  <td><p><a href = "https://youtube.com/playlist?list=PL-osiE80TeTt2d9bfVyTiXJA-UTHn6WwU" target="blank">Python - (until video 9)</a></p></td>
                </tr>
              <tr>
                  <th scope="row">Day 2</th>
                  <td>Python Data Structures like Dictionary and insight into the OS Library</td>
                  <td><p><a href = "https://github.com/anandprabhakar0507/Python-dictionary-tutorial/blob/master/2.3_Dictionaries.ipynb" target="blank">Python Dictionary</a></p></td>
                  <td><p><a href = "https://www.tutorialsteacher.com/python/os-module" target="blank">OS Module</a></p></td>
                  <td>-</td>
                </tr>
                <tr>
                  <th scope='row'>Day 3</th>
                  <td>A complete walkthrough of the very essential Numpy Library</td>
                  <td><p><a href = "https://youtu.be/GB9ByFAIAH4" target="blank">Numpy - Part 1</a></p></td>
                  <td><p><a href = "https://cs231n.github.io/python-numpy-tutorial/" target="blank">Numpy - Part 2</a></p></td>
                  <td><p><a href = "https://numpy.org/numpy-tutorials/content/save-load-arrays.html"  target="blank">Numpy - Part 3</a></p></td>
                </tr>
                <tr>
                  <th scope="row">Day 4</th>
                  <td>An introduction to the Pandas Library which is used to preprocess data and work with datasets</td>
                  <td colSpan = "3">
                    <p><a href = "https://www.youtube.com/watch?v=yzIMircGU5I&list=PL5-da3qGB5ICCsgW1MxlZ0Hq8LL5U3u9y&index=2" target="blank">Pandas ( Till video 13 )</a></p>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Day 5</th>
                  <td>A deeper dive into the Pandas Library</td>
                  <td colSpan = "3">
                    <p><a href = "https://www.kaggle.com/learn/pandas" target="blank">Pandas - Kaggle Micro Course</a></p>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Day 6</th>
                  <td>A walkthrough of the Matplotlib Library, a multi-platform data visualization library built on NumPy arrays</td>
                  <td><p><a href = "https://www.kaggle.com/prashant111/matplotlib-tutorial-for-beginners" target="blank">Matplotlib Beginner notebook 1</a></p></td>
                  <td>
                    <p><a href = "https://www.kaggle.com/sanikamal/data-visualization-using-matplotlib" target="blank">Matplotlib Beginner notebook 2</a></p>
                  </td>
                  <td><p><a href="https://matplotlib.org/stable/tutorials/index.html#" target="blank">Matplotlib Documentation</a></p></td>
                </tr>
                <tr className="active-row blue">
                  <th scope="row">Additional Resources</th>
                  <td>Extra Resources - Be above the Rest</td>
                  <td><p><a href = "https://youtube.com/playlist?list=PL-osiE80TeTt2d9bfVyTiXJA-UTHn6WwU" target="blank">Python - Remaining</a><br></br>
                  <a href = "https://developers.google.com/edu/python" target="blank">Python</a>
                  </p></td>
                  <td>
                  <p><a href = "https://mentat.za.net/numpy/" target="blank">Numpy</a>
                  <br></br><a href = "https://towardsdatascience.com/the-python-glob-module-47d82f4cbd2d" target="blank">Glob Module</a></p></td>
                  <td><p>
                  <a href = "https://www.youtube.com/watch?v=yzIMircGU5I&list=PL5-da3qGB5ICCsgW1MxlZ0Hq8LL5U3u9y&index=2" target="blank">Pandas - Remaining</a></p>
                  </td>
                </tr>
                <tr className="active-row">
                  <th scope="row" >ASSIGNMENTS</th>
                  <td>Test your clarity of the topics taught throughout this week</td>
                  <td><p><a href = "https://docs.google.com/forms/d/e/1FAIpQLSdxXi4mP9Y3NksG8hML6EvDxRm27iINIKIb68kMxN04LFOqdA/viewform" target="blank">Python Quiz</a></p></td>
                  <td><p><a href = "https://github.com/rougier/numpy-100/blob/master/100_Numpy_exercises_with_hints.md" target="blank">Self-Graded Numpy Assignment</a></p></td>
                  <td></td>
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

export default Course_week_1;
