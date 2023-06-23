import css from './FormInput.module.css';
import { ReactComponent as ErorrIcon } from '../../../assets/images/MediaIcons/erorr.svg';
import { forwardRef, useState } from 'react';
import switchStateImages from './switchImages';

const FormInput = forwardRef(function FormInput(props, ref) {
  const {
    placeholder = '',
    type = '',
    switchImages = () => {},
    onBlur = () => {},
    onChange = () => {},
    name = '',
    erorr = '',
    value = '',
    formik,
    id,
    formInputArea = '',
    formInputUserMenu = '',
    autoComplete,
  } = props;
  const [visibility, setVisibility] = useState(true);
  const hendleClearClick = ref => {
    if (ref) return ref.current.focus(ref);
    else return;
  };
  const hendleButtonShown = () => {
    setVisibility(!visibility);
  };
  return (
    <div className={formInputArea}>
      <input
        ref={ref}
        type={type}
        onChange={onChange}
        onBlur={onBlur}
        name={name}
        placeholder={placeholder}
        autoComplete={autoComplete}
        value={value}
        id={id}
        erorr=""
        onClick={e => {
          e.stopPropagation();
        }}
        className={`${css.formInput} ${
          erorr ? css.formInputInvalid : css.formInputValid
        }`}
      />
      <span className={css.formIcon}>{switchImages(name)}</span>
      <span className={css.formStateIcon}>
        {switchStateImages(erorr, value, formInputUserMenu, name)}
      </span>
      {value && (
        <button
          type="button"
          onMouseEnter={hendleButtonShown}
          onMouseLeave={hendleButtonShown}
          onClick={e => {
            formik.setFieldValue(`${name}`, '');
            hendleClearClick(ref);
            hendleButtonShown();
          }}
          style={{ opacity: visibility ? '0' : '1' }}
          className={css.formClearButtonIcon}
        >
          <ErorrIcon />
        </button>
      )}
    </div>
  );
});

export default FormInput;
