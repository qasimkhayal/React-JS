interface Course {
  id: number;
  name: string;
  duration: string; // e.g. "6 weeks"
  price: number; // in USD
}

const courses: Course[] = [
  { id: 1, name: "React Basics", duration: "4 weeks", price: 0 },
  { id: 2, name: "Advanced React", duration: "6 weeks", price: 79 },
  { id: 3, name: "React with TypeScript", duration: "5 weeks", price: 69 },
  { id: 4, name: "State Management", duration: "3 weeks", price: 49 },
  { id: 5, name: "React and APIs", duration: "4 weeks", price: 59 },
  { id: 6, name: "Testing React Apps", duration: "3 weeks", price: 39 },
  { id: 7, name: "React Performance", duration: "2 weeks", price: 29 },
  { id: 8, name: "React Router Essentials", duration: "2 weeks", price: 19 },
];
function CourseList3() {
  return (
    <div>
      <h1>Course List</h1>
      <ul>
        {courses.map((course) => (
          <li>
            <h2>  {course.id} {course.name} </h2>
            <p> Duration: {course.duration}</p>
            <p> Price: INR {course.price} </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default CourseList3;
