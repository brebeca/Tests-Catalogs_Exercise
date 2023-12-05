import "./App.css";
import Question from "./components/Question";
import Test from "./components/Test";
import Catalog from "./components/catalogs/Catalog";
import Container from "./components/Container";
import { useState, Fragment } from "react";
// import React from "react"; => React.useState

// function App() {
//   const questionsElements = ["2 + 5 = ?", "20 - 4 = ?", "-9 -10 = ?"].map(
//     (question) => {
//       return <Question text={question} />;
//     }
//   );

//   const historyQuestions = [
//     "In ce an a inceput primul razbui modial ?",
//     "In ce an a avut loc marea unire ?",
//     "Cine e fost domnitorul cu cea mai lunga domnie ?",
//     "Intre ce ani a domnit stefan cel mare ?",
//     "In ce an a intrat romania in primul razboi modial ?",
//     "Cine a castigat al doilea razboi mondial ?",
//   ].map((question) => {
//     return <Question text={question} />;
//   });

//   const students = [
//     {
//       name: "John",
//     },
//     {
//       name: "Job",
//     },
//     {
//       name: "Bob",
//     },
//     {
//       name: "Maria",
//     },
//     {
//       name: "Ioana",
//     },
//   ];

//   return (
//     <div>
//       <Container title={"Final Exam"}>
//         <Test titlu={"Math Test"} questions={questionsElements} />
//         <Test titlu={"History Test"} questions={historyQuestions} />
//       </Container>

//       <Container title={"Catalog"}>
//         <Catalog title={"First Catalog"} students={students} />
//       </Container>
//     </div>
//   );
// }

// function App() {
//   const questionsElements = ["2 + 5 = ?", "20 - 4 = ?", "-9 -10 = ?"].map(
//     (question) => {
//       return <Question text={question} />;
//     }
//   );

//   const historyQuestions = [
//     "In ce an a inceput primul razbui modial ?",
//     "In ce an a avut loc marea unire ?",
//     "Cine e fost domnitorul cu cea mai lunga domnie ?",
//     "Intre ce ani a domnit stefan cel mare ?",
//     "In ce an a intrat romania in primul razboi modial ?",
//     "Cine a castigat al doilea razboi mondial ?",
//   ].map((question) => {
//     return <Question text={question} />;
//   });

//   const students = [
//     {
//       name: "John",
//     },
//     {
//       name: "Job",
//     },
//     {
//       name: "Bob",
//     },
//     {
//       name: "Maria",
//     },
//     {
//       name: "Ioana",
//     },
//   ];

//   const x = 4;
//   //   let result = x !== 4 ? "3" : "4";
//   //   if (x !== 4) result = "3";
//   //   else result = "4";

//   //   const x = 4;
//   //   let result = x !== 4 && 3;

//   const show = "nkjgbero"; // "test" "catalog"

//   // using variables
// //   const content =
// //     show === "test" ? "Tests" : show === "catalog" ? "Catalog" : "Altceva";

//   return (
//     <div>
//       {/* {x !== 4 ? "3" : "4"} */}

// {/* Inline conditional rendering */}
//       {show === "test" ? "Tests" : show === "catalog" ? "Catalog" : "Altceva";}

//       {/* {show === "test" && (
//         <Container title={"Final Exam"}>
//           <Test titlu={"Math Test"} questions={questionsElements} />
//           <Test titlu={"History Test"} questions={historyQuestions} />
//         </Container>
//       )}
//       {show === "catalog" && (
//         <Container title={"Catalog"}>
//           <Catalog title={"First Catalog"} students={students} />
//         </Container>
//       )} */}
//     </div>
//   );
// }

function App() {
  //   setShow("catalog"); => show = "catalog"
  //   setShow("altceva"); => show = "altceva"
  const questionsElements = ["2 + 5 = ?", "20 - 4 = ?", "-9 -10 = ?"].map(
    (question) => {
      return <Question text={question} />;
    }
  );

  //Math.pow(2,3) // 2^3

  const historyQuestions = [
    "In ce an a inceput primul razbui modial ?",
    "In ce an a avut loc marea unire ?",
    "Cine e fost domnitorul cu cea mai lunga domnie ?",
    "Intre ce ani a domnit stefan cel mare ?",
    "In ce an a intrat romania in primul razboi modial ?",
    "Cine a castigat al doilea razboi mondial ?",
  ].map((question) => {
    return <Question text={question} />;
  });

  const students = [
    {
      name: "John",
    },
    {
      name: "Job",
    },
    {
      name: "Bob",
    },
    {
      name: "Maria",
    },
    {
      name: "Ioana",
    },
  ];

  // destructuring pe array
  // const [el1, le2, le3, le4, le5] = students;

  //   return (
  //     <Fragment>
  //       <div className={"tab"}>
  //         <button
  //           className={`tablinks`}
  //           onClick={() => {
  //             setShow("test"); /** show = "test" */
  //           }}
  //         >
  //           Tests
  //         </button>
  //         <button
  //           className={`tablinks`}
  //           onClick={() => {
  //             setShow("catalog");
  //           }}
  //         >
  //           Catalog
  //         </button>
  //       </div>
  //       {show === "test" && (
  //         <Container title={"Final Exam"}>
  //           <Test titlu={"Math Test"} questions={questionsElements} />
  //           <Test titlu={"History Test"} questions={historyQuestions} />
  //         </Container>
  //       )}
  //       {show === "catalog" && (
  //         <Container title={"Catalog"}>
  //           <Catalog title={"First Catalog"} students={students} />
  //         </Container>
  //       )}
  //     </Fragment>
  //   );

  //   return (
  //     <>
  //       <div className={"tab"}>
  //         <button
  //           className={`tablinks`}
  //           onClick={() => {
  //             setShow("test"); /** show = "test" */
  //           }}
  //         >
  //           Tests
  //         </button>
  //         <button
  //           className={`tablinks`}
  //           onClick={() => {
  //             setShow("catalog");
  //           }}
  //         >
  //           Catalog
  //         </button>
  //       </div>
  //       {show === "test" && (
  //         <Container title={"Final Exam"}>
  //           <Test titlu={"Math Test"} questions={questionsElements} />
  //           <Test titlu={"History Test"} questions={historyQuestions} />
  //         </Container>
  //       )}
  //       {show === "catalog" && (
  //         <Container title={"Catalog"}>
  //           <Catalog title={"First Catalog"} students={students} />
  //         </Container>
  //       )}
  //     </>
  //   );

  // JSX converted by babel
  //   const x = <h1>X</h1>; // => React.createElement("h1",null,"X")
  //   x.key = "1"; //const x =<h1 key="1">X</h1> => React.createElement("h1",{key:"1"},"X")

  // const [show, setShow] = useState(); // (val) { return[undefined,()=>{}] }
  // setShow folosti pt a schimba valoarea lui show
  const [show, setShow] = useState("test"); // (val) { return["test",()=>{}] }

  return (
    <div>
      <div id="ndfsjnc" key="ncwak" className={"tab"}>
        <button
          className={`tablinks`}
          onClick={() => {
            setShow("test"); /** show = "test" */
          }}
        >
          Tests
        </button>
        <button
          className={`tablinks`}
          onClick={() => {
            setShow("catalog");
          }}
        >
          Catalog
        </button>
      </div>
      {show === "test" && (
        <Container title={"Final Exam"}>
          {/* children = {<Test titlu={"Math Test"} questions={questionsElements} />
          <Test titlu={"History Test"} questions={historyQuestions} /> }*/}
          <Test titlu={"Math Test"} questions={questionsElements} />
          <Test titlu={"History Test"} questions={historyQuestions} />
        </Container>
      )}
      {show === "catalog" && (
        <Container title={"Catalog"}>
          {/* {children = {<Catalog title={"First Catalog"} students={students} />} */}
          <Catalog title={"First Catalog"} students={students} />
        </Container>
      )}
    </div>
  );
}

export default App;
