import footerLogo from '../../assets/images/logo.svg';
import './Footer.css';
import Cta from './Cta';
import location from '../../assets/images/icon-location.svg';
import phone from '../../assets/images/icon-phone.svg';
import email from '../../assets/images/icon-email.svg';


const Footer = () => {
  return (
    <footer className="footer">
      <Cta />
      <div className="footer-item">
        <div className="footer-logo">
          <img src={footerLogo} alt="logo" />
        </div>
        <div className="footer-links">
          <section className="footer-contacts">
            <aside className="contact-item">
              <img src={location} alt="location" />
              <p className="location">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua
              </p>
            </aside>
            <aside className="contact-item">
              <img src={phone} alt="phone" />
              <p className="location">
                +1-543-123-4567
              </p>
            </aside>
            <aside className="contact-item">
              <img src={email} alt="email" />
              <p className="location">
                example@fylo.com
              </p>
            </aside>
          </section>

          <section className="footer-nav">
            <aside className="footer-nav-item">
              <a href="/"> About Us</a>
              <a href="/"> Jobs</a>
              <a href="/"> Press</a>
              <a href="/"> Blog</a>
            </aside>

            <aside className="footer-nav-item">
              <a href="/"> Contact Us</a>
              <a href="/"> Terms</a>
              <a href="/"> Privacy</a>
            </aside>
          </section>

          <section className="footer-social">
            <a href="/facebook">Facebook</a>
            <a href="/twitter">Twitter</a>
            <a href="/instagram">Instagram</a>
          </section>
        </div>
      </div>
    </footer>
  );
}

export default Footer;