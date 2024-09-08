import React from "react";
import "./specialoffer.css";

const Specialoffer = () => {
  return (
    <>
      <h1>SPECIAL OFFERS</h1>
      <section className="annoucement background">
        <div className="container d_flex">
          <div className="banner-img1 banner">
            <img src="./assets/banner/banner-1.png" />
          </div>
          <div className="banner-img2 banner">
            <img src="./assets/banner/banner-2.png" />
          </div>
          <div className="banner-img3 banner">
            <img src="./assets/banner/banner-3.jpg" />
          </div>
        </div>
      </section>

      {/* <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="./assets/banner/banner-1.png" class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src="./assets/banner/banner-1.png" class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src="./assets/banner/banner-1.png" class="d-block w-100" alt="..." />
    </div>
  </div>
</div> */}
    </>
  );
};

export default Specialoffer;
