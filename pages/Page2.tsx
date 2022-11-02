import Image from 'next/image'
import styles from '../styles/Page2.module.css'

export default function Page2() {
  return (
    <>
      <div className={styles.bruh}>
        <Image src='/valant.png' alt='bruh' width='459' height='287' />
      </div>
      <h1>Picture</h1>
    </>
  )
}