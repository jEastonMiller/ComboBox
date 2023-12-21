import ComboBox from './components/ComboBox';
import styles from './page.module.css';

export default function Home() {
  const options = [{title: 'banana', src: '/something'}];

  return (
    <main className={styles.main} >
      <h1>Website Content</h1>
        <ComboBox />
      <h1>Website Content</h1>
    </main>
  )
}
