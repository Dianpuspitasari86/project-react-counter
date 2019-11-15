import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Greeting from "./components/greeting";
import MyButton from "./components/counter";
import ImageAlbum from "./components/imageAlbum";

import imageSea from "./assets/logos/sea.jpeg";

function App() {
  return (
    <fragment>
      <div className="App">
        <Greeting name="Dian Puspita Sari" />
        <ImageAlbum imageSrc={imageSea} />
      </div>
      <center>
        <MyButton />
      </center>
    </fragment>
  );
}

export default App;
