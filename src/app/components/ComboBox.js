'use client'
import OptionDropdown from './OptionDropdown';
import {useEffect, useState, useRef} from 'react';
import Image from 'next/image'
import styles from './styles/combobox.module.css'

export default function ComboBox( ) {
  const [dropdownToggle, setDropdownToggle] = useState(true);
  const [input, setInput] = useState('');
  const [selection, setSelection] = useState('');
  const [selected, setSelected] = useState(false);
  const [options, setOptions]= useState([
    { title: 'Apple', unicode: '\ud83c\udf4e', hidden: false },
    { title: 'Avocado', unicode: '\ud83e\udd51', hidden: false },
    { title: 'Banana', unicode: '\ud83c\udf4c', hidden: false },
    { title: 'Bell pepper', unicode: '\ud83e\udd59', hidden: false },
    { title: 'Blueberries', unicode: '\ud83e\udd5a', hidden: false },
    { title: 'Carrot', unicode: '\ud83e\udd55', hidden: false },
    { title: 'Cherries', unicode: '\ud83c\udf52', hidden: false },
    { title: 'Coconut', unicode: '\ud83e\udd65', hidden: false },
    { title: 'Corn', unicode: '\ud83c\udf3d', hidden: false },
    { title: 'Cucumber', unicode: '\ud83e\udd52', hidden: false },
    { title: 'Eggplant', unicode: '\ud83c\udf46', hidden: false },
    { title: 'Grapes', unicode: '\ud83c\udf47', hidden: false },
    { title: 'Hot Pepper', unicode: '\ud83c\udf36', hidden: false },
    { title: 'Kiwi', unicode: '\ud83e\udd5d', hidden: false },
    { title: 'Lemon', unicode: '\ud83c\udf4b', hidden: false },
    { title: 'Melon', unicode: '\ud83c\udf48', hidden: false },
    { title: 'Mango', unicode: '\ud83c\udf50', hidden: false },
    { title: 'Onion', unicode: '\ud83e\uddc5', hidden: false },
    { title: 'Orange', unicode: '\ud83c\udf4a', hidden: false },
    { title: 'Peach', unicode: '\ud83c\udf51', hidden: false },
    { title: 'Pear', unicode: '\ud83c\udf50', hidden: false },
    { title: 'Peanuts', unicode: '\ud83e\udd5c', hidden: false },
    { title: 'Pineapple', unicode: '\ud83c\udf4d', hidden: false },
    { title: 'Potato', unicode: '\ud83e\udd54', hidden: false },
    { title: 'Strawberry', unicode: '\ud83c\udf53', hidden: false },
    { title: 'Tomato', unicode: '\ud83c\udf45', hidden: false },
    { title: 'Watermelon', unicode: '\ud83c\udf49', hidden: false }])

  const comboBoxRef = useRef(null);

  const handleDropdown = (bool) => {
    setDropdownToggle(bool);
  }

  const handleSelection = (userSelection) => {
    setSelection(userSelection);
    setInput(userSelection);
    handleDropdown(true);
    setSelected(true);
    console.log('The user has selected ',userSelection, ' as their fruit.');
  }

  const handleClickOutside = (event) => {
    if (comboBoxRef.current && !comboBoxRef.current.contains(event.target) && input === '') {
      handleDropdown(true); // Collapse the dropdown if input is empty and click is outside
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [input]);

  return (
    <div 
      ref={comboBoxRef}
      className={`${styles.comboBox} ${dropdownToggle ? '' : styles.expanded} ${selected ? styles.selected : ''}`}
    >
      <div className={styles.inputContainer}> 
        <input 
          type='text' 
          placeholder='Choose a Fruit:' 
          className={styles.input} 
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            const filter = e.target.value.toLowerCase();
            const updatedOptions = options.map((option) => ({
              ...option,
              hidden: !option.title.toLowerCase().includes(filter),
            }));
            setOptions(updatedOptions);
          }}
          onFocus={() => {
            setInput('');
            handleDropdown(false);
            setSelected(false);
          }}
        />
        <div 
          className={styles.iconContainer}
          onClick={() => {
            setDropdownToggle(!dropdownToggle);
            setSelected(false);
            setInput('');
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="rgba(0, 0, 0, 1.0)"
            className={`${styles.icon} ${dropdownToggle ? '' : styles.active}`}
            viewBox="0 0 16 16"
          >
            <path d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
          </svg>
        </div>
      </div>
      <div className={styles.optionsContainer}>
        <OptionDropdown 
          hidden={dropdownToggle} 
          handleDropdown={handleDropdown}
          handleSelection={handleSelection}
          options={options}
        />
      </div>
      
    </div>
  )
}


