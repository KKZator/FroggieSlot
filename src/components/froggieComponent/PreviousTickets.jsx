import React from 'react'
import { useState, useEffect } from 'react'
import style from '@/styles/PreviousTicket.module.sass'
import FroggieTicket from './FroggieTicket'
export default function PreviousTicket({ticketNumbers, winningTicket, prize}){
 
    return(
        <div className={style.container}>
{/*             <div className={`${style.circle} ${style.sx}`}/> */}
            <FroggieTicket ticketNumbers={ticketNumbers} />
            
            <div className={style.hasWon}>
            {winningTicket  ? 
                <div className={style.winning}>
                    <p>WOW YOU WON {prize} $FRGST</p>
                    <button><div>CLAIM NOW</div></button>
                </div>
                            :
                <div className={style.winning}>
                    <p>OH NO, YOU DID NOT WIN ANYTHING</p>
                    <button><div>TRY YOUR LUCK AGAIN</div></button>
                </div>}
            </div>
            {/* <div className={`${style.circle} ${style.dx}`}/> */}
        </div>
    )
}