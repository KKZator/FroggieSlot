import React from 'react'
import { useState, useEffect } from 'react'
import Slot from '@/components/slot'
import FroggieSlot from '@/components/froggieComponent/FroggieSlot'
import Image from 'next/image'
import style from '@/styles/FroggieSlotPage.module.sass'
import CountUp from 'react-countup';
import FroggieLayout from '@/components/froggieComponent/FroggieLayout'

export default function FroggieSlotPage() {

    const [jackpot, setJackpot] = useState(1000000000000)

 

  return (
    <FroggieLayout>
        <div className={style.slotContainer}>

            <div className={style.frogs}>
                <div>
                    <Image width={300} height={300} src={'/froga.png'} alt='froga'/>
                </div>

                <div>
                    <Image width={300} height={300} src={'/frogb.png'} alt='frogb'/>
                </div>
            </div>

            <div className={style.luck}>
                <p>try your luck on the <span>Froggies Spin</span></p>
            </div>
          
            <fieldset className={style.jackpot}>
                <legend>Jackpot</legend>
                <div className={style.jackpotContainer}>
                    <div className={style.imgContainer}>
                        <img src={'/jackpot-64 (1).svg'} alt='jackpot'/>
                    </div>
                    <div>
                        <p>{/* <CountUp end={jackpot}/> */} {jackpot.toLocaleString("en-US")} $FRGST</p>
                    </div>
                </div>
            </fieldset>

            <div className={style.fSlot}>
                {<FroggieSlot />}
            </div>
        </div>
    </FroggieLayout>
  )
}
