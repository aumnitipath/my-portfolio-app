import "./App.css";
import Footer from "./component/Footer";
import Header from "./component/Header";
import MainContent from "./component/MainContent";
import Myprofile from "./component/Myprofile";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Myprofile />
        <MainContent />
        <Footer />
      </div>
    </>
  );
}

export default App;
