import React from 'react';
import { InputBox } from '../../common/InputGroup/InputBox';
import { bindActionCreators } from 'redux';

// import * as addCourseActions from '../actions/addCourseActions';

import { connect } from 'react-redux';
import { updateInput, addTopic, updateTopic } from '../../actions/addCourseActions';

class AddCourse extends React.Component {
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
                    <form method="POST" onSubmit={() => alert('Worked')}>

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
                            value={this.props.addCourse.url}
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
                                                required="required"
                                                name="topic"
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
                            className="btn col-md-3" type="button"
                            onClick={() => this.addTopic()}>+</button>
                            <button
                            className="btn btn-primary col-md-3 col-md-offset-6"
                            type="submit">save</button>
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
    return bindActionCreators({ updateInput, addTopic, updateTopic }, dispatch);
  };

export default connect(mapStateToProps, mapDispatchToProps)(AddCourse);
