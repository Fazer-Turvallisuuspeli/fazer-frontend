import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const LoginForm = ({ handleLogin }) => {
  const [units, setUnits] = useState([]);

  const fetchUnits = async () => {
    try {
      const response = await fetch('http://localhost:8080/units');
      const data = await response.json();

      setUnits(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUnits();
  }, []);

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
            {units.map(unit => (
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
  handleLogin: PropTypes.func.isRequired,
};

export default LoginForm;
