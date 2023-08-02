import "./App.css";
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
      </div>
    </>
  );
}

export default App;
