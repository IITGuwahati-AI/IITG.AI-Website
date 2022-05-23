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
                  <th className="active-tab">
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
                  <th scope="col">Week 2</th>
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
                  <td>Linear Regression</td>
                  <td><p><a href = "https://www.youtube.com/watch?v=kHwlB_j7Hkc&list=PLLssT5z_DsK-h9vYZkQkYNWcItqhlRJLN&index=4" target="blank">Linear Regression (2.1-2.8)</a></p></td>
                  <td><p><a href = "https://www.youtube.com/watch?v=Q4GNLhRtZNc&list=PLLssT5z_DsK-h9vYZkQkYNWcItqhlRJLN&index=18" target="blank">Linear Regression with Multiple Variables (4.1-4.7)</a></p></td>
                  <td><p>Start Assignment 1</p></td>
                  <td><p><a href = "https://see.stanford.edu/materials/aimlcs229/cs229-notes1.pdf" target="blank">CS229 Probabilistic Interpretation Pages(1-11)</a></p></td>
                </tr>
              <tr>
                  <th scope="row">Day 2</th>
                  <td>Logistic Regression</td>
                  <td><p><a href = "https://www.youtube.com/watch?v=kHwlB_j7Hkc&list=PLLssT5z_DsK-h9vYZkQkYNWcItqhlRJLN&index=4" target="blank">Logistic Regression (6.1-6.7)</a></p></td>
                  <td><p>Start Assignment 2</p></td>
                  <td></td>
                  <td><p><a href = "https://see.stanford.edu/materials/aimlcs229/cs229-notes1.pdf" target="blank">CS229 Probabilistic Interpretation Pages(16-19)</a></p></td>
                </tr>
                <tr>
                  <th scope='row'>Day 3</th>
                  <td>Scikit-learn</td>
                  <td><p><a href = "https://www.youtube.com/watch?v=8jazNUpO3lQ&list=PLeo1K3hjS3uvCeTYTeyfe0-rN5r8zn9rw&index=2" target="blank">Linear Regression with sklearn (2-3)</a></p></td>
                  <td><p><a href = "https://youtu.be/zM4VZR0px8E" target="blank">Logistic Regression with sklearn (8-9)</a></p></td>
                  <td><p><a href="https://drive.google.com/drive/folders/1cGJv2KDTSudff139rqMaF5EHuvI62_kJ?usp=sharing" target="blank">Self-practice notebook</a></p></td>
                  <td><p><a href = "https://drive.google.com/file/d/1MHt0DwhVliClo6mlOwu0-7vT7KZbofNH/view?usp=sharing" target="blank">Andreas C. Muller, Sarah Guido - Introduction to Machine Learning with Python</a></p></td>
                </tr>
                <tr>
                  <th scope="row">Day 4</th>
                  <td>Regularisation </td>
                  <td><p><a href = "https://www.youtube.com/watch?v=u73PU6Qwl1I&list=PLLssT5z_DsK-h9vYZkQkYNWcItqhlRJLN&index=39" target="blank">Regularisation 7.1-7.4</a></p></td>
                  <td><p><a href = "https://towardsdatascience.com/regularization-in-machine-learning-76441ddcf99a" target="blank">Types of regularisation</a><br></br><br></br><a href="https://youtu.be/sO4ZirJh9ds" target="blank">L1 vs L2 regularisation</a></p></td>
                  <td><p><a href = "https://youtu.be/VqKq78PVO9g" target="blank">L1 & L2 regularisation using sklearn</a><br></br><br></br><a href="https://scikit-learn.org/stable/modules/linear_model.html#" target="blank">Sklearn documentation</a></p></td>
                  <td><p><a href = "https://towardsdatascience.com/intuitions-on-l1-and-l2-regularisation-235f2db4c261" target="blank">Intuition behind L1&L2 regularisation</a></p></td>
                </tr>
                <tr>
                  <th scope="row">Day 5</th>
                  <td>Naive Bayes Classifier</td>
                  <td><p><a href = "https://youtu.be/O2L2Uv9pdDA" target="blank">Naive Bayes</a></p></td>
                  <td><p><a href = "https://youtu.be/H3EjCKtlVog" target="blank">Gaussian Naive Bayes</a></p></td>
                  <td><p><a href = "https://youtu.be/vz_xuxYS2PM?t=1146" target="blank">Sklearn implementation</a><br></br><br></br><a href="https://scikit-learn.org/stable/modules/naive_bayes.html" target="blank">Sklearn documentation</a></p></td>
                  <td><p><a href = "http://cs229.stanford.edu/summer2020/cs229-notes5.pdf" target="blank">CS229 Naive Bayes Pages(8-14)</a><br></br><br></br><a href="https://blog.paperspace.com/introduction-to-naive-bayes/" target="blank">Blog</a></p></td>
                </tr>
                <tr>
                  <th scope="row">Day 6</th>
                  <td>Evaluation Metrics</td>
                  <td><p><a href = "https://medium.com/codex/evaluation-metrics-7f21615ab5df" target="blank">Evaluation Metrics</a></p></td>
                  <td><p><a href = "https://youtu.be/4jRBRDbJemM" target="blank">ROC & AUC</a><br></br><br></br><a href="https://towardsdatascience.com/understanding-auc-roc-curve-68b2303cc9c5" target="blank">Reading</a></p></td>
                  <td><p><a href="https://youtu.be/85dtiMz9tSo" target="blank">Evaluate a classifier in sklearn</a></p></td>
                  <td></td>
                </tr>
                <tr className="active-row blue">
                  <th scope="row">Additional Resources</th>
                  <td>Notebooks for more practice</td>
                  <td><p><a href = "https://www.kaggle.com/hamelg/python-for-data-27-linear-regression" target="blank">Notebook - 1</a></p></td>
                  <td><p><a href = "https://www.kaggle.com/hamelg/python-for-data-28-logistic-regression/notebook#Revisiting-the-Titanic" target="blank">Notebook - 2 </a></p></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className="active-row">
                <th scope="row" >ASSIGNMENTS</th>
                  <td>Test your clarity of the topics taught throughout this week</td>
                  <td><p><a href = "https://drive.google.com/drive/folders/1UkJD5uWfzVFpy0viZH7OhbYaJZxNzk98?usp=sharing" target="blank">Assignment 1</a><br></br><br></br>Deadline - Day 7 11:59pm</p></td>
                  <td><p><a href = "https://drive.google.com/drive/folders/1hKVV3k31AV7J46kIL3rYBTMe-bguuWLW?usp=sharing" target="blank">Assignment 2</a><br></br><br></br>Deadline - Day 7 11:59pm</p></td>
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
