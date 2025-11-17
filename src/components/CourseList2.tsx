let courses = [
  "React Basics",
  "Advanced React",
  "React with TypeScript",
  "State Management",
  "React and APIs",
  "Testing React Apps",
  "React Performance Optimization",
  "React Hooks in Depth",
  "Building Forms with React",
  "React Router Essentials",
];
function CourseList2() {
  return (
    <div>
      <h1>Course List</h1>
      <ul>
        {courses.map((course) =>(
            <li>{course}</li>
        )
    )}
      </ul>
    </div>
  );
}
export default CourseList2
