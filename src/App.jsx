import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import "./components/flashcards/flashcards.css"
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Form from "./components/form";
import Flashcard from "./components/flashcards/cards/flashcard";
import FlashcardsContainer from "./components/flashcards/flashcards";
// import "./components/flashcards/cards/flashcard.css";
import "./components/header/header.css";

function App() {
  return (
    <div>
      <Header />
      <Form />
      <FlashcardsContainer />
      <Footer />
    </div>
  );
}

export default App;
