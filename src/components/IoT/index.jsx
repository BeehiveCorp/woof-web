import { BiStation, BiTargetLock, BiCloud } from 'react-icons/bi';

import Title from '../Title';

import variables from '../../assets/scss/variables.module.scss';

import './styles.scss';

const IoT = ({ iotRef }) => {
  const Card = ({ icon, topic, description }) => {
    return (
      <div className="card">
        <div className="card__header">
          {icon}
          <span>{topic}</span>
        </div>
        <p>{description}</p>
      </div>
    );
  };

  return (
    <section ref={iotRef} className="iot">
      <Title text="IoT" subtext="Internet of Things" />

      <div className="iot__container container">
        <div className="explanation">
          <p>
            Internet of Things (ou Internet das Coisas) é uma tecnologia que permite
            transformar objetos em dispositivos inteligentes utilizando{' '}
            <span className="highlight">sensores</span>,{' '}
            <span className="highlight">dados</span> coletados e a{' '}
            <span className="highlight">internet</span>.
          </p>
        </div>

        <div className="cards">
          <Card
            icon={<BiStation size={64} color={variables.primary} />}
            topic="Sensores"
            description="detectam estímulos físicos de determinado espaço e geram dados"
          />
          <Card
            icon={<BiTargetLock size={64} color={variables.primary} />}
            topic="Dados"
            description="os dados são processados e remodelados a partir de alguma regra"
          />
          <Card
            icon={<BiCloud size={64} color={variables.primary} />}
            topic="Internet"
            description="toda informação é enviada para a Internet e fica disponível na nuvem"
          />
        </div>
      </div>
    </section>
  );
};

export default IoT;
