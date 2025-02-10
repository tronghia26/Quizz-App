import { Link } from "react-router-dom";
import "../../styles/Home.scss";
function Home() {
  return (
    <>
      <div className="section-one">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="inner-wrap">
                <h1 className="inner-title">
                  "Test Your Knowledge and Have Fun!"
                </h1>
                <p className="inner-desc">
                  Explore exciting quizzes across various topics. Challenge
                  yourself, learn new things, and enjoy every moment of
                  discovery—all for free!
                </p>
                <Link to="/topic" className="button button-two">
                  START QUIZ NOW
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Section One --> */}

      {/* <!-- Section Two --> */}
      <div className="section-two">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="inner-box">
                <div className="inner-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path d="M249.6 471.5c10.8 3.8 22.4-4.1 22.4-15.5l0-377.4c0-4.2-1.6-8.4-5-11C247.4 52 202.4 32 144 32C93.5 32 46.3 45.3 18.1 56.1C6.8 60.5 0 71.7 0 83.8L0 454.1c0 11.9 12.8 20.2 24.1 16.5C55.6 460.1 105.5 448 144 448c33.9 0 79 14 105.6 23.5zm76.8 0C353 462 398.1 448 432 448c38.5 0 88.4 12.1 119.9 22.6c11.3 3.8 24.1-4.6 24.1-16.5l0-370.3c0-12.1-6.8-23.3-18.1-27.6C529.7 45.3 482.5 32 432 32c-58.4 0-103.4 20-123 35.6c-3.3 2.6-5 6.8-5 11L304 456c0 11.4 11.7 19.3 22.4 15.5z" />
                  </svg>
                </div>
                <h3 className="inner-title">Convenient Practice</h3>
                <p className="inner-desc">
                  This website is specifically designed for practicing and
                  reinforcing knowledge, allowing users to review without the
                  pressure of formal exams. It’s an ideal space to learn and
                  improve skills through various engaging quizzes.
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="inner-box">
                <div className="inner-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M184 0c30.9 0 56 25.1 56 56l0 400c0 30.9-25.1 56-56 56c-28.9 0-52.7-21.9-55.7-50.1c-5.2 1.4-10.7 2.1-16.3 2.1c-35.3 0-64-28.7-64-64c0-7.4 1.3-14.6 3.6-21.2C21.4 367.4 0 338.2 0 304c0-31.9 18.7-59.5 45.8-72.3C37.1 220.8 32 207 32 192c0-30.7 21.6-56.3 50.4-62.6C80.8 123.9 80 118 80 112c0-29.9 20.6-55.1 48.3-62.1C131.3 21.9 155.1 0 184 0zM328 0c28.9 0 52.6 21.9 55.7 49.9c27.8 7 48.3 32.1 48.3 62.1c0 6-.8 11.9-2.4 17.4c28.8 6.2 50.4 31.9 50.4 62.6c0 15-5.1 28.8-13.8 39.7C493.3 244.5 512 272.1 512 304c0 34.2-21.4 63.4-51.6 74.8c2.3 6.6 3.6 13.8 3.6 21.2c0 35.3-28.7 64-64 64c-5.6 0-11.1-.7-16.3-2.1c-3 28.2-26.8 50.1-55.7 50.1c-30.9 0-56-25.1-56-56l0-400c0-30.9 25.1-56 56-56z" />
                  </svg>
                </div>
                <h3 className="inner-title">Effective Learning Support</h3>
                <p className="inner-desc">
                  Through fun and helpful quizzes, the website helps users grasp
                  key concepts. Instant results are provided after completing
                  the quizzes, enabling users to identify their strengths and
                  areas for improvement.
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="inner-box">
                <div className="inner-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM164.1 325.5C182 346.2 212.6 368 256 368s74-21.8 91.9-42.5c5.8-6.7 15.9-7.4 22.6-1.6s7.4 15.9 1.6 22.6C349.8 372.1 311.1 400 256 400s-93.8-27.9-116.1-53.5c-5.8-6.7-5.1-16.8 1.6-22.6s16.8-5.1 22.6 1.6zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm156.4 25.6c-5.3 7.1-15.3 8.5-22.4 3.2s-8.5-15.3-3.2-22.4c30.4-40.5 91.2-40.5 121.6 0c5.3 7.1 3.9 17.1-3.2 22.4s-17.1 3.9-22.4-3.2c-17.6-23.5-52.8-23.5-70.4 0z" />
                  </svg>
                </div>
                <h3 className="inner-title">User-Friendly</h3>
                <p className="inner-desc">
                  The website’s interface is optimized for all users, from
                  students to adults. You can quickly access and practice
                  quizzes effortlessly. The website provides a comfortable and
                  pressure-free environment, allowing you to test your
                  abilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Section Two --> */}

      {/* <!-- Section Three --> */}
      <div className="section-three">
        <div className="container">
          <div className="row align-items-center inner-border-bottom">
            <div className="col-xl-6 col-lg-6 col-md-12">
              <div className="inner-image">
                <img src="/assets/image/left-image.png" alt="img left" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12">
              <div className="inner-content">
                <h3 className="inner-title">Let’s discuss about you project</h3>
                {/* <p className="inner-desc">
                  Nullam sit amet purus libero. Etiam ullamcorper nisl ut augue
                  blandit, at finibus leo efficitur. Nam gravida purus non
                  sapien auctor, ut aliquam magna ullamcorper.
                </p> */}
                <Link to="/create-quiz" className="button button-two">
                  CREATE QUIZ NOW
                </Link>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6 col-md-12">
              <div className="inner-content">
                <h3 className="inner-title">
                  We can help you to grow your business
                </h3>
                <p className="inner-desc">
                  Aenean pretium, ipsum et porttitor auctor, metus ipsum iaculis
                  nisi, a bibendum lectus libero vitae urna. Sed id leo eu dolor
                  luctus congue sed eget ipsum. Nunc nec luctus libero. Etiam
                  quis dolor elit.
                </p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12">
              <div className="inner-image">
                <img src="/assets/image/right-image.png" alt="img right" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Section Three --> */}

      {/* <!-- Section Four --> */}
      <div className="section-four">
        <div className="container">
          <div className="row">
            <div className="col-xl-3">
              <div className="inner-box">
                <div className="inner-content">
                  <div className="inner-number">126</div>
                  <div className="inner-title">Projects</div>
                </div>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="inner-box">
                <div className="inner-content">
                  <div className="inner-number">126</div>
                  <div className="inner-title">Projects</div>
                </div>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="inner-box">
                <div className="inner-content">
                  <div className="inner-number">126</div>
                  <div className="inner-title">Projects</div>
                </div>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="inner-box">
                <div className="inner-content">
                  <div className="inner-number">126</div>
                  <div className="inner-title">Projects</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Section Four --> */}
    </>
  );
}

export default Home;
