import { useFormik } from 'formik';
import React, { useRef } from 'react';
import FormInput from '../../reusableComponents/FormInput/FormInput';
import css from './FreeTrialModal.module.css';
import switchImages from '../FornInput/switchImages';
import * as yup from 'yup';
import HelperText from '../FornInput/HelperText';

let initialValues = {
  name: '',
  email: '',
  password: '',
};
const FreeTrialForm = () => {
  const emailInput = useRef(null);
  const nameInput = useRef(null);
  // const [visibility, setVisibility] = useState(true);
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
    password: yup
      .string()
      .trim()
      .matches(
        /^[a-zA-Zа-яА-ЯА-ЩЬьЮюЯяЇїІіЄєҐґ0-9]+(([' -][a-zA-Zа-яА-Я0-9 ])?[a-zA-Zа-яА-Я0-9]*)*$/,
        'Special symbols are not allowed'
      )
      .min(6, 'Your password is too short')
      .max(16, 'Your password must be 16 characters max')
      .required('Type your password please'),
  });

  const formik = useFormik({
    initialValues,
    validationSchema: registrationSchema,

    onSubmit: (values, { setSubmitting, resetForm }) => {
      setSubmitting(false);
    },
  });

  const isValid = registrationSchema.isValidSync(formik.values);
  return (
    <div className={css.registrComponent}>
      <div className="container">
        <div className={css.registrFormatting}>
          <div className={css.registrForm}>
            <div className={css.registrationTitleFormat}></div>
            <form
              initialValues={formik.initialValues}
              schema={registrationSchema}
              buttonLabel={'Sign Up'}
              formik={formik}
              isValid={isValid}
              divButtonClass={css.divButtonClass}
            >
              <div className={css.formFromat}>
                <div className={css.formIinputFormat}>
                  <FormInput
                    autoComplete="name"
                    formInputArea={css.formInputArea}
                    switchImages={switchImages}
                    placeholder="Name"
                    id="standard-required-register-name"
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
                    id="standard-required-register-email"
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
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeTrialForm;
