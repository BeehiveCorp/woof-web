import { BiCheck } from 'react-icons/bi';

import Button from '../Button';
import Title from '../Title';

import puppy from '../../assets/images/puppy.png';

import variables from '../../assets/scss/variables.module.scss';

import './styles.scss';

const Pricing = () => {
  const Plan = ({ title, description, price, children }) => {
    return (
      <div className="plan">
        <div className="plan__header">
          <h2>{title}</h2>
          <p>{description}</p>

          <h4>
            R$ {price}/<span>MÊS</span>
          </h4>
          <a href="#">Ou pague uma única vez</a>

          <Button
            customStyle={{
              fontSize: '2rem',
              width: '100%',
            }}
            text="Conhecer"
          />
        </div>

        {children}
      </div>
    );
  };

  const Included = ({ text }) => {
    return (
      <div className="included">
        <div className="check-container">
          <BiCheck size={16} color={variables.primary} />
        </div>
        <p>{text}</p>
      </div>
    );
  };

  return (
    <section className="pricing">
      <div className="pricing__container container">
        <Title text="Planos" subtext="Sua melhor opção" />

        <div className="plans">
          <Plan
            title="Simple"
            description="Perfeito para quem quer praticidade no cuidado do pet."
            price={189}
          >
            <Included text="Até 1 pet" />
            <Included text="Woof! Diet" />
            <Included text="Woof! Health" />
          </Plan>

          <Plan
            title="Standard"
            description="Perfeito para aqueles que passam o dia fora."
            price={259}
          >
            <Included text="Até 3 pets" />
            <Included text="Woof! Diet" />
            <Included text="Woof! Health" />
            <Included text="Woof! Rest" />
          </Plan>

          <Plan
            title="Premium"
            description="Perfeito para quem precisa dar apoio total ao pet."
            price={329}
          >
            <Included text="Até 5 pets" />
            <Included text="Woof! Diet" />
            <Included text="Woof! Health" />
            <Included text="Woof! Rest" />
            <Included text="Woof! Hygiene" />
            <Included text="Woof! Security" />
          </Plan>
        </div>

        <div className="info">
          <p className="observation">
            Conheça um plano para entender melhor as funcionalidades incluídas. Você
            também pode personalizar seu próprio pacote!
          </p>
          <Button
            text="Personalizar"
            isSolid
            hasIcon
            customStyle={{ fontSize: '2rem', zIndex: 100 }}
          />
        </div>

        <img className="puppy" src={puppy} alt="Imagem de cachorro" />
      </div>
    </section>
  );
};

export default Pricing;
