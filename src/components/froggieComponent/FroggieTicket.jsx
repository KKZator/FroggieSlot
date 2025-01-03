import React from 'react'
import { useState, useEffect } from 'react'
import style from '@/styles/FroggieTicket.module.sass'

export default function FroggieTicket({ticketNumbers}){

    return(  
        <div className={style.container}>
{/*             <div className={`${style.circle} ${style.sx}`}/> */}
            <div className={style.ticket}>
                <div className={style.topTicket}>
                    <p className={style.ticketPrice}>50,000 $FRGST</p>
                    <p className={style.drawDate}>Draw: 25th AUG '23</p>
                </div>
                <div className={style.numberCont}>
                    <div className={style.ticketNumebr}>
                            {
                                ticketNumbers.map((number, index) => {
                                    return(
                                        <div key={index} className={style.numberContainer}>
                                            {number}
                                        </div>
                                    )
                                })
                            }
                    </div>
                </div>
            </div>
            {/* <div className={`${style.circle} ${style.dx}`}/> */}
        </div>
    )
}
