import "./App.css";
import { bandInfo } from "./Components/DummyData/DummyData";
import Band from "./Components/Band/Band";
import BandContainer from "./Components/BandContainer/BandContainer";
import Header from "./Components/Header/Header";
import Cart from "./Components/Cart/Cart";
import DashBoard from "./Components/DashBoard/DashBoard";

function App() {
  return (
    <div>
      <Header></Header>
      <BandContainer></BandContainer>
      {/* <div className="container">
        <BandContainer></BandContainer>
        <Cart></Cart>
      </div> */}
    </div>
  );
}

export default App;
