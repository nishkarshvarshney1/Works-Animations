import Loader from "./components/Loader";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";

const App = () => {
  return (
    <div className="relative bg-white">
      <Page1 />
      <Loader />
      <Page2 />
    </div>
  )
}

export default App
