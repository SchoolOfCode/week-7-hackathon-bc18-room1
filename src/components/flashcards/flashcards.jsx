import Flashcard from "./cards/flashcard";
import "./flashcards.css";

function FlashcardsContainer() {
  return (
    <div className="cardContainer">
      <Flashcard question="What is React?" answer="A js thing" />
      <Flashcard question="What is React?" answer="A js thing" />
      <Flashcard question="What is React?" answer="A js thing" />
    </div>
  );
}

export default FlashcardsContainer;
