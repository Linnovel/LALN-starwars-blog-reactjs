import React from "react";

function Footer() {
  return (
    <>
      <footer className="text-center text-lg-start bg-black text-muted">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          
        </section>

        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3"></i>Who I'm
                </h6>
                <p>
                 My name is Luis Linares I'm a graphic designer and fullstack Developer
                  based in Venezuela, If you like my work, you can reach me in my social media links.
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Stack</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Javascript
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    React
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Python
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Flask
                  </a>
                </p>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Social media links</h6>
                <p>
                  <a href="https://www.linkedin.com/in/luis-linares-77853b227/" className="text-reset">
                    LinkedIn {''}
                  <i className="fab fa-linkedin"></i> 
                  </a>
                </p>
                <p>
                  <a href="https://github.com/Linnovel" className="text-reset">
                    Github {''}
                    <i className="fab fa-github"></i>
                  </a>
                </p>
                <p>
                  <a href="https://twitter.com/Linnovel_Dev" className="text-reset">
                    Twitter {''}
              <i className="fab fa-twitter"></i>

                  </a>
                </p>
                
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="fas fa-home me-3"></i> Venezuela 
                </p>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  luislinnovel@gmail.com
                </p>
                <p>
                  <i className="fas fa-phone me-3"></i> +58 4141308265
                </p>
                
              </div>
            </div>
          </div>
        </section>

        <div
          className="text-center p-4"
        >
          © 2023 Copyright:
          
        </div>
      </footer>
    </>
  );
}

export default Footer;
