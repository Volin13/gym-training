import React, { useRef } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import css from './ContactUsModal.module.css';
import FormInput from '../../UI/FornInput/FormInput';
import switchImages from '../../UI/FornInput/switchImages';
import HelperText from '../../UI/FornInput/HelperText';
import MainBtn from '../../UI/MainBtn/MainBtn';

let initialValues = {
  name: '',
  email: '',
  message: '',
};
const ContactUsForm = () => {
  const nameInput = useRef(null);
  const emailInput = useRef(null);

  const myEmailRegex =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  let registrationSchema = yup.object().shape({
    name: yup
      .string()
      .trim()
      .matches(/^[a-zA-Zа-яА-ЯА-ЩЬьЮюЯяЇїІіЄєҐґ0-9]+$/, {
        message: 'Special symbols are not allowed',
        excludeEmptyString: true,
      })
      .min(1, 'Your name must be 1 character at least')
      .max(16, '16 characters max')
      .required('Type your name please'),
    email: yup
      .string()
      .matches(myEmailRegex, {
        message: 'Your email must be valid',
        name: 'email',
        excludeEmptyString: true,
      })
      .min(5, 'Your email is too short')
      .max(254, 'Your email is too long')
      .lowercase()
      .required('Type your email please'),
    message: yup.string().required('Choose your position'),
  });

  const formik = useFormik({
    initialValues,
    validationSchema: registrationSchema,

    onSubmit: (values, { setSubmitting, resetForm }) => {
      setSubmitting(false);
    },
  });

  // const isValid = registrationSchema.isValidSync(formik.values);
  return (
    <div className={css.contactUs__Form}>
      <div className={css.registrForm}>
        <form
          schema={registrationSchema}
          className={css.freeTrialForm}
        >
          <div className={css.formFromat}>
            <div className={css.formIinputFormat}>
              <FormInput
                autoComplete="name"
                formInputArea={css.formInputArea}
                switchImages={switchImages}
                placeholder="Name"
                id="standard-required-name"
                type="text"
                name="name"
                formik={formik}
                erorr={formik.errors.name}
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                ref={nameInput}
              />
              {formik.errors.name && (
                <HelperText
                  value={formik.values.name}
                  errorText={formik.errors.name}
                />
              )}
            </div>

            <div className={css.formIinputFormat}>
              <FormInput
                autoComplete="email"
                formInputArea={css.formInputArea}
                switchImages={switchImages}
                placeholder="Email"
                formik={formik}
                id="standard-required-email"
                type="email"
                name="email"
                erorr={formik.errors.email}
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                ref={emailInput}
              />
              {formik.touched.email && formik.errors.email && (
                <HelperText
                  value={formik.values.email}
                  errorText={formik.errors.email}
                />
              )}
            </div>
            <textarea
              name="message"
              rows="3"
              className={css.contactUs__textArea}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Contact us and ask your questions."
            ></textarea>
            {formik.touched.message && formik.errors.message && (
              <HelperText
                value={formik.values.message}
                errorText={formik.errors.message}
              />
            )}
          </div>
          <MainBtn text="Send" />
        </form>
      </div>
    </div>
  );
};

export default ContactUsForm;
