import './styles.scss';

const Title = ({ text, subtext }) => {
  return (
    <div className="sectionTitle">
      {subtext && <span>{subtext}</span>}
      <h3>{text ? text : 'dev, insert some text'}</h3>
    </div>
  );
};

export default Title;
