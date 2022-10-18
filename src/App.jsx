import { useRef } from 'react';

import Header from './components/Header';
import Hero from './components/Hero';
import Partners from './components/Partners';
import IoT from './components/IoT';
import Woof from './components/Woof';
import Devices from './components/Devices';
import Pricing from './components/Pricing';
import Contact from './components/Contact';

import BlurEffect from './components/BlurEffect';

function App() {
  const iotRef = useRef(null);

  return (
    <>
      <Header />
      <Hero iotRef={iotRef} />
      <Partners />
      <IoT iotRef={iotRef} />
      <Woof />
      <Devices />
      <Pricing />
      <Contact />

      <BlurEffect customStyle={{ left: -100, top: 500 }} />
      <BlurEffect customStyle={{ right: -100, top: -100 }} />
      <BlurEffect
        customStyle={{ left: -200, top: 2400, width: 400, filter: 'blur(340px)' }}
      />
    </>
  );
}

export default App;
