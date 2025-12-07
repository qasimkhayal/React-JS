import { useState } from "react";


const CourseAdd = () => {
  const [courseName, setCourseName] = useState<string>("");
  const [courseDescription, setCourseDescription] = useState<string>("");

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = () => {
    console.log("Handle Submit called");
    setError(null);

    if (courseName.length == 0) {
      setError("Course Name is required");
      return;
    }
    if (courseDescription.length == 0) {
      setError("Course Description is required");
      return;
    }
    setSuccess("All data entered is correct");
  };

  let errorMessage = null;

  if (error) {
    errorMessage = <div className="alert alert-danger">{error}</div>;
  }

  let successMessage = null;
  if (success) {
    successMessage = <div className="alert alert-success">{success}</div>;
  }

  // const CouraeAdd = () => {
  // const [title, setTitle] = useState<string>("");
  // const [description, setDescription] = useState<string>("");
  // const navigate = useNavigate();
  // const addCourse = async () => {
  //   // const course = {
  //   //   title,
  //   //   description,
  //   // };
  //   await fetch(API_URL, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(course),
  //   });
  //   navigate("/courses");
  
  return (
    <div className="container">
      <h2 className="text-primary my-4">Add Course</h2>
      {errorMessage}

      {successMessage}

      <div id="addCourseform" className="border border-1 rounded shadow p-4">
        <div className="mb-4">
          <label htmlFor="titleTextBox" className="form-label fw-bold">
            Course Title
          </label>
          <input
            type="text"
            id="titleTextBox"
            className="form-control"
            placeholder="Enter Course Title like Java, Python, React, etc"
            value={courseName}
            onChange={(event) => setCourseName(event.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="descriptionTextBox" className="form-label fw-bold">
            Course Description
          </label>
          <input
            type="text"
            id="descriptionTextBox"
            className="form-control"
            placeholder="Enter Course Description such as topics"
            value={courseDescription}
            onChange={(event) => setCourseDescription(event.target.value)}
          />
        </div>
        <div className="mt-5">
          <button className="btn btn-primary w-100" onClick={() => handleSubmit()}>
            Add Course
          </button>
        </div>
      </div>
    </div>
  );
};


export default CourseAdd;
