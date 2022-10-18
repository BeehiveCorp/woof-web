import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

import { BiChevronDown } from 'react-icons/bi';

import Title from '../Title';

import variables from '../../assets/scss/variables.module.scss';

import './styles.scss';

const Faq = () => {
  const MyAccordion = ({ question, answer }) => {
    return (
      <Accordion className="accordion">
        <AccordionSummary
          className="accordion__summary"
          expandIcon={
            <div
              style={{
                background: variables.dark3,
                borderRadius: '50%',
                width: 48,
                height: 48,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <BiChevronDown size={32} color={variables.primary} />
            </div>
          }
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className="text">{question}</Typography>
        </AccordionSummary>

        <AccordionDetails className="accordion__details">
          <Typography className="text">{answer}</Typography>
        </AccordionDetails>
      </Accordion>
    );
  };

  return (
    <section className="faq">
      <Title text="Perguntas frequentes" subtext="FAQ" />
      <div className="faq__container container">
        <MyAccordion
          question="Como o kit é instalado?"
          answer="Durante a compra de seu pacote, caso faça a escolha pela instalação profissional, você poderá agendar a visita de um especialista.z"
        />
        <MyAccordion
          question="Tenho mais de um pet, o produto é para mim?"
          answer="Ao se aproximar do comedor, você receberá um alerta e poderá ver qual dos seus pets que se encontra ali, podendo então, liberar ou não a comidinha. Lembrando que cada pet tem um comportamento ao se alimentar, então, recomendamos testar para ver se essa solução será viável para você e seus pets."
        />
        <MyAccordion
          question="Posso adquirir novas funcionalidades ao meu plano?"
          answer="Claro, você pode começar com apenas uma solução!"
        />
        <MyAccordion
          question="Meu pet precisa de algum tipo de treinamento?"
          answer="Não."
        />
      </div>
    </section>
  );
};

export default Faq;
