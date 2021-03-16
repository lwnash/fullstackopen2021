import React from "react";

const Header = ({ name }) => {
  return <h2>{name}</h2>;
};

const Part = ({ part }) => {
  return (
    <li>
      {part.name} {part.exercises}
    </li>
  );
};

const Content = ({ course }) => {
  return (
    <div>
      <Header name={course.name} />
      <ul>
        {course.parts.map((part) => (
          <Part part={part} key={part.id} />
        ))}
      </ul>
      <strong>
        total of {course.parts.reduce((acc, cur) => (acc += cur.exercises), 0)}{" "}
        exercises
      </strong>
    </div>
  );
};

const Course = ({ courses }) => {
  return (
    <div>
      <h1>Web development curriculum</h1>
      {courses.map((course) => (
        <Content course={course} key={course.id} />
      ))}
    </div>
  );
};

export default Course;
