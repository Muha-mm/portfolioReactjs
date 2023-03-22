import "./Footer.css";

import vk from "../../img/footerIcons/vk.png";
import twitter from "../../img/footerIcons/vk.png";
import linkedin from "../../img/footerIcons/linkedin.png";
import inst from "../../img/footerIcons/inst.png";
import github from "../../img/footerIcons/github.png";

const Footer = () => {
  return (

    <footer className="footer">
      <div className="container">
        <ul className="footer__icons">
          <li className="footer__icon">
            <a href="https://vk.com/chackpack">
              <img src={vk} alt="vk" />
            </a>
          </li>
          <li className="footer__icon">
            <a href="#!">
              <img src={inst} alt="inst" />
            </a>
          </li>
          <li className="footer__icon">
            <a href="#!">
              <img src={twitter} alt="twitter" />
            </a>
          </li>
          <li className="footer__icon">
            <a href="https://github.com/Muha-mm">
              <img src={github} alt="github" />
            </a>
          </li>
          <li className="footer__icon">
            <a href="#!">
              <img src={linkedin} alt="linkedin" />
            </a>
          </li>
        </ul>
        <p className="footer__description">© 2023 frontender-portfolio.com</p>
      </div>
    </footer>

  );
};

export default Footer;
