function Question(props) {
  //showAnswer use state
  return (
    <section>
      <div className="closed">
        <h4>{props.text}</h4>
        <button pnClick={() => {}}>+</button>
        {/* {
            showAnswer && <p>raspuns</p>
        } */}
      </div>
    </section>
  );
}

export default Question;
