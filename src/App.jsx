import { use, useEffect, useRef, useState } from "react";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import LocomotiveScroll from "locomotive-scroll";
import Header from "./components/Header";
import Page3 from "./components/Page3";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll()
  return (
    <div className="relative bg-black">
      <Header />
      <Page1 />
      <div id='section2'  data-scroll data-scroll-speed='0.3'>
        <Page2 />
        <Page3 locomotiveScroll={locomotiveScroll}/>
      </div>
    </div>
  );
};

export default App;