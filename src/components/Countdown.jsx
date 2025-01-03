import React from "react";
import { useState, useEffect } from "react";
import style from '@/styles/Countdown.module.sass'
const Countdown = () => {
    const [countdownDate, setCountdownDate] = useState(new Date('2023-11-11T00:00:00'));

    // Definisci lo stato per il tempo rimanente
    const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining());

      // Funzione per calcolare il tempo rimanente
    function getTimeRemaining() {
        const total = countdownDate.getTime() - new Date().getTime();
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
        const days = Math.floor(total / (1000 * 60 * 60 * 24));
        return {
        total,
        days,
        hours,
        minutes,
        seconds
        };
    }
   
    // Effetto per aggiornare il tempo rimanente ogni secondo
    useEffect(() => {
        const interval = setInterval(() => {
        setTimeRemaining(getTimeRemaining());
        }, 1000);

        return () => {
        clearInterval(interval);
        };
    });


    return(
        <div className={style.countdownContainer}>
                                <div><p>{timeRemaining.days}D</p></div>
                                <div><p>{timeRemaining.hours}H</p></div>
                                <div><p>{timeRemaining.minutes}M</p></div>
                                <div><p>{timeRemaining.seconds}S</p></div>
        </div>
    )
}

export default Countdown