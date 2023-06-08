import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navigator from "./components/Navigator";
import './App.css';


function App() {
  return (
    <>
    <header>
        <Header />
    </header>
    <section>
        <Navigator />
    </section>
    <footer>
      <Footer />
    </footer>
    </>
  )
}

export default App;
