'use client'
import { useContext } from "react"
import { AllData } from "../pages"
import Image from "next/image"
import styles from '../styles/MainInfo.module.css'
import EatchDay from "./EatchDay"

const MainInfo = () => {
    const { getAllInfo, setGetAllData } = useContext(AllData)
    return (
        <div className={styles.maininfo}>
            {getAllInfo?.current?.condition?.icon && <Image src={`https:${getAllInfo?.current?.condition?.icon}`} width={110} height={110} alt={getAllInfo?.current?.condition?.text} draggable={false} />}
            {getAllInfo?.current?.condition && <div>
                <h2 style={{ fontWeight: 500, margin: '10px 0' }}>Today</h2>
                <h2 style={{ margin: '2px 0' }}>{getAllInfo.location.name}</h2>
                <h2>{getAllInfo.location.country}</h2>
                <h2 style={{ fontWeight: 500, margin: '10px 0' }}>{`Temperature: ${getAllInfo?.current.temp_c}`}&#8451;</h2>
                <h2 style={{ fontWeight: 500, margin: '10px 0' }}>{getAllInfo?.current?.condition?.text}</h2>
            </div>}
            <EatchDay />
        </div>
    )
}

export default MainInfo