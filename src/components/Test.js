function Test({ titlu, questions }) {
  // const titlu = props.titlu
  //const questions = props.questions
  //   const { p1, p2 } = obj; // obj ={p1:'',p2:''}
  // p1 p2
  return (
    <div className="container">
      <h2>{titlu}</h2>
      <div className="questions">{questions}</div>
    </div>
  );
}
export default Test;
