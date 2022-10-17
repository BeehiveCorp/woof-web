import { BiMouse, BiDownArrowAlt } from 'react-icons/bi';

import Button from '../Button';

import variables from '../../assets/scss/variables.module.scss';
import './styles.scss';

const Hero = ({ iotRef }) => {
  return (
    <section className="hero">
      <div className="hero__container container">
        <h2>
          Cuide da saúde do seu pet com a <span>tecnologia</span>!
        </h2>
        <p>
          Faz muitas viagens e sempre precisa deixar seu pet com alguém? Com nossos
          produtos você pode cuidar do seu cão à distância graças ao IoT.
        </p>

        <Button
          text="Conhecer"
          isSolid
          hasIcon
          customStyle={{ marginTop: 60, fontSize: '2rem' }}
        />

        <div
          className="scroll-down"
          onClick={() => iotRef?.current?.scrollIntoView({})}
        >
          <BiMouse size={32} />
          <BiDownArrowAlt size={24} color={variables.primary} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
