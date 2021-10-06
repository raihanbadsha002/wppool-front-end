import React from "react";

const BlogSlider = () => {
  return (
    <div className="blog_sec">
    <div className="container blog_slider_sec">
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-10">
            <div className="custom_carousal d-flex justify-content-center">
              <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                  <div className="blog_slider d-flex align-items-center">
                    <div className="blog_content align-self-center">
                      <h4 style={{color: "#092772"}}>Latest from the Blog</h4>
                      <p style={{fontWeight:"100"}}>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna.
                      </p>
                      <button className="custom_btn_1 custom_visit_btn">Visit the Blog</button>
                    </div>
                    <div className="blog_image">
                      <img
                        src="https://cdn.pixabay.com/photo/2019/06/02/17/33/woman-4246954_960_720.jpg"
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                  </div>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                  <div className="blog_slider d-flex align-items-center">
                    <div className="blog_content align-self-center">
                    <h4 style={{color: "#092772"}}>Latest from the Blog</h4>
                      <p style={{fontWeight:"100"}}>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna.
                      </p>
                      <button className="custom_btn_1 custom_visit_btn">Visit the Blog</button>
                    </div>
                    <div className="blog_image">
                      <img
                        src="https://cdn.pixabay.com/photo/2016/12/01/18/17/mobile-phone-1875813_960_720.jpg"
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="blog_slider d-flex align-items-center">
                    <div className="blog_content align-self-center">
                    <h4 style={{color: "#092772"}}>Latest from the Blog</h4>
                      <p style={{fontWeight:"100"}}>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna.
                      </p>
                      <button className="custom_btn_1 custom_visit_btn">Visit the Blog</button>
                    </div>
                    <div className="blog_image">
                      <img
                        src="https://cdn.pixabay.com/photo/2015/02/02/11/09/office-620822_960_720.jpg"
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
        </button>
      </div>
      <div className="custom_horizontal">
         <hr/>
      </div>
     
    </div>
    </div>
  );
};

export default BlogSlider;
