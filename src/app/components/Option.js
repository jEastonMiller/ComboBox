'use client'
import Image from 'next/image'
import styles from './styles/option.module.css'

export default function Option( { title, emoji, hidden, handleSelection } ) {
  return (
      <li 
        className={styles.listItem}
        onClick={() => handleSelection(title)}
        hidden={hidden}
      >
        <p>
          {`${emoji} ${title}`}
          <span dangerouslySetInnerHTML={{ __html: emoji.unicode }} />
        </p>
        
      </li>
  )
}


