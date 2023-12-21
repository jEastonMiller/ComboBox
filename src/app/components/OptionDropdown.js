'use client'
import Option from './Option';
import {useEffect, useState} from 'react';
import Image from 'next/image'
import styles from './styles/optiondropdown.module.css'

export default function OptionDropdown( { hidden, handleDropdown, handleSelection, options } ) {

  return (
    <ul className={styles.optionDropdown} hidden={hidden}>
      {options.map((option)=> 
        <Option 
          title={option.title} 
          emoji={option.unicode} 
          hidden={option.hidden}
          handleSelection={handleSelection}
          key={Math.random()}
        />
      )}
    </ul>
  )
}


