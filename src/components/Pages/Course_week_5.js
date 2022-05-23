import React, { Component } from "react";
import PageHeader from "./PageHeader";
import './Course/course_table.css';

class Course_week_5 extends Component {
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
                  <th className="active-tab">
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
                  <th scope="col">Week 5</th>
                  <th scope="col">Overview</th>
                  <th scope="col">Topic 1</th>
                  <th scope="col">Topic 2</th>
                  <th scope="col">Topic 3</th>
                </tr>
              </thead>
              <tbody>
              <tr>
              <th scope="row">Day 1</th>
              <td>Introduction to Deep learning</td>
                  <td><p>
                  <a href = "https://www.youtube.com/watch?v=n1l-9lIMW7E&list=PLkDaE6sCZn6Ec-XTbcX1uRg2_u4xOEky0&index=2" target="blank">C1W1L2-C1W1L4</a></p></td>
                  <td>
                  <p><a href = "https://towardsdatascience.com/intro-to-deep-learning-c025efd92535" target="blank">Blog 1</a><br></br><br></br><a href="https://towardsdatascience.com/an-introduction-to-deep-learning-af63448c122c" target="blank">Blog 2</a></p></td>
                  <td><p><a href = "https://forms.gle/KWoAjFPqVCzw2S3W7" target="blank">Quiz to check your understanding</a></p></td>
                </tr>
              <tr>
                  <th scope="row">Day 2</th>
                  <td>Basics of Neural Networks</td>
                  <td><p>
                  <a href = "https://www.youtube.com/watch?v=eqEc66RFY0I&list=PLkDaE6sCZn6Ec-XTbcX1uRg2_u4xOEky0&index=7" target="blank">C1W2L1 - C1W2L18</a></p></td>
                  <td>
                  <p><a href = "https://towardsdatascience.com/a-beginners-guide-to-neural-networks-d5cf7e369a13" target="blank">Blog 1</a><br></br><br></br><a href="https://towardsdatascience.com/understanding-neural-networks-19020b758230" target="blank">Blog 2</a></p></td>
                  <td>
                  <p><a href = "https://forms.gle/1vjYQEq1y8d62Tnk6" target="blank">Quiz</a><br></br><br></br><a href="https://drive.google.com/drive/folders/1eXLL8GU2R3BDev-GlAjNP64HJBwvN9uE?usp=sharing" target="blank">Logistic Regression As Neural Network</a></p></td>
                </tr>
                <tr>
                  <th scope='row'>Day 3</th>
                  <td>Shallow Neural Networks Pt 1</td>
                  <td><p>
                  <a href = "https://www.youtube.com/watch?v=fXOsFF95ifk&list=PLkDaE6sCZn6Ec-XTbcX1uRg2_u4xOEky0&index=25" target="blank">C1W3L1 - C1W3L5</a></p></td>
                  <td>
                  <p><a href = "https://towardsdatascience.com/building-a-shallow-neural-network-a4e2728441e0" target="blank">Blog</a></p></td>
                  <td><p><a href = "https://docs.google.com/forms/d/e/1FAIpQLScWSByitRVjP9nYzXn-IaGjQx1wbZ_e2PN-OE4gmDIXYwf-eQ/viewform" target="blank">Quiz to check your understanding</a></p></td>
                </tr>
                <tr>
                  <th scope="row">Day 4</th>
                  <td>Shallow Neural Networks Pt 2</td>
                  <td><p>
                  <a href = "https://www.youtube.com/watch?v=Xvg00QnyaIY&list=PLkDaE6sCZn6Ec-XTbcX1uRg2_u4xOEky0&index=30" target="blank">C1W3L6 - C1W3L11 </a></p></td>
                  <td>
                  <p><a href = "https://towardsdatascience.com/neural-net-from-scratch-using-numpy-71a31f6e3675" target="blank">Building neural networks from scratch</a></p></td>
                  <td><p><a href = "https://drive.google.com/drive/folders/1OVtraK7D_osd8m0wUCzgNPUGxs2DBN6w?usp=sharing" target="blank">Planar Data Classification with Neural network</a></p></td>
                </tr>
                <tr>
                  <th scope="row">Day 5</th>
                  <td>Deep Neural Networks Pt 1</td>
                  <td><p>
                  <a href = "https://www.youtube.com/watch?v=2gw5tE2ziqA&list=PLkDaE6sCZn6Ec-XTbcX1uRg2_u4xOEky0&index=36" target="blank">C1W4L1 - C1W4L5</a></p></td>
                  <td>
                  <p><a href = "http://cs229.stanford.edu/notes2020spring/cs229-notes-deep_learning.pdf" target="blank">CS229 Notes Pt 1</a></p></td>
                  <td><p><a href = "http://cs229.stanford.edu/notes2020spring/cs229-notes-deep_learning.pdf" target="blank">CS229 Notes Pt 2</a></p></td>
                </tr>
                <tr>
                  <th scope="row">Day 6</th>
                  <td>Deep Neural Networks Pt 2</td>
                  <td><p>
                  <a href = "https://www.youtube.com/watch?v=qzPQ8cEsVK8&list=PLkDaE6sCZn6Ec-XTbcX1uRg2_u4xOEky0&index=41" target="blank">C1W4L6 - C1W4L8</a></p></td>
                  <td>
                  <p><a href = "https://forms.gle/bgnQUSNKEwfvXH4G7" target="blank">Quiz</a><br></br><br></br><a href="https://drive.google.com/drive/folders/13rnG6g5w4KhoioilJhazt18NkzL5fzHZ?usp=sharing" target="blank">Building your neural network</a></p></td>
                  <td><p><a href = "https://drive.google.com/drive/folders/13nyvQryee_EDFPfWQB6-Ylqe7WX5RP_n?usp=sharing" target="blank">Application of Deep neural network</a></p></td>
                </tr>
                <tr>
                  <th scope="row">Day 7</th>
                  <td>Getting Started with Tensorflow</td>
                  <td><p>
                  <a href = "https://www.tensorflow.org/tutorials/quickstart/beginner" target="blank">Documentation Tutorial</a></p></td>
                  <td>
                  <p><a href = "https://youtu.be/KNAWp2S3w94" target="blank">Tensorflow Youtube Channel</a><br></br><br></br><a href="https://www.youtube.com/watch?v=5Ym-dOS9ssA&list=PLhhyoLH6IjfxVOdVC1P1L5z5azs0XjMsb&index=1" target="blank">TensorFlow further videos - 1,2,3</a></p></td>
                  <td><p><a href = "https://drive.google.com/drive/folders/1c996Oyu80J9HGMF2evqX7M2QbMfuxMhp?usp=sharing" target="blank">Keras Assignments</a></p></td>
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

export default Course_week_5;
