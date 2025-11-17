import './CourseInfo.css'
type Course ={
    title : string,
    instructor:string,
    duraition: string,
    description:string,

}
function CourseInfo(){
    let course : Course={
        title: "Excel",
        instructor:"Abdullah Jabali",
        duraition:"8 weeks",
        description:"Advaced Excel",
    }
    return (
      <div className="card">
        <h2>{course.title}</h2>
        <p>{course.instructor}</p>
        <p>{course.duraition}</p>
        <p>{course.description}</p>
      </div>
    );
}
export default CourseInfo