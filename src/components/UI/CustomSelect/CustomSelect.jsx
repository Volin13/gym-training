import React, { useState } from 'react';
import css from './CustomSelect.module.css';
import { ReactComponent as ArrowDownIcon } from '../../../assets/images/MediaIcons/arrow-down-338-svgrepo-com.svg';
import { ReactComponent as ArrowUpIcon } from '../../../assets/images/MediaIcons/arrow-up-337-svgrepo-com.svg';

const CustomSelect = ({
  options,
  onChange,
  difficalty,
  classDifficalty,
  clasesName,
}) => {
  const [isOpenSelect, setIsOpenSelect] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  console.log(classDifficalty);
  console.log(clasesName);
  const toggleDropdown = () => {
    setIsOpenSelect(!isOpenSelect);
  };

  const handleOptionClick = option => {
    setSelectedOption(option);
    setIsOpenSelect(false);
    onChange(option);
  };

  return (
    <div
      className={css.custom_select}
      onMouseLeave={() => setIsOpenSelect(false)}
    >
      {!isOpenSelect ? (
        <button
          type="button"
          onClick={toggleDropdown}
          className={css.selectIcon}
        >
          <ArrowDownIcon />
        </button>
      ) : (
        <button
          type="button"
          onClick={toggleDropdown}
          className={css.selectIcon}
        >
          <ArrowUpIcon />
        </button>
      )}

      <div className={css.selected_option} onClick={toggleDropdown}>
        {selectedOption
          ? selectedOption
          : classDifficalty ||
            clasesName ||
            `${difficalty ? 'Difficalty' : 'Class'}`}
      </div>
      {isOpenSelect && (
        <ul className={css.options}>
          {options.map(option => (
            <li
              key={option}
              onClick={() => handleOptionClick(option)}
              className={
                selectedOption === option ? css.selected : ''
              }
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
