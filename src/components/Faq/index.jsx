import Title from '../Title';

import variables from '../../assets/scss/variables.module.scss';

import './styles.scss';

const Faq = () => {
  return (
    <section className="faq">
      <Title text="Perguntas frequentes" subtext="FAQ" />
      <div className="faq__container container"></div>
    </section>
  );
};

export default Faq;
