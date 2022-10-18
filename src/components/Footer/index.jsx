import { FiInstagram, FiTwitter, FiFacebook, FiYoutube } from 'react-icons/fi';

import brand from '../../assets/images/brand/vertical-brand-white.svg';

import variables from '../../assets/scss/variables.module.scss';

import './styles.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="logo-container">
          <img src={brand} alt="Logo da Woof!" />
        </div>

        <div className="content">
          <div className="footer-column">
            <h4>Geral</h4>
            <ul>
              <li>
                <a href="#">Termos</a>
              </li>
              <li>
                <a href="#">Privacidade</a>
              </li>
              <li>
                <a href="#">Cookies</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Links</h4>
            <ul>
              <li>
                <a href="#">Início</a>
              </li>
              <li>
                <a href="#">IoT</a>
              </li>
              <li>
                <a href="#">Woof!</a>
              </li>
              <li>
                <a href="#">Dispositivos</a>
              </li>
              <li>
                <a href="#">Planos</a>
              </li>
              <li>
                <a href="#">Contato</a>
              </li>
              <li>
                <a href="#">Perguntas freq.</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Sobre</h4>
            <p>
              Woof! é um produto idealizado e desenvolvido pela Beehive, startup de
              inovação e tecnologia, em parceria com a Steck.
            </p>
            <div className="social-icons">
              <a href="#">
                <FiInstagram />
              </a>
              <a href="#">
                <FiTwitter />
              </a>
              <a href="#">
                <FiFacebook />
              </a>
              <a href="#">
                <FiYoutube />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
