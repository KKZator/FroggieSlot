import React from 'react'
import { useState, useEffect } from 'react'
import style from '@/styles/RaffleHeader.module.sass'
import dynamic from 'next/dynamic'

const Countdown = dynamic(() => import('../Countdown'), {
    ssr: false
})

export default function RaffleHeader(){
 
    return(
        <div className={style.headerContainer}>
            <div className={style.sxBlock}>
                <div className={style.jackpotContainer}>
                    <h4>Current Jackpot</h4>
                    <div>
                        <div>
                            <h3>5,282,282,282 $FRGST</h3>
                        </div>
                        <span>($1900)</span>
                    </div>
                </div>

                <div className={style.cd}>
                    <p>Lottery Result:</p> <Countdown />
                </div>
            </div>

            <div className={style.dxBlock}>
                <div>
                    <p>Ticket Sold: 121</p>
                </div>

                <div>
                    <button>Buy Your Ticket</button>
                </div>
            </div>

        </div>
    )
}
