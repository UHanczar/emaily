import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'lodash';

import * as actions from '../../actions/';
import formFields from './formFields';

const SurveyReview = ({ onSurveyReview, formValues, submitSurvey, history }) => (
  <div>
    <h5>Please, confirm your entries</h5>
    <div>
      {_.map(formFields, ({ name, label }) => (
        <div key={name}>
          <label>{label}</label>
          <div>{formValues[name]}</div>
        </div>
      ))}
    </div>
    <button className='yellow darken-3 white-text btn-flat' onClick={onSurveyReview}>Back</button>
    <button
      type='submit'
      className='green btn-flat right'
      onClick={() => submitSurvey(formValues, history)}
    >
      Send Survey
      <i className='material-icons right white-text'>email</i>
    </button>
  </div>
);

SurveyReview.propTypes = {
  onSurveyReview: PropTypes.func.isRequired,
  submitSurvey: PropTypes.func.isRequired
};

const mapStateToProps = state => ({ formValues: state.form.surveyForm.values });

export default connect(mapStateToProps, actions)(withRouter(SurveyReview));
