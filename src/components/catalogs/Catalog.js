import Student from "./Student";

function Catalog({ title, students }) {
  const questionElements = students.map((student, index) => (
    <Student key={student.name} name={student.name} number={index + 1} />
  ));

  return (
    <div className="container">
      <h2>{title}</h2>
      <div className="questions">{questionElements}</div>
    </div>
  );
}

export default Catalog;
