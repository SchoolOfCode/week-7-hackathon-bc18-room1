import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import "./components/flashcards/flashcards.css"
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Form from "./components/form/form";
import FlashcardsContainer from "./components/flashcards/flashcards";
// import "./components/flashcards/cards/flashcard.css";
import "./components/header/header.css";

function App() {
  const [flashcards, setFlashcards] = useState([]);

  const addFlashcard = (flashcard) => {
    setFlashcards([...flashcards, flashcard]);
  };

  return (
    <div>
      <Header />
      <Form addFlashcard={addFlashcard} />
      <FlashcardsContainer flashcards={flashcards} />
      <Footer />
    </div>
  );
}

export default App;
