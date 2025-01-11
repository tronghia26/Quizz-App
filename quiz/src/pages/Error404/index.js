import "./Error404.css";

function Error404() {
  return (
    <>
      <body class="bg-purple">
        <div class="stars">
          <div class="custom-navbar">
            <div class="brand-logo">
              <img
                src="http://salehriaz.com/404Page/img/logo.svg"
                width="80px"
                alt=""
              />
            </div>
            <div class="navbar-links">
              <ul>
                <li>
                  <a
                    href="http://localhost:3000/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="http://localhost:3000/about"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="http://localhost:3000/contact"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="central-body">
            <img
              class="image-404"
              src="http://salehriaz.com/404Page/img/404.svg"
              width="300px"
              alt=""
            />
            <a
              href="http://localhost:3000/"
              rel="noopener noreferrer"
              class="btn-go-home"
              target="_blank"
            >
              GO BACK HOME
            </a>
          </div>
          <div class="objects">
            <img
              class="object_rocket"
              src="http://salehriaz.com/404Page/img/rocket.svg"
              width="40px"
              alt=""
            />
            <div class="earth-moon">
              <img
                class="object_earth"
                src="http://salehriaz.com/404Page/img/earth.svg"
                width="100px"
                alt=""
              />
              <img
                class="object_moon"
                src="http://salehriaz.com/404Page/img/moon.svg"
                width="80px"
                alt=""
              />
            </div>
            <div class="box_astronaut">
              <img
                class="object_astronaut"
                src="http://salehriaz.com/404Page/img/astronaut.svg"
                width="140px"
                alt=""
              />
            </div>
          </div>
          <div class="glowing_stars">
            <div class="star"></div>
            <div class="star"></div>
            <div class="star"></div>
            <div class="star"></div>
            <div class="star"></div>
          </div>
        </div>
      </body>
    </>
  );
}

export default Error404;
