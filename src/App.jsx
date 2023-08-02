import "./App.css";
import Footer from "./component/Footer";
import Header from "./component/Header";
import MainContent from "./component/MainContent";
import Myprofile from "./component/Myprofile";
import Portfolio from "./component/Portfolio";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Myprofile />
        <MainContent />
        <Portfolio />
        <Footer />
      </div>
    </>
  );
}

export default App;
