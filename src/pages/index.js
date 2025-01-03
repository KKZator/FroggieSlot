import React from 'react'
import FroggieLayout from '@/components/froggieComponent/FroggieLayout'
import style from '@/styles/HomePage.module.sass'
import Link from 'next/link'
import ScoreBoard from '@/components/froggieComponent/ScoreBoard'

let img = ['2nd pose', '8th pose', '5th pose', '7th pose', '8th pose', 'UI 2 (1)', 'UI 2', '1st pose']
export default function homePage(){

    return(
        <FroggieLayout>
            <div className={style.homePage}>
                <div className={style.topPage}> 
                    <div className={style.text}>
                        <p>
                        PLAY ONLINE CASINO AND WIN UNLIMITED <span>money</span>
                        </p>
                        <Link href='/gameSelection'><button>Game Selection</button></Link>
                    </div>
                    <div>
                        <img src={`2nd_pose.png`}/>
                    </div>
                </div>

                <div className={style.score}>
                    <ScoreBoard />
                </div>
            </div>
        </FroggieLayout>
    )
}