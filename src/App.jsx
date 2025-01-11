import React from "react";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Memories from "./Components/Memories/Memories";
import Savannah from "./Components/Savannah/Savannah";
import Covers from "./Components/Covers/Covers";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <div>
        <Header />
        <Home />
        <Memories />
        <Savannah />
        <Covers />
        <Footer />
      </div>
    </>
  );
}

export default App;
