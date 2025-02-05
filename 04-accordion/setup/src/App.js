import React, { useState } from "react";
import data from "./data";
import Question from "./Question";
import SingleQuestion from "./Question";
function App() {
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <div className='container'>
        <h3>questions</h3>
        <section className='info'>
          {questions.map((question) => (
            <Question {...question} key={question.id}/>
          ))}
        </section>
      </div>
    </main>
  );
}

export default App;
