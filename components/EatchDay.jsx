import { useContext, useState } from "react";
import { AllData } from "../pages";
import styles from '../styles/EatchDay.module.css'
import Image from "next/image";

const EatchDay = () => {
    const { getAllInfo, setGetAllData } = useContext(AllData)
    const dayWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return (
        <div className={styles.mainEatchDay}>
            {getAllInfo?.forecast?.forecastday.map((ele, index) => {
                return (
                    <div className={styles.eatchitem} key={index}>
                        <h2>{dayWeek[new Date(getAllInfo?.forecast?.forecastday[index]?.date)?.getDay()]}</h2>
                        <Image src={`https:${ele.day.condition.icon}`} width={70} height={70} alt={ele.day?.condition?.text} draggable={false} />
                        <h3 style={{ fontWeight: 600, fontSize: '20px' }}>{Math.ceil(ele.day.avgtemp_c)}&#8451;</h3>
                    </div>
                )
            })}
        </div>
    )
}

export default EatchDay