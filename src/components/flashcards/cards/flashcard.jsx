import { useState } from "react";
import "./flashcard.css";

const Flashcard = ({ question, answer }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`flashcard ${isFlipped ? "flipped" : ""}`}
      onClick={handleCardClick}
    >
      <div className="flashcard-front">
        {!isFlipped && <div className="flashcard-text">{question}</div>}
      </div>
      <div className="flashcard-back">
        {isFlipped && <div className="flashcard-text">{answer}</div>}
      </div>
    </div>
  );
};

export default Flashcard;
