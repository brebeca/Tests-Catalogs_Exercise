import { useState } from "react";

function Question(props) {
  //showAnswer use state
  // Interzis: props.text = "ddd";
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <section>
      <div className="closed">
        <h4>{props.text}</h4>
        <button
          onClick={() => {
            if (showAnswer === true) setShowAnswer(false);
            if (showAnswer === false) setShowAnswer(true);
          }}
        >
          +
        </button>
        {showAnswer === true && <p>raspuns</p>}
      </div>
    </section>
  );
}

export default Question;
