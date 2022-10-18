import {
  BiWifi,
  BiCctv,
  BiPulse,
  BiUserVoice,
  BiMobileAlt,
  BiCalendar,
} from 'react-icons/bi';

import Title from '../Title';

import variables from '../../assets/scss/variables.module.scss';

import './styles.scss';

const IoT = () => {
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
    <section className="woof">
      <Title text="O que é?" subtext="Woof!" />

      <div className="woof__container container">
        <div className="content">
          <div className="title">Afinal, como a IoT melhora a vida do meu pet?</div>
          <p className="description">
            Com os produtos Woof! você tem comando de quase tudo relacionado à{' '}
            <span className="highlight">saúde</span>,{' '}
            <span className="highlight">bem-estar</span> e{' '}
            <span className="highlight">segurança</span> do seu pet, desde o controle
            de sua alimentação até seu sono e necessidade de vacinas.{' '}
          </p>

          <div className="cards">
            <Card
              icon={<BiWifi size={32} color={variables.light0} />}
              topic="Controle"
              description="Libere água e comida de onde estiver"
            />
            <Card
              icon={<BiCctv size={32} color={variables.light0} />}
              topic="Veja tudo"
              description="Tenha acesso a seu ambiente mesmo fora de casa"
            />
            <Card
              icon={<BiPulse size={32} color={variables.light0} />}
              topic="Emoções"
              description="Podemos mensurar a qualidade do dia do pet"
            />
            <Card
              icon={<BiUserVoice size={32} color={variables.light0} />}
              topic="Alexa"
              description="Integre o sistema Woof! com sua Alexa"
            />
            <Card
              icon={<BiMobileAlt size={32} color={variables.light0} />}
              topic="Notificações"
              description="Receba lembretes da agenda do seu melhor amigo"
            />
            <Card
              icon={<BiCalendar size={32} color={variables.light0} />}
              topic="Eventos"
              description="Agende eventos, consultas, vacinas, medicamentos e seja lembrado"
            />
          </div>
        </div>

        <div className="floating">
          <div className="sub-products">
            <div className="sub-products__sub-product">
              <p>Woof! Diet</p>
            </div>
            <div className="sub-products__sub-product">
              <p>Woof! Rest</p>
            </div>
            <div className="sub-products__sub-product">
              <p>Woof! Security</p>
            </div>
            <div className="sub-products__sub-product">
              <p>Woof! Health</p>
            </div>
            <div className="sub-products__sub-product">
              <p>Woof! Hygiene</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IoT;
