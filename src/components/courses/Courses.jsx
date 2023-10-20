import { useState } from "react";

const courseList = [
  { id: 1, name: "mern", fees: 34000, duration: 540 },
  { id: 2, name: "python", fees: 14000, duration: 100 },
  { id: 3, name: "web", fees: 24000, duration: 240 },
  { id: 4, name: "java", fees: 28000, duration: 300 },
];

const Courses = () => {
  const [courses, setCourses] = useState(courseList);
  const handleDelete = id => {
    const updatedCourse = courses.filter(course => course.id === id);
    setCourses(updatedCourse);
  };
  return (
    <div>
      <ul>
        {courses.map(course => (
          <li
            key={course.id}
            style={{
              display: "flex",
              justifyContent: "space-around",
              padding: "6px 50px",
            }}
          >
            <span style={{ flex: "1 0", textAlign: "left" }}>
              {course.name}
            </span>
            <span style={{ flex: "1 0", textAlign: "left" }}>
              {course.fees}
            </span>
            <span style={{ flex: "1 0", textAlign: "left" }}>
              {course.duration}
            </span>
            <button onClick={() => handleDelete(course.id)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Courses;
