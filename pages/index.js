'use client'
import { createContext, useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import MainInfo from '../components/MainInfo'

export const AllData = createContext([])

export default function Home() {
  const [getAllInfo, setGetAllData] = useState([])
  const [getInputValue, setGetInputValue] = useState('')
  const host = process.env.NEXT_PUBLIC_HOST || 'http://localhost:3000'
  const handelValue = (e) => {
    e.preventDefault()
    if (getInputValue) {
      fetch(`${host}/api/weatherapi/${getInputValue}`, { mode: 'no-cors' })
        .then((e) => e.json())
        .then((ele) => setGetAllData(ele.info))
        .catch((err) => console.log(err))
      setGetInputValue('')
    }
  }

  return (
    <AllData.Provider value={{ getAllInfo, setGetAllData }}>
      <form onSubmit={(e) => handelValue(e)}>
        <div className={styles.container}>
          <div className={styles.overlay} />
          <div className={styles.main}>
            <input type='text' className={styles.input} placeholder='Enter a City' onChange={(e) => setGetInputValue(e.target.value)} value={getInputValue} />
            <div className={styles.mainContent}>
              <MainInfo />
            </div>
          </div>
        </div>
      </form>
    </AllData.Provider>
  )
}
