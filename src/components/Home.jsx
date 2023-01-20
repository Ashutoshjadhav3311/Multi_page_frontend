import React from "react";

function Home() {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="https://www.ritavpn.com/blog/wp-content/uploads/2019/11/What-is-end-to-end-encryption.png"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <img
              src="https://i.ibb.co/YcCRRB6/Dmessage-logos-white.png"
              width="250"
              height="250"
              alt=""
            ></img>

            <p>
              Is a free, easy-to-use, encrypted messaging app for Android and
              iOS. All messages are encrypted, private and 100% yours.
            </p>
            <p>Privacy by design </p>
            <p>Only you can read your messages.</p>
            <div>
              {" "}
              <a href="http://localhost:3000/" target="_blank">
                <h1>Signup</h1>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
