import "./App.css";
import Home from "./components/Home";
import MainFooter from "./components/MainFooter";
import MainHeader from "./components/MainHeader";

function App() {
  return (
    <>
      <div className="h-screen">
        <MainHeader />
        <Home />
        <MainFooter />
      </div>
    </>
  );
}

export default App;
