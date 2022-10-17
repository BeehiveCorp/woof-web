import { useState, useEffect } from 'react';
import { BiMenuAltRight, BiX } from 'react-icons/bi';

import Button from '../Button';

import brand from '../../assets/images/brand/horizontal-brand-white-text.svg';
import './styles.scss';

const Header = () => {
  const [isHeaderActive, setHeaderActive] = useState(false);
  const [isMenuLinksVisible, setMenuLinksVisible] = useState(false);

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

  const handleToggleMenuLinks = () => {
    setMenuLinksVisible(!isMenuLinksVisible);
  };

  return (
    <header className={`header ${isHeaderActive ? 'active' : ''}`}>
      <div className="header__container container">
        <div className="logo">
          <img src={brand} alt="Logo da Woof!" />
        </div>

        <div className="menu">
          <ul className={`menu__links ${isMenuLinksVisible ? 'active' : ''}`}>
            <li>
              <a href="#">IoT</a>
            </li>
            <li>
              <a href="#">O que é?</a>
            </li>
            <li>
              <a href="#">Dispositivos</a>
            </li>
            <li>
              <a href="#">Contato</a>
            </li>
            <BiX id="toggle-menu-close" onClick={handleToggleMenuLinks} size={32} />
          </ul>

          <div className="menu__buttons">
            <Button onPress={() => alert('not working yet 🚧')} text="Entrar" />
            <BiMenuAltRight
              onClick={handleToggleMenuLinks}
              id="toggle-menu-open"
              size={32}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
