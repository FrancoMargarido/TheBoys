import React from "react";

const Footer = ({ saludo }) => {
  return (
    <div className="footer">
      <div className="footer__container container grid">
        <div className="footer__content grid">
          <div className="footer__data">
            <h3 className="footer__title">Vought Company</h3>
            <h6>{saludo}</h6>
            <p className="footer__description"></p>
            <div>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                className="footer__social"
              >
                <i className="ri-facebook-box-fill"></i>
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                className="footer__social"
              >
                <i className="ri-twitter-fill"></i>
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                className="footer__social"
              >
                <i className="ri-instagram-fill"></i>
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                className="footer__social"
              >
                <i className="ri-youtube-fill"></i>
              </a>
            </div>
          </div>
          <div className="footer__data">
            <h3 className="footer__subtitle">Acerca</h3>
            <ul>
              <li className="footer__item">
                <a href="" className="footer__link">
                  Vought Company
                </a>
              </li>
              <li className="footer__item">
                <a href="" className="footer__link">
                  History
                </a>
              </li>
              <li className="footer__item">
                <a href="" className="footer__link">
                  The 7
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__data">
            <h3 className="footer__subtitle">Compound V</h3>
            <ul>
              <li className="footer__item">
                <a href="" className="footer__link">
                  Permanent V
                </a>
              </li>
              <li className="footer__item">
                <a href="" className="footer__link">
                  24hs V
                </a>
                Name
              </li>
              <li className="footer__item">
                <a href="" className="footer__link"></a>
              </li>
            </ul>
          </div>
          <div className="footer__data">
            <h3 className="footer__subtitle">Support</h3>
            <ul>
              <li className="footer__item">
                <a href="" className="footer__link">
                  Mails
                </a>
              </li>
              <li className="footer__item">
                <a href="" className="footer__link">
                  Complaints
                </a>
              </li>
              <li className="footer__item">
                <a href="" className="footer__link">
                  Offices
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__rights">
          <div className="footer__terms">
            <a href="#" className="footer__terms-link">
              Terms and Conditionss
            </a>
            <a href="#" className="footer__terms-link">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
