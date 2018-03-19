import React from 'react';
import { InputBox } from '../../common/InputGroup/InputBox';
import { bindActionCreators } from 'redux';

import { connect } from 'react-redux';
import { updateInput, addTopic, updateTopic, saveCourse } from '../../actions/addCourseActions';

class AddCourse extends React.Component {
  handleSave(event) {
    event.preventDefault();
    let data = {
        courseName: this.props.addCourse.courseName,
        courseTitle: this.props.addCourse.courseTitle,
        link: this.props.addCourse.url,
        topic: this.props.addCourse.topics,
      };
    this.props.saveCourse(data);
  }

  updateInput(event) {
    this.props.updateInput(event);
  }

  addTopic() {
    this.props.addTopic();
  }

  render() {
    return (
        <section id='addCourse-section' className='container-fluid'>
                <div className='col-md-6 col-md-offset-3' id="form-div">
                    <form onSubmit={() => alert('Submitted')}>

                        <div className="row no-margin">

                            <InputBox
                            required="required"
                            value={this.props.addCourse.courseName}
                            label='Course Name:'
                            name='courseName'
                            type='text'
                            placeholder='Enter Course Name'
                            onChange={(event) => this.updateInput(event)} />

                            <InputBox
                            required="required"
                            value={this.props.addCourse.courseTitle}
                            label='Course Title:'
                            name='courseTitle'
                            type='text'
                            placeholder='Enter Course Title'
                            onChange={(event) => this.updateInput(event)} />

                            <InputBox
                            required="required"
                            value={this.props.addCourse.courseURL}
                            label='URL:'
                            name='courseURL'
                            type='url'
                            placeholder='Enter Course URL'
                            onChange={(event) => this.updateInput(event)} />

                        </div>

                        <div className="row no-margin">
                            <h4>Topics:</h4>
                            <div className="col-md-12 no-padding">
                                {
                                this.props.addCourse.topics.map((topic, index) => {
                                    let placeholder = 'Topic-' + (index + 1);
                                    return (
                                                <InputBox
                                                key={index}
                                                required="required"
                                                value={topic.topicName}
                                                name="topicName"
                                                type='text'
                                                placeholder={placeholder}
                                                onChange={
                                                    (event) => this.props.updateTopic({
                                                        val: event.target.value,
                                                        index: index,
                                                      })
                                                } />
                                    );
                                  })
                            }
                            </div>
                        </div>
                        <div className="row no-margin">
                            <button
                            disabled={this.props.addCourse.topics.slice(-1)[0].topic === ''}
                            className="btn btn-default col-md-3" type="button"
                            onClick={() => this.addTopic()}>+</button>
                            <button
                            className="btn btn-primary col-md-3 col-md-offset-6"
                            type="submit"
                            onClick={(event) => this.handleSave(event)}
                            >save</button>
                        </div>

                    </form>
                </div>
            </section>
    );
  }
}
const mapStateToProps = (_state) => {
    let state = _state;
    return {
        addCourse: state.addCourse,
      };
  };

const mapDispatchToProps = (_dispatch) => {
    let dispatch = _dispatch;
    return bindActionCreators({ updateInput, addTopic, updateTopic, saveCourse }, dispatch);
  };

export default connect(mapStateToProps, mapDispatchToProps)(AddCourse);
