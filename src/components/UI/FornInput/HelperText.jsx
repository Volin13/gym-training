import css from './FormInput.module.css';
import PropTypes from 'prop-types';

const HelperText = ({
  value = '',
  errorText = '',
  textSucsess = '',
}) => {
  if (value && errorText) {
    return <small className={css.smallEror}> {errorText} </small>;
  } else if (value && !errorText) {
    return (
      <small className={css.smallSucsess}> {textSucsess} </small>
    );
  } else return <small></small>;
};

HelperText.propTypes = {
  value: PropTypes.string,
  errorText: PropTypes.string,
  textSucsess: PropTypes.string,
};

export default HelperText;
