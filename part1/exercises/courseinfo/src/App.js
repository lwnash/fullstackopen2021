import React from "react";

const Header = (props) => {
  const course = props.course;

  return <h1>{course}</h1>;
};

const Part = (props) => {
  const name = props.part.name;
  const exercises = props.part.exercises;

  return (
    <p>
      {name} {exercises}
    </p>
  );
};
const Content = (props) => {
  const parts = props.parts;

  return (
    <div>
      <Part part={parts[0]} />
      <Part part={parts[1]} />
      <Part part={parts[2]} />
    </div>
  )
};

const Total = (props) => {
  const parts = props.parts;
  const exercises = parts.reduce((acc, cur) => (acc += cur.exercises), 0);

  return <p>Number of exercises {exercises}</p>;
};

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default App;
