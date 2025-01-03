import React from 'react'
import { useState, useEffect } from 'react'
import style from '@/styles/gameSelection.module.sass'
import Image from 'next/image'
import GameSelectionCont from "../components/froggieComponent/GameSelectionCont"
import FroggieLayout from '@/components/froggieComponent/FroggieLayout'
export default function gameSelection(){
    return(
        <FroggieLayout>
        <div className={style.gameSelectionMain}>
            <div className={style.background}>
                <div className={style.backTop} />
            </div>
            <div className={style.frogs}>
                <div>
                    <Image width={300} height={300} src={'/froga.png'} alt='froga'/>
                </div>

                <div>
                    <Image width={300} height={300} src={'/frogb.png'} alt='frogb'/>
                </div>
            </div>
             
            <div className={style.cont}>
                <div className={style.gameSelectionContainer}>
                        <GameSelectionCont title={'WEEKLY RAFFLE'}
                                            imgsrc={'/raffle.png'}
                                            wid={'500'}
                                            hei={'500'}
                                            href={'/FroggieRaffle'}/>
                                            
                        <GameSelectionCont title={'SLOT'}
                                            imgsrc={'/slot.png'}
                                            wid={'300'}
                                            hei={'150'}
                                            href={'/FroggieSlot'}/>
                </div> 
            </div>
        </div>
    </FroggieLayout>
    )
}