import { useRef } from 'react';

import Header from './components/Header';
import Hero from './components/Hero';
import IoT from './components/IoT';

import BlurEffect from './components/BlurEffect';

function App() {
  const iotRef = useRef(null);

  return (
    <>
      <Header />
      <Hero iotRef={iotRef} />
      <IoT iotRef={iotRef} />

      <BlurEffect customStyle={{ left: -100, top: 500 }} />
      <BlurEffect customStyle={{ right: -100, top: -100 }} />
    </>
  );
}

export default App;
