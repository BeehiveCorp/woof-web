import { useState, useEffect } from 'react';
import { BiMenuAltRight } from 'react-icons/bi';

import Button from '../Button';

import brand from '../../assets/images/brand/horizontal-brand-white-text.svg';
import './styles.scss';

const Header = () => {
  const [isHeaderActive, setHeaderActive] = useState(false);

  useEffect(() => {
    window.removeEventListener('scroll', handleActiveHeader);
    window.addEventListener('scroll', handleActiveHeader, { passive: true });
    return () => window.removeEventListener('scroll', handleActiveHeader);
  }, []);

  const handleActiveHeader = () => {
    if (document.body.scrollTop >= 20 || document.documentElement.scrollTop >= 20) {
      return setHeaderActive(true);
    } else setHeaderActive(false);
  };

  return (
    <header className={`header ${isHeaderActive ? 'active' : ''}`}>
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
