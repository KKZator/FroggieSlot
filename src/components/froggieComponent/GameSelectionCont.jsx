import React from 'react'
import { useState, useEffect } from 'react'
import style from "@/styles/GameSelectionCont.module.sass"
import Image from 'next/image'
import Link from 'next/link'

export default function GameSelectionCont({title, imgsrc, wid, hei, href}){

    return(
        <div className={style.container}>
            <div className={style.genCont}>
                <div className={style.name}>
                    <h1 className={style.title}>{title}</h1>
                    <Link style={{textDecoration: 'none', color: 'white'}} href={href}><button>Play Now</button></Link>
                </div>
                <div className={style.img}>
                    <img alt='img' src={imgsrc} />
                </div>
            </div>
        </div>
    )
}