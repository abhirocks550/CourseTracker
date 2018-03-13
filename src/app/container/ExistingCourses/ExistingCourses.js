import React from 'react';
import * as courseConst from '../../common/Constants';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateInput } from '../../actions/existingCourseActions';


class ExistingCourses extends React.Component {
  handleUpdateInput(event) {
    this.props.updateInput(event);
  }

  render() {
    let courseListOptions = courseConst.courseList.map((courseName, index) => {
      return (
        <option key={index}>{courseName.course}</option>
      );
    });
    let courseTopicOptions = courseConst.courseList.map((courseTopics) => {

      return courseTopics.topics.map((eachCourse, index) => {
        return (
          <li key={index}>{eachCourse}</li>
        );
      });
    });
    return (
      <section id='existingCourses-section' className='container-fluid'>
        <select name="courseName"
        value={this.props.existingCourses.courseName}
         onChange={(event)=> this.handleUpdateInput(event)} >
          {courseListOptions}
        </select>

        <div className="row no-margin">
          <div className="col-md-12">
            <h2>List of Topics for course </h2>

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
    return bindActionCreators({ updateInput }, dispatch);
  };

export default connect(mapStateToProps, mapDispatchToProps)(ExistingCourses);
