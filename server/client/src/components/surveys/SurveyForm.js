import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import _ from 'lodash';

import emailValidator from '../../utils/validateEmails';
import SurveyField from './SurveyField';
import formFields from './formFields';

class SurveyForm extends Component {
  renderFields() {
    return _.map(formFields, ({ label, name }) => {
      return (
        <Field
          key={name}
          label={label}
          type='text'
          name={name}
          component={SurveyField}
        />
      );
    });
  }
  render() {
    return (
      <div>
        <form
          onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}
        >
          {this.renderFields()}
          <Link to='/surveys' className='red btn-flat white-text'>
            Cancel
          </Link>
          <button
            type='submit'
            className='teal btn-flat right white-text'
          >
            NEXT
            <i className='material-icons right'>done</i>
          </button>
        </form>
      </div>
    );
  }
}

SurveyForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onSurveySubmit: PropTypes.func.isRequired
};

const validate = (values) => {
  const errors = {};

  errors.recipients = emailValidator(values.recipients || '');
  _.each(formFields, ({ label, name }) => {
    if (!values[name]) {
      errors[name] = `You nust provide a ${label}`;
    }
  });

  return errors;
};

export default reduxForm({
  validate,
  form: 'surveyForm',
  destroyOnUnmount: false
})(SurveyForm);
