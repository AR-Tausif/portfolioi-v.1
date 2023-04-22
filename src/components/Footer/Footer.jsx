import React from 'react';

const Footer = () => {
    return (
        <div className='bg-black text-center text-lg-start text-white'>
      <section className='container d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='d-flex justify-content-between'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href="https://www.facebook.com/dev.tausif" className='me-4 text-reset'>
          <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="https://www.twitter.com/dev-tausif" className='me-4 text-reset'>
          <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="https://www.google.com/" className='me-4 text-reset'>
          <i className="fa-brands fa-google"></i>
          </a>
          <a href="https://www.instagram.com/" className='me-4 text-reset'>
          <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/" className='me-4 text-reset'>
          <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://www.github.com/AR-Tausif/" className='me-4 text-reset'>
          <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </section>

      <section className='container'>
        <div className='text-center text-md-start mt-5'>
          <div className='row row-col-1 mt-3'>
            <div className='col mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <i icon="gem" className="me-3" />
                Company name
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
              </p>
            </div>

            <div className='col mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Angular
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  React
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Vue
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Laravel
                </a>
              </p>
            </div>

            <div className='col mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </div>

            <div className='col mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
              <i className="me-3 fa fa-home"></i>
                Habiganj, Sylhet, Bangladesh
              </p>
              <p>
              <i className=" me-3 fa fa-envelope"></i>
                tausif.ritu1@gmail.com
              </p>
              <p>
                <i className="me-3 fa fa-phone" /> +88 01309 980 012
              </p>
              <p>
                <i className="me-3 fa fa-phone" /> + +88 01610 654 847
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
    );
};

export default Footer;