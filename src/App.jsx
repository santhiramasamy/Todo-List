import "./App.css";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  let user = "shanthi";

  return (
    <div className="app">
      <Header user={user} />
      <Content />
      <Footer user="suganya" />
    </div>
  );
}

export default App;
