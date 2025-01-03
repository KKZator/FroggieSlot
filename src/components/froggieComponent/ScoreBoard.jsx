import React from "react";
import {useState, useEffect} from "react"
import style from '@/styles/ScoreBoard.module.sass'
import ScoreBoardRow from "./ScoreBoardRow";


export default function ScoreBoard(){ 
    const [dailySelected, setDaily] = useState(true)
    const [weeklySelected, setWeekly] = useState(false)
    const [monthlySelected, setMonthly] = useState(false)
    const [info, setInfo] = useState([])

    useState(() => {
        async function firstCall(){
            handleDaily()
        }
        firstCall()
    }, [])

    async function handleDaily(){
        setDaily(true)
        setWeekly(false)
        setMonthly(false)
        try{
            const value = await fetch(`/api/scoreBoardInfo?cat=daily`, {
                method: "GET",
                headers: {"Content-Type": "application/json"}
            })
            const infos = await value.json()
            console.log(infos)
            setInfo(infos)
        } catch(error){
            console.log(error)
        }
    }

    async function handleWeekly(){
        setDaily(false)
        setWeekly(true)
        setMonthly(false)
        try{
            const value = await fetch(`/api/scoreBoardInfo?cat=weekly`, {
                method: "GET",
                headers: {"Content-Type": "application/json"}
            })
            const infos = await value.json()
            console.log(infos)
            setInfo(infos)
        } catch(error){
            console.log(error)
        }

    }

    async function handleMonthly(){
        setDaily(false)
        setWeekly(false)
        setMonthly(true)
        try{
            const value = await fetch(`/api/scoreBoardInfo?cat=monthly`, {
                method: "GET",
                headers: {"Content-Type": "application/json"}
            })
            const infos = await value.json()
            console.log(infos)
            setInfo(infos)
        } catch(error){
            console.log(error)
        }
    }

    return(
    <div className={style.sbContainer}>
        <div className={style.buttonContainer}>
                <button className={`${dailySelected ? style.selected : style.notSelected}`}
                        onClick={() => handleDaily()}>Recent</button>
                <button className={`${weeklySelected ? style.selected : style.notSelected}`}
                        onClick={() => handleWeekly()}>Last Week</button>
                <button className={`${monthlySelected ? style.selected : style.notSelected}`}
                        onClick={() => handleMonthly()}>Last Month</button>
            </div>
        <div className={style.scoreCont}>
            
                
                <table className={style.scoreBoard}>
                    <thead>
                        <tr>
                            <th>Game</th>
                            <th>Address</th>
                            <th>Time</th>
                            <th>Bet Amount</th>
                            <th>Multiplier</th>
                            <th>Payout</th>
                        </tr>
                    </thead>
                    <tbody> 
                        {info.map((row, index) =>{
                            return(
                                <ScoreBoardRow
                                    key={index}
                                    gameName={row.gameName}
                                    address={row.address}
                                    hour={row.hour}
                                    betAmo={row.betAmo}
                                    multiplier={row.multiplier}
                                    won={row.won}
                                />
                            )
                        })}
                    </tbody>
                </table>
            </div>
    </div>
    )
}