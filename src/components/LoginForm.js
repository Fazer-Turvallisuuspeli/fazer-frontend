import React from 'react';

import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const LoginForm = ({ handleLogin }) => {
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
            <option value="Lahti">Lahti</option>
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
  handleLogin: PropTypes.func.isRequired,
};

export default LoginForm;
