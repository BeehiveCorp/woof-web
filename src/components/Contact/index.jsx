import { useRef, useState } from 'react';
import { TextField } from '@mui/material';

import Button from '../Button';
import Title from '../Title';
import BlurEffect from '../BlurEffect';

import variables from '../../assets/scss/variables.module.scss';

import './styles.scss';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');

  const handleContactSubmit = (e) => {
    e.preventDefault();
    alert('Ainda não envia para o servidor 🚧');
  };

  const MyInput = ({ isTheFirstOne, isTheLastOne, ...rest }) => {
    const inputRef = useRef(null);

    const inputStyle = {
      paddingBlock: 8,
      paddingInline: 8,
      paddingInlineEnd: 24,
      borderEndEndRadius: isTheLastOne ? 8 : 0,
      borderEndStartRadius: isTheLastOne ? 8 : 0,
      borderStartEndRadius: isTheFirstOne ? 8 : 0,
      borderStartStartRadius: isTheFirstOne ? 8 : 0,
      background: variables.dark1,
      color: variables.light0,
      fontSize: '1.6rem',
      fontFamily: variables.main,
    };

    const inputLabelStyle = {
      paddingInline: 12,
      paddingBlock: 8,
      fontSize: '1.6rem',
      fontFamily: variables.main,
      color: variables.light1,
    };

    return (
      <TextField
        {...rest}
        className="field"
        InputLabelProps={{ style: inputLabelStyle }}
        InputProps={{
          style: inputStyle,
          ref: inputRef,
          disableUnderline: true,
        }}
        type="text"
        variant="filled"
        fullWidth
      />
    );
  };

  return (
    <section className="contact">
      <Title text="Contato" subtext="Fale conosco" />
      <div className="contact__container container">
        <form onSubmit={handleContactSubmit}>
          <MyInput label="Nome" name="name" type="text" isTheFirstOne />
          <MyInput label="E-mail" name="email" type="email" />
          <MyInput label="Assunto" name="subject" type="text" isTheLastOne />
          <Button
            customStyle={{ marginTop: 24, width: '100%', fontSize: '2rem' }}
            text="ENVIAR"
          />
        </form>
      </div>

      <BlurEffect customStyle={{ left: -200, top: 0, width: 400 }} />
    </section>
  );
};

export default Contact;
