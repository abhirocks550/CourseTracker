import React from 'react';
import './NavigationBar.css';
import { Link, IndexLink } from 'react-router';

const NavBar = (props) => {
    let navBarSection =
        <section id="navBar-section">
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header" id="navBarHeading">
                        <span>Course Tracker</span>
                    </div>
                    <ul className="nav navbar-nav">
                        <li><IndexLink to="/" activeClassName="active" >Add Course</IndexLink></li>
                        <li>
                            <Link to="existingCourses"
                                activeClassName="active">
                                Existing Courses</Link>
                        </li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li><Link to="#">
                            <span className="glyphicon glyphicon-log-out" />
                            <span> Logout</span>
                        </Link></li>
                    </ul>
                </div>
            </nav>
        </section>;

    return navBarSection;
  };

export default NavBar;
