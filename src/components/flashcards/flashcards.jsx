import Flashcard from "./cards/flashcard";
import "./flashcards.css";

function FlashcardsContainer({ flashcards }) {
  return (
    <div className="cardContainer">
      <Flashcard question="What is React?" answer="A js thing" />
      <Flashcard question="What is React?" answer="A js thing" />
      <Flashcard question="What is React?" answer="A js thing" />
      {flashcards.map((flashcard, index) => (
        <Flashcard
          key={index}
          question={flashcard.question}
          answer={flashcard.answer}
        />
      ))}
    </div>
  );
}

// function FlashcardsContainer() {
//   return (
//     <div className="cardContainer">
//       <Flashcard question="What is React?" answer="A js thing" />
//       <Flashcard question="What is React?" answer="A js thing" />
//       <Flashcard question="What is React?" answer="A js thing" />
//     </div>
//   );
// }

export default FlashcardsContainer;
