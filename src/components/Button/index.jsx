import { BiRightArrowAlt } from 'react-icons/bi';
import variables from '../../assets/scss/variables.module.scss';

import './styles.scss';

const Button = ({ hasIcon, isSolid, isInactive, text, onPress }) => {
  let btnStyle = {};

  if (isInactive) btnStyle.background = variables.dark2;
  else if (isSolid) btnStyle.background = variables.primary;
  else {
    btnStyle.background = 'transparent';
    btnStyle.border = `1px solid ${variables.primary}`;
  }

  return (
    <button
      onClick={onPress}
      className={`btn ${isSolid ? 'isSolid' : ''} ${isInactive ? 'isInactive' : ''}`}
    >
      {text ? text : 'Dev, insert some text'}
      {hasIcon && <BiRightArrowAlt />}
    </button>
  );
};

export default Button;
