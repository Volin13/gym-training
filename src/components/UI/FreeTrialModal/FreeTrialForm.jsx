import React, { useRef, useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import css from './FreeTrialModal.module.css';
import FormInput from '../FornInput/FormInput';
import switchImages from '../FornInput/switchImages';
import HelperText from '../FornInput/HelperText';
import MainBtn from '../MainBtn/MainBtn';
import CustomSelect from '../CustomSelect/CustomSelect';

let initialValues = {
  name: '',
  email: '',
  discipline: '',
  difficalty: '',
  photo: null,
};
const FreeTrialForm = ({ clasesName = '', classDifficalty = '' }) => {
  const nameInput = useRef(null);
  const emailInput = useRef(null);
  const [photo, setPhoto] = useState(null);

  const [selectedOption, setSelectedOption] = useState('');

  const difficalty = ['beginner', 'medium', 'hard'];
  const disciplines = [
    'yoga',
    'fitness',
    'boxing',
    'crossfit',
    'zumba',
  ];
  const handleSelectChange = option => {
    setSelectedOption(option);
    if (difficalty.indexOf(option) === 1) {
      formik.setFieldValue('difficalty', option);
      return;
    }
    if (disciplines.indexOf(option) === 1) {
      formik.setFieldValue('discipline', option);
      return;
    }
  };

  const handleImageChange = e => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      formik.setFieldValue('photo', selectedFile);
      setPhoto(selectedFile);
    } else {
      formik.setFieldValue('photo', null);
      setPhoto(null);
    }
  };
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
    position_id: yup.string().required('Choose your position'),
    photo: yup
      .mixed()
      .nullable()
      .test('type', 'Only jpg/jpeg files are allowed', value => {
        return (
          !value || (value && ['image/jpeg'].includes(value.type))
        );
      })
      .test(
        'size',
        'The image weight must be less than 5 MB',
        value => {
          return !value || (value && value.size <= 5000000);
        }
      )
      .required('Add your photo please'),
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
      <div>
        <div className={css.registrFormatting}>
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
                <div className={css.selectSection}>
                  <CustomSelect
                    options={disciplines}
                    clasesName={clasesName}
                    selectedOption={selectedOption}
                    onChange={handleSelectChange}
                  />
                  <CustomSelect
                    options={difficalty}
                    difficalty={difficalty}
                    classDifficalty={classDifficalty}
                    selectedOption={selectedOption}
                    onChange={handleSelectChange}
                  />
                </div>

                <div className={css.avatarChanger}>
                  <input
                    type="text"
                    readOnly
                    value={photo ? photo.name : 'Upload your photo'}
                    className={`${css.mockInput} ${
                      photo
                        ? css.mockInputActive
                        : css.mockInputInactive
                    }`}
                  />
                  <label
                    htmlFor="newAvatartURL"
                    className={css.avatarChangerLebel}
                  >
                    <div className={css.mockButton}>Upload</div>

                    <div>
                      <input
                        type="file"
                        name="newAvatartURL"
                        onChange={e => {
                          handleImageChange(e);
                        }}
                        className={css.inputTypeFile}
                        id="newAvatartURL"
                        accept="image/*"
                      />
                      <small className={css.fileErorr}>
                        {formik.errors.photo}
                      </small>
                    </div>
                  </label>
                </div>
              </div>
              <MainBtn text="Get" />
              {!isValid && (
                <p className={css.helpInfo}>
                  Fill up your data to get a free trial. We will send
                  one-time pass to your email.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeTrialForm;
