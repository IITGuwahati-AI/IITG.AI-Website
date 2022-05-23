import React, { Component } from "react";
import PageHeader from "./PageHeader";
import './Course/course_table.css';

class Course_week_2 extends Component {
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
                  <th className="active-tab">
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
                  <th scope="col">Week 3</th>
                  <th scope="col">Overview</th>
                  <th scope="col">Task 1</th>
                  <th scope="col">Task 2</th>
                  <th scope="col">Task 3</th>
                  <th scope="col">Optional Tasks</th>
                </tr>
              </thead>
              <tbody>
              <tr>
                  <th scope="row">Day 1</th>
                  <td>Support Vector Machines</td>
                  <td><p><a href = "https://youtu.be/hCOIMkcsm_g?list=PLLssT5z_DsK-h9vYZkQkYNWcItqhlRJLN" target="blank">Support Vector Machines (12.1 - 12.5)</a></p></td>
                  <td><p><a href = "https://towardsdatascience.com/support-vector-machine-introduction-to-machine-learning-algorithms-934a444fca47" target="blank">SVM Blog</a><br></br><br></br><a href="https://www.kaggle.com/faressayah/support-vector-machine-pca-tutorial-for-beginner" target="blank">Kaggle Notebook</a></p></td>
                  <td><p>Start Assignment 1</p></td>
                  <td><p><a href = "http://cs229.stanford.edu/notes2019fall/cs229-notes3.pdf" target="blank">CS229 Lecture Notes - SVM</a></p></td>
                </tr>
              <tr>
                  <th scope="row">Day 2</th>
                  <td>Bias vs Variance Tradeoff</td>
                  <td><p><a href = "https://youtu.be/fDQkUN9yw44?list=PLLssT5z_DsK-h9vYZkQkYNWcItqhlRJLN" target="blank">Bias and Variance(10.4-10.5)</a></p></td>
                  <td><p><a href="https://www.youtube.com/watch?v=EuBBz3bI-aA&ab_channel=StatQuestwithJoshStarmer" target="blank">Statquest video - Bias and Variance</a></p></td>
                  <td><p><a href = "https://www.analyticsvidhya.com/blog/2020/08/bias-and-variance-tradeoff-machine-learning/" target="blank">Blog 1</a><br></br><br></br><a href="http://scott.fortmann-roe.com/docs/BiasVariance.html" target="blank">Blog 2</a></p></td>
                  <td><p><a href = "https://machinelearningmastery.com/calculate-the-bias-variance-trade-off/" target="blank">Calculating Bias-Variance Tradeoff</a></p></td>
                </tr>
                <tr>
                  <th scope='row'>Day 3</th>
                  <td>Unsupervised Learning</td>
                  <td><p><a href = "https://youtu.be/Ev8YbxPu_bQ?list=PLLssT5z_DsK-h9vYZkQkYNWcItqhlRJLN" target="blank">KMeans & PCA (13.1 - 14.7)</a></p></td>
                  <td><p><a href = "https://builtin.com/data-science/step-step-explanation-principal-component-analysis" target="blank">PCA Theory</a><br></br><br></br><a href="https://towardsdatascience.com/pca-using-python-scikit-learn-e653f8989e60" target="blank">PCA Implementation</a><br></br><br></br><a href = "https://www.javatpoint.com/k-means-clustering-algorithm-in-machine-learning">K-Means Algorithm</a></p></td>
                  <td><p>Start Assignment 2</p></td>
                  <td><p><a href = "https://www.youtube.com/watch?v=4b5d3muPQmA" target="blank">StatQuest Video- KMeans Clustering</a><br></br><br></br><a href="http://cs229.stanford.edu/notes2020spring/cs229-notes10.pdf" target="blank">CS229 PCA</a></p></td>
                </tr>
                <tr>
                  <th scope="row">Day 4</th>
                  <td>Trees</td>
                  <td><p><a href = "https://www.youtube.com/watch?v=PHxYNGo8NcI&ab_channel=codebasics" target="blank">Decision Trees</a><br></br><br></br><a href="https://www.youtube.com/watch?v=ok2s1vV9XW0" target="blank">Random Forest</a></p></td>
                  <td><p><a href = "https://www.kaggle.com/prashant111/decision-tree-classifier-tutorial" target="blank">Decision Trees Implementation</a><br></br><br></br><a href="https://www.kaggle.com/raviolli77/random-forest-in-python" target="blank">Random Forest Implementation</a></p></td>
                  <td><p>Try applying Tree algorithms to the Dataset given in Week 2</p></td>
                  <td><p><a href = "https://jakevdp.github.io/PythonDataScienceHandbook/05.08-random-forests.html" target="blank">Python DS Handbook</a></p></td>
                </tr>
                <tr>
                  <th scope="row">Day 5</th>
                  <td>Handling Real world Data - 1</td>
                  <td><p><a href = "https://towardsdatascience.com/a-gentle-introduction-to-exploratory-data-analysis-f11d843b8184" target="blank">Introduction to EDA</a></p></td>
                  <td><p><a href = "https://www.youtube.com/watch?v=Ea_KAcdv1vs&ab_channel=takshilalearntakshilalearn" target="blank">Example Application</a></p></td>
                  <td><p><a href = "https://www.kaggle.com/learn/data-cleaning" target="blank">Data Cleaning</a><br></br><br></br><a href="https://www.kaggle.com/learn/feature-engineering" target="blank">Feature Engineering</a></p></td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">Day 6</th>
                  <td>Handling Real world Data - 2</td>
                  <td><p><a href = "https://www.kaggle.com/learn/intermediate-machine-learning" target="blank">Kaggle Microcourse on Machine learning</a></p></td>
                  <td><p><a href = "https://www.youtube.com/watch?v=AFarfEqgU_8&ab_channel=CODESTUDIOCODESTUDIO" target="blank">Titanic example</a></p></td>
                  <td><p><a href = "https://youtu.be/vtm35gVP8JU?list=PLZoTAELRMXVPiKOxbwaniXjHJ02bdkLWy" target="blank">Housing Prices Part 1</a><br></br><br></br><a href="https://youtu.be/htXcQPsaGWw?list=PLZoTAELRMXVPiKOxbwaniXjHJ02bdkLWy" target="blank">Housing Prices Part 2</a></p></td>
                  <td></td>
                </tr>
                <tr className="active-row blue">
                  <th scope="row">Additional Resources</th>
                  <td>Notebooks for more practice</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className="active-row">
                <th scope="row" >ASSIGNMENTS</th>
                  <td>Test your clarity of the topics taught throughout this week</td>
                  <td><p><a href = "https://drive.google.com/drive/folders/1B4qkh_sEpBocpCE88tZZjN_JWTMIntKM?usp=sharing" target="blank">Assignment 1</a><br></br><br></br>Deadline - Day 7 11:59pm</p></td>
                  <td><p><a href = "https://drive.google.com/drive/folders/12XQMZW-ckmIGO7rO-Fy99bNtrGSNLh7X?usp=sharing" target="blank">Assignment 2</a><br></br><br></br>Deadline - Day 7 11:59pm</p></td>
                  <td></td>
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

export default Course_week_2;
