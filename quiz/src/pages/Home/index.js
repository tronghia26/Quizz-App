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
                  <img src="/assets/image/featured-item-01.png" alt="icon" />
                </div>
                <h3 className="inner-title">Modern Strategy</h3>
                <p className="inner-desc">
                  Customize anything in this template to fit your website needs
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="inner-box">
                <div className="inner-icon">
                  <img src="/assets/image/featured-item-01.png" alt="icon" />
                </div>
                <h3 className="inner-title">Best Relationship</h3>
                <p className="inner-desc">
                  Contact us immediately if you have a question in mind
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="inner-box">
                <div className="inner-icon">
                  <img src="/assets/image/featured-item-01.png" alt="icon" />
                </div>
                <h3 className="inner-title">Ultimate Marketing</h3>
                <p className="inner-desc">
                  You just need to tell your friends about our free templates
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
                <p className="inner-desc">
                  Nullam sit amet purus libero. Etiam ullamcorper nisl ut augue
                  blandit, at finibus leo efficitur. Nam gravida purus non
                  sapien auctor, ut aliquam magna ullamcorper.
                </p>
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
