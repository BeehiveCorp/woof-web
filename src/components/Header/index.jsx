import { BiMenuAltRight } from 'react-icons/bi';

import Button from '../Button';

import './styles.scss';
import brand from '../../assets/images/brand/horizontal-brand-white-text.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="header__container container">
        <div className="logo">
          <img src={brand} alt="Logo da Woof!" />
        </div>

        <div className="menu">
          <ul>
            <li>
              <a href="#">IoT</a>
              <a href="#">O que é?</a>
              <a href="#">Dispositivos</a>
              <a href="#">Contato</a>
            </li>
          </ul>

          <div className="menu__buttons">
            <Button onPress={() => alert('not working yet 🚧')} text="Entrar" />
            <BiMenuAltRight id="toggle-menu" size={32} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
