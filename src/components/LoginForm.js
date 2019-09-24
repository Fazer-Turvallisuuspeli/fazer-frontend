import React, { useState, useEffect } from 'react';

import { Formik, Form, Field, ErrorMessage } from 'formik';

const LoginForm = () => {
  const [units, setUnits] = useState([]);

  const fetchUnits = async () => {
    try {
      const response = await fetch('/api/v1/game/info');
      const data = await response.json();

      setUnits(data.units);
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
        setTimeout(() => {
          console.log('TODO redux login reducer');
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400)
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

export default LoginForm;
