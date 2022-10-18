import Title from '../Title';

import './styles.scss';

const IoT = ({ iotRef }) => {
  return (
    <section ref={iotRef} className="iot">
      <div className="iot__container container">
        <Title text="IoT" subtext="Internet of Things" />
      </div>
    </section>
  );
};

export default IoT;
