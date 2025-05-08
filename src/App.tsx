import "./App.css";
import { Footer } from "./Components/Footer/Footer";
import { Navbar } from "./Components/Navbar/Navbar";
import { MainPage } from "./Pages/MainPage/MainPage";
import "./assets/fonts/fonts.css";

function App() {
  return (
    <div
      style={{ fontFamily: "mangoFont, sans-serif", letterSpacing: "1px" }}
      className="App"
    >
      <Navbar />
      <div className="main-page">
        <MainPage />
      </div>

      <Footer />
    </div>
  );
}

export default App;
