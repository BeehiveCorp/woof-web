import {
  BiWifi,
  BiCctv,
  BiPulse,
  BiUserVoice,
  BiMobileAlt,
  BiCalendar,
  BiLinkExternal,
} from 'react-icons/bi';

import Title from '../Title';

import variables from '../../assets/scss/variables.module.scss';

import './styles.scss';
import { rgba } from 'polished';

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
            <span style={{ color: variables.light0, textDecoration: 'underline' }}>
              dieta
            </span>
            ,{' '}
            <span style={{ color: variables.light0, textDecoration: 'underline' }}>
              conforto
            </span>
            ,{' '}
            <span style={{ color: variables.light0, textDecoration: 'underline' }}>
              segurança
            </span>
            ,{' '}
            <span style={{ color: variables.light0, textDecoration: 'underline' }}>
              saúde
            </span>
            , e{' '}
            <span style={{ color: variables.light0, textDecoration: 'underline' }}>
              higiene
            </span>{' '}
            do seu pet.
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
              <p
                style={{
                  color: variables.woofDiet,
                  background: rgba(variables.woofDiet, 0.03),
                }}
              >
                Woof! Diet
                <BiLinkExternal />
              </p>
            </div>
            <div className="sub-products__sub-product">
              <p
                style={{
                  color: variables.woofRest,
                  background: rgba(variables.woofRest, 0.03),
                }}
              >
                Woof! Rest
                <BiLinkExternal />
              </p>
            </div>
            <div className="sub-products__sub-product">
              <p
                style={{
                  color: variables.woofSecurity,
                  background: rgba(variables.woofSecurity, 0.03),
                }}
              >
                Woof! Security
                <BiLinkExternal />
              </p>
            </div>
            <div className="sub-products__sub-product">
              <p
                style={{
                  color: variables.woofHealth,
                  background: rgba(variables.woofHealth, 0.03),
                }}
              >
                Woof! Health
                <BiLinkExternal />
              </p>
            </div>
            <div className="sub-products__sub-product">
              <p
                style={{
                  color: variables.woofHygiene,
                  background: rgba(variables.woofHygiene, 0.03),
                }}
              >
                Woof! Hygiene
                <BiLinkExternal />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IoT;
