import React from 'react';
import * as courseConst from '../../common/Constants';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateInput } from '../../actions/trackCourseActions';
import './TrackCourse.css';
import { Link } from 'react-router';
import { InputBox } from '../../common/InputGroup/InputBox';

class TrackCourses extends React.Component {
  updateInput(event, isCheckBox) {
    this.props.updateInput(event, isCheckBox);
  }

  render() {
    return (
        <section id='trackCourse-section' className='container-fluid'>
                <div className="row no-margin">
                    <div className="col-md-6 col-md-offset-3 courseContainer">
                        <h2>Track Course status:</h2>
        
                        <InputBox
                        className="radioInput"
                        value='yet to start'
                        checked={this.props.trackCourse.status === 'yet to start'}
                        label='yet to start:'
                        name='status'
                        type='radio'
                        onChange={(event) => this.updateInput(event)} />
                        <InputBox
                        className="radioInput"
                        checked={this.props.trackCourse.status === 'in progress'}
                        value='in progress'
                        label='in progress:'
                        name='status'
                        type='radio'
                        onChange={(event) => this.updateInput(event)} />
                        <InputBox
                        className="radioInput"
                        checked={this.props.trackCourse.status === 'completed'}
                        label='completed:'
                        value='completed'
                        name='status'
                        type='radio'
                        onChange={(event) => this.updateInput(event)} />
                        
                        <h4> What did you understand? </h4>
                        <textarea rows="4" cols="85" name='courseDescription'
                            value={this.props.trackCourse.courseDescription}
                            placeholder="Enter your comments here"
                            onChange={(event) => this.updateInput(event)} >
                        </textarea>
                        <InputBox
                        required="required"
                        className="radioInput"
                        label='Teach to others'
                        name='ableToTeach'
                        checked={this.props.trackCourse.ableToTeach}
                        type='checkbox'
                        onChange={(event) => this.updateInput(event, true)} />
                        <button type="submit" className="btn btn-primary saveChanges">
                            Save changes
                        </button>
                    </div>
                </div>

            </section>
    );
  };
}

const mapStateToProps = (_state) => {
    let state = _state;
    return {
        trackCourse: state.trackCourse,
      };
  };

const mapDispatchToProps = (_dispatch) => {
    let dispatch = _dispatch;
    return bindActionCreators({ updateInput }, dispatch);
  };

export default connect(mapStateToProps, mapDispatchToProps)(TrackCourses);
