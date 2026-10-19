import { useEffect } from "react";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import LocomotiveScroll from "locomotive-scroll";
import Header from "./components/Header";

const App = () => {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll()
    return () => {
      locomotiveScroll.destroy();
    }
  }, []);
  return (
    <div className="relative bg-white">
      <Header />
      <Page1 />
      <Page2 />
    </div>
  );
};

export default App;