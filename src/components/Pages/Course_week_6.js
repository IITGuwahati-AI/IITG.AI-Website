import React, { Component } from "react";
import PageHeader from "./PageHeader";
import './Course/course_table.css';

class Course_week_6 extends Component {
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
                  <th>
                    <a href="#/course/week4">Week 4</a>
                  </th>
                  <th>
                    <a href="#/course/week5">Week 5</a>
                  </th>
                  <th className="active-tab">
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
                  <th scope="col">Week 6</th>
                  <th scope="col">Overview</th>
                  <th scope="col">Topic 1</th>
                  <th scope="col">Topic 2</th>
                  <th scope="col">Topic 3</th>
                </tr>
              </thead>
              <tbody>
              <tr>
              <th scope="row">Day 1</th>
              <td>Bias, Variance and Regularization</td>
                  <td><p>
                  <a href = "https://www.youtube.com/watch?v=1waHlpKiNyY&list=PLkDaE6sCZn6Hn0vK8co82zjQtt3T2Nkqc&index=1" target="blank">C2W1L1 - C2W1L8 (Regularization)</a></p></td>
                  <td>
                  <p><a href = "https://www.youtube.com/watch?v=FDCfw-YqWTE&list=PLkDaE6sCZn6Hn0vK8co82zjQtt3T2Nkqc&index=9" target="blank">C2W1L9-C2W1L11(Weight initialization)</a></p></td>
                  <td><p><a href = "https://drive.google.com/drive/folders/1kXw9bYZwUBEGlUvh84VEOyq4kouaHBdg?usp=sharing" target="blank">Regularization Assignment</a><br></br><br></br><a href="https://drive.google.com/drive/folders/1GKP3_oaH9aeytv3Ahn3o94tY1TLissUR?usp=sharing" target="blank">Initialization Assignment</a></p></td>
                </tr>
              <tr>
                  <th scope="row">Day 2</th>
                  <td>Dealing with Gradients</td>
                  <td><p>
                  <a href = "https://www.youtube.com/watch?v=y1xoI7mBtOc&list=PLkDaE6sCZn6Hn0vK8co82zjQtt3T2Nkqc&index=12" target="blank">C2W1L12 - C2W1L14 (Gradient checking)</a></p></td>
                  <td>
                  <p><a href = "https://drive.google.com/drive/folders/17zrif3bGlYRTNjXFqHHA_XcqkGgFkIMw?usp=sharing" target="blank">Gradient Checking assignment</a></p></td>
                  <td>
                  <p><a href = "https://forms.gle/CSfSjPVLNb8fHsvX7" target="blank">A Quiz to test your understanding</a></p></td>
                </tr>
                <tr>
                  <th scope='row'>Day 3</th>
                  <td>Optimization Algorithms</td>
                  <td><p>
                  <a href = "https://www.youtube.com/watch?v=4qJaSmvhxi8&list=PLkDaE6sCZn6Hn0vK8co82zjQtt3T2Nkqc&index=15" target="blank">C2W2L1 - C2W2L9 (Optimization Algorithms)</a></p></td>
                  <td>
                  <p><a href = "https://analyticsindiamag.com/guide-to-tensorflow-keras-optimizers/" target="blank">An Introduction to Optimizers</a><br></br><br></br><a href="https://www.tensorflow.org/api_docs/python/tf/keras/optimizers" target="blank">Official Docs</a></p></td>
                  <td><p><a href = "https://drive.google.com/drive/folders/1PN7xuIWDA7yX5flE-oq61AiUklkfv7HL" target="blank">Optimization Assignment</a><br></br><br></br><a href="https://docs.google.com/forms/d/e/1FAIpQLSdBtvR3ux7FVxg6lsY0-grS1caQJ6vG0VjGyH3EqPgIY_2afA/viewform?usp=sf_link" target="blank">Quiz for Testing Understanding</a></p></td>
                </tr>
                <tr>
                  <th scope="row">Day 4</th>
                  <td>Hyper Parameter tuning Pt 1</td>
                  <td><p>
                  <a href = "https://www.youtube.com/watch?v=AXDByU3D1hA&list=PLkDaE6sCZn6Hn0vK8co82zjQtt3T2Nkqc&index=24" target="blank">C2W3L1 - C2W3L3 (Course Lecture)</a></p></td>
                  <td>
                  <p><a href = "https://towardsdatascience.com/hyperparameter-optimization-in-python-part-0-introduction-c4b66791614b" target="blank">Blog 1</a><br></br><br></br><a href="https://towardsdatascience.com/hyperparameters-optimization-526348bb8e2d" target="blank">Blog 2</a></p></td>
                  <td><p><a href = "https://blog.floydhub.com/guide-to-hyperparameters-search-for-deep-learning-models/" target="blank">An Extensive Guide for HPO</a></p></td>
                </tr>
                <tr>
                  <th scope="row">Day 5</th>
                  <td>Hyper Parameter tuning Pt 2</td>
                  <td><p>
                  <a href = "https://www.tensorflow.org/tutorials/keras/keras_tuner" target="blank">Keras-tuner HPO for Deep learning</a></p></td>
                  <td>
                  <p><a href = "https://towardsdatascience.com/optuna-a-flexible-efficient-and-scalable-hyperparameter-optimization-framework-d26bc7a23fff" target="blank">Optuna - Introduction</a><br></br><br></br><a href="https://www.kaggle.com/corochann/optuna-tutorial-for-hyperparameter-optimization" target="blank">Optuna Tutorial</a></p></td>
                  <td><p><a href = "https://docs.google.com/forms/d/1hNbmwbLsQVfS0OjYV0fsjuUh_hsMKbbVyYQqspyPr0k/edit?usp=sharing" target="blank">Quiz</a></p></td>
                </tr>
                <tr>
                  <th scope="row">Day 6</th>
                  <td>BatchNorm and Classification</td>
                  <td><p>
                  <a href = "https://www.youtube.com/watch?v=tNIpEZLv_eg&list=PLkDaE6sCZn6Hn0vK8co82zjQtt3T2Nkqc&index=27" target="blank">C2W3L4 - C2W3L10</a></p></td>
                  <td>
                  <p><a href = "https://www.analyticsvidhya.com/blog/2021/03/introduction-to-batch-normalization/" target="blank">Blog 1</a><br></br><br></br><a href="https://machinelearningmastery.com/batch-normalization-for-training-of-deep-neural-networks/" target="blank">Blog 2</a></p></td>
                  <td><p><a href = "https://towardsdatascience.com/multiclass-classification-with-softmax-regression-explained-ea320518ea5d" target="blank">Blog</a><br></br><br></br><a href="https://www.kaggle.com/samsonqian/softmax-regression-with-tensorflow-mnist" target="blank">Notebook for understanding Softmax</a></p></td>
                </tr>
                <tr>
                  <th scope="row">Day 7</th>
                  <td>Tensorflow and Keras</td>
                  <td><p>
                  <a href = "https://www.youtube.com/watch?v=F_uuqfgdZZw&ab_channel=GoogleDevelopersIndia" target="blank">Basic Tensorflow</a></p></td>
                  <td>
                  <p><a href = "https://drive.google.com/drive/folders/1W4fNxfL4MRwEjcwOhcv2EFdD1OP4alU4?usp=sharing" target="blank">Tensorflow Assignment</a></p></td>
                  <td><p><a href = "https://www.tensorflow.org/tutorials/quickstart/beginner" target="blank">Tensorflow 2.0 Quickstart</a></p></td>
                </tr>
                {/* <tr className="active-row">
                  <th scope="row" >Assignments</th>
                  <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer cursus vitae quam quis ullamcorper. Praesent fringilla lorem sagittis ligula pretium.</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                </tr> */}
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

export default Course_week_6;
