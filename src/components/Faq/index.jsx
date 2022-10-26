import { useState, useEffect } from 'react';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

import { BiChevronDown } from 'react-icons/bi';

import api from '../../services/api';

import Title from '../Title';

import variables from '../../assets/scss/variables.module.scss';

import './styles.scss';

const Faq = () => {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await api.get('/');
      setFaqs(data);
    })();
  }, []);

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
        {faqs.map((faq) => (
          <MyAccordion
            key={faq.question}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </div>
    </section>
  );
};

export default Faq;
