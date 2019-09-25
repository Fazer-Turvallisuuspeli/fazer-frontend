import React from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { push } from 'connected-react-router';

import { setUser } from '../reducers/userReducer';

const LoginForm = ({ info, setUser, push }) => {
  const handleLogin = (user, { setSubmitting }) => {
    setUser(user);
    setSubmitting(false);
    push('/mainMenu');
  };

  return (
    <Formik
      initialValues={{ fazerId: '', lastName: '', unitName: '' }}
      validate={values => {
        // eslint-disable-next-line prefer-const
        let errors = {};
        if (!values.fazerId) {
          errors.fazerId = 'Required';
        }
        if (!values.lastName) {
          errors.lastName = 'Required';
        }
        if (!values.unitName) {
          errors.unitName = 'Required';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) =>
        handleLogin(values, { setSubmitting })
      }>
      {({ isSubmitting }) => (
        <Form>
          <Field type="text" name="fazerId" placeholder="Fazerin ID-numero" />
          <ErrorMessage name="fazerId" component="div" />

          <Field type="text" name="lastName" placeholder="Sukunimi" />
          <ErrorMessage name="lastName" component="div" />

          <Field component="select" name="unitName">
            <option value="">Valitse toimipiste</option>
            {info.units.map(unit => (
              <option key={unit.id} value={unit.name}>
                {unit.name}
              </option>
            ))}
          </Field>
          <ErrorMessage name="unitName" component="div" />

          <button type="submit" disabled={isSubmitting}>
            Kirjaudu sisään
          </button>
        </Form>
      )}
    </Formik>
  );
};

LoginForm.propTypes = {
  info: PropTypes.objectOf(PropTypes.array),
  setUser: PropTypes.func.isRequired,
  push: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    user: state.user,
    info: state.info,
  };
};

const mapDispatchToProps = {
  setUser,
  push,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
