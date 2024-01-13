import React from "react";

const Footer = () => {
  const facebookLink =
    "https://www.facebook.com/profile.php?id=100085518428605";
  const webLink = "https://aadarshapaudyal.com.np/?i=1";
  const webLink1 = "https://adarsha59.github.io/";
  return (
    <>
      <footer className="footer">
        <div className="footer-top">
          <div className="container">
            <div className="footer-brand-wrapper">
             

             
            </div>

            <div className="divider"></div>

            <div className="quicklink-wrapper">
              <ul className="quicklink-list">
                <li>
                  <a href="#" className="quicklink-link">
                    Faq
                  </a>
                </li>

                <li>
                  <a href="#" className="quicklink-link">
                    Help center
                  </a>
                </li>

                <li>
                  <a href="#" className="quicklink-link">
                    Terms of use
                  </a>
                </li>

                <li>
                  <a href="#" className="quicklink-link">
                    Privacy
                  </a>
                </li>
              </ul>

              <ul className="social-list">
                <li>
                  <a href={facebookLink}target="_blank" className="social-link">
                    <ion-icon name="logo-facebook"></ion-icon>
                  </a>
                </li>

                <li>
                  <a href={webLink}target="_blank" className="social-link">
                    <ion-icon name="logo-twitter"></ion-icon>
                  </a>
                </li>

                <li>
                  <a href={webLink1}target="_blank" className="social-link">
                    <ion-icon name="logo-pinterest"></ion-icon>
                  </a>
                </li>

                <li>
                  <a href={webLink} target="_blank" className="social-link">
                    <ion-icon name="logo-linkedin"></ion-icon>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container">
            <p className="copyright">
              &copy; 2022 <a href="#"><strong>Adarsha</strong>Paudyal</a>. All Rights Reserved
            </p>

           
          </div>
        </div>
      </footer>

      <a href="#top" className="go-top" data-go-top>
        <ion-icon name="chevron-up"></ion-icon>
      </a>
    </>
  );
};

export default Footer;
