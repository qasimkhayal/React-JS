import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Contact from "./components/Contact";
import About from "./components/About";
import Home from "./components/Home";
import Courses from "./components/CoursesGroup";
// import UserList from "./components/UserList";
import UserDetails from "./components/UserDetails";
import PostList from "./components/PostList";
import UserListAssign from "./assignments/a01/a01/UserListAssign";
import ProductList from "./assignments/a01/a01/ProductList";
function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/users"
                >
                  Users
                </Link>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/courses">
                  Courses
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/posts">
                  Post List
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/users">
                  User List
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">
                  Product List
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <div>
        <main>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            {/* <Route path="/users" element={<UserList />}></Route> */}
            <Route path="/users/id:" element={<UserDetails />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/courses" element={<Courses />}></Route>
            <Route path="/posts" element={<PostList />}></Route>
            <Route path="/users" element={<UserListAssign />}></Route>
            <Route path="/products" element={<ProductList />}></Route>
          </Routes>
        </main>
      </div>
    </Router>
  );
}
export default App;
