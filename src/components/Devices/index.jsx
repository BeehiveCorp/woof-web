import Title from '../Title';

import './styles.scss';

const Devices = () => {
  return (
    <section className="devices">
      <Title text="Dispositivos" subtext="O que é usado?" />

      <div className="device__container container">devices</div>
    </section>
  );
};

export default Devices;
