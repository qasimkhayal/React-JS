function Courses() {
  let courses = [
    "Frontend",
    "Backend",
    "Fullstack",
    "Web Development",
    "Canva",
  ];
  return (
    <div className="container m-4">
      <h2 className="text-warning">List of Courses</h2>

      <ul className="list-group">
        {courses.map((course) => (
          <li className="list-grouo-item">{course}</li>
        ))}
      </ul>
    </div>
  );
}
export default Courses;