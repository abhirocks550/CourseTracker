import React from 'react';
import * as courseConst from '../../common/Constants';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateInput, setValue, getAllCourses } from '../../actions/existingCourseActions';
import './ExistingCourse.css';
import { Link } from 'react-router';

class ExistingCourses extends React.Component {
  componentWillMount() {
    this.props.getAllCourses();
  }

  handleUpdateInput(event) {
    this.props.updateInput(event);
  }

  onClickListItem(topic) {
    this.props.setValue({ setFor: 'selectedTopic', val: topic });
  }

  render() {
    let courseListOptions = this.props.existingCourses.coursesList.map((course, index) => {
      return (
        <option key={index}>
          {course.courseName}
        </option>
      );
    });
    let courseTopicOptions = this.props.existingCourses.coursesList.map((courseTopics) => {
      if (this.props.existingCourses.courseName === courseTopics.courseName) {

        return courseTopics.title.map((eachCourse, index) => {
          return (
            <li key={index }
            onClick={() => this.onClickListItem(eachCourse)}>
              <Link to="/trackCourse"
                activeClassName="active">
                {eachCourse.courseTitle}
              </Link>
            </li>
          );
        });
      }

    });
    return (
      <section id='existingCourses-section' className='container-fluid'>
        <div className="row no-margin">
          <div className="col-md-6 col-md-offset-3 courseContainer">
            <h2>Select Course:</h2>
            <select name="courseName"
              className="select-course"
              value={this.props.existingCourses.courseName}
              onChange={(event) => this.handleUpdateInput(event)} >
              {courseListOptions}
            </select>
            <h3>List of Topics for course </h3>

            <ul>
              {courseTopicOptions}
            </ul>
          </div>
        </div>

      </section>
    );
  }
}

const mapStateToProps = (_state) => {
  let state = _state;
  return {
    existingCourses: state.existingCourses,
  };
};

const mapDispatchToProps = (_dispatch) => {
  let dispatch = _dispatch;
  return bindActionCreators({ updateInput, setValue, getAllCourses }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ExistingCourses);
