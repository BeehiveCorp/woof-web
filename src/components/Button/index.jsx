import { BiRightArrowAlt } from 'react-icons/bi';
import { darken } from 'polished';
import variables from '../../assets/scss/variables.module.scss';

import './styles.scss';

const Button = ({ hasIcon, isSolid, isInactive, text, onPress, customStyle }) => {
  let btnStyle = {};

  if (isInactive) btnStyle.background = variables.dark2;
  else if (isSolid) btnStyle.background = variables.primary;
  else {
    btnStyle.background = 'transparent';
    btnStyle.border = `1px solid ${variables.primary}`;
  }

  return (
    <button
      style={customStyle}
      onClick={onPress}
      className={`btn ${isSolid ? 'isSolid' : ''} ${isInactive ? 'isInactive' : ''}`}
    >
      {text ? text : 'Dev, insert some text'}
      {hasIcon && (
        <div
          className="icon-container"
          style={{
            backgroundColor: darken(0.04, btnStyle.background),
          }}
        >
          <BiRightArrowAlt size={24} />
        </div>
      )}
    </button>
  );
};

export default Button;
