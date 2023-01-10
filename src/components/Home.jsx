import React from "react";

function Home() {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Home page</h1>
            <p>Dcentralized chat</p>
            <p>
              is a free, easy-to-use, encrypted messaging app for Android and
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
