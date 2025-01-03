import React from 'react'
//import style from '@/styles/Slot.module.sass'
import style from '@/styles/Slot.module.css'
import { useState, useEffect } from 'react'
import Image from 'next/image'

/* 
Slot machine component:
    3 reels 1 symbol each
    3 equal symbol = win
*/

export default function Slot() {
    const [isGiring, setIsGiring] = useState(false)
    //const [giringClass, setGiringClass] = useState('')
    const [currentWinning, setCurrentWinning] = useState(0)
    const [coinAmount, setCointAmount] = useState(0)
    const [spins, setSpins] = useState(10)
    const [fShine, setfShine] = useState(false)
    const [sShine, setSShine] = useState(false)
    const [tShine, setTShine] = useState(false)
    const [firstN, setFirstNum] = useState([
    {id: 0, value:'beer'},
    {id: 1, value: 'cake'},
    {id: 2, value: 'cheese'},
    {id: 3, value:'donut'},
    {id: 4, value:'hamburger'},
    {id: 5, value: 'ice-cream'},
    {id: 6, value: 'mango'},
    {id: 7, value: 'noodle'},
    {id: 8, value: 'rice'},
    {id: 9, value:'sushi'}])
    const [secondN, setSecondNum] = useState([{id: 0, value:'beer'},
    {id: 1, value: 'cake'},
    {id: 2, value: 'cheese'},
    {id: 3, value:'donut'},
    {id: 4, value:'hamburger'},
    {id: 5, value: 'ice-cream'},
    {id: 6, value: 'mango'},
    {id: 7, value: 'noodle'},
    {id: 8, value: 'rice'},
    {id: 9, value:'sushi'}])
    const [thirdN, setThirdNum] = useState([{id: 0, value:'beer'},
    {id: 1, value: 'cake'},
    {id: 2, value: 'cheese'},
    {id: 3, value:'donut'},
    {id: 4, value:'hamburger'},
    {id: 5, value: 'ice-cream'},
    {id: 6, value: 'mango'},
    {id: 7, value: 'noodle'},
    {id: 8, value: 'rice'},
    {id: 9, value:'sushi'}])
    const [prize, setPrize] = useState(0)
    const [styles, setStyles] = useState([style.gira, style.bounce, style.appizzina, style.fastroll, style.slow, style.fastLinear, style.fastInOut])

    const apiCall = async () => {
        setfShine(false) //set to false if the previous spins was winning
        setSShine(false)
        setTShine(false)
        if(spins > 0){ //check enough spins
            if(coinAmount > 0) { //check if user has bet
                setSpins(spins-1) //decreasing total spins
                setIsGiring(true) //triggering the 'spinning' status
                try{ //call api to get new reels
                    const value = await fetch(`/api/random?tokenAmount=${coinAmount}`, {
                        method: 'GET',
                        headers: {"Content-Type": "application/json"}
                    })
                    /* d = let data = {
                                        fNum: array for firstReel,
                                        sNum: array for secondReel,
                                        tNum: array for thirdReel,
                                        prize: hasWon ? prizeAmount : null,                                        
                                        third: trigger for animation 
                                    } 
                        */
                    const d = await value.json()
                                    
                    //attempt to take the displayed part of the previous array and attach it to the following one to avoid 'glitch'
                /* let boh = [] //d.fNum +","+ firstN.slice(0,4)
                for(let i = 0; i < (d.fNum.length) + 3; i ++) {
                    if(i < d.fNum.length) {
                        boh[i] = d.fNum[i]
                    } else {
                        boh[i] = firstN[i - d.fNum.length]
                    }
                }
                console.log({boh}) */

                setFirstNum(d.fNum)
                setSecondNum(d.sNum)
                setThirdNum(d.tNum)
                //console.log({d})
                //await for the longest animation to end
                await timeout(4800).then(async () => {
                    setCurrentWinning(d.prize)
                    setPrize(prize + d.prize)
                    if (d.third){
                        //tutte e tre illuminati
                        setfShine(true)
                        setSShine(true)
                        setTShine(true)
                        //console.log(d.third)
                    }
                    
                    //logic for two winning symbols on the same row
                    /*  else if(d.couple) {
                        //console.log(d.couple)
                        if(d.couple === "firstAndSecond"){
                            setfShine(true)
                            setSShine(true)
                        } else if (d.couple === "firstAndThird"){
                            setfShine(true)
                            setTShine(true)
                        } else if(d.couple === 'secondAndThird'){
                            setSShine(true)
                            setTShine(true)
                        }                  
                        
                    } */
                });
                } catch (error){
                console.log(error)            
                } finally {                
                setIsGiring(false)
                }
            }else{
                window.alert('no tokens')
            }
        }else{
            window.alert("reload spins")
        }
    }

    function reloadSpins(){
        setSpins(spins + 10);
    }

    async function timeout(delay) {
        return new Promise( res => setTimeout(res, delay) );
    }

  return (
    <div>
        <div className={style.slot}>

            <div className={`${style.reel} ${style.center} ${fShine ? style.shine : null}`}>
                <div className={`${isGiring ? styles[Math.floor(Math.random() * styles.length)] : style.steel} `}>
                    {
                    firstN.map(symbol => {
                        return(
                             <div key={symbol.id} id={`firstReel${symbol.id}`} className={style.symbol}>
                            <Image   width={100} height={100} src={`slotico/${symbol.value}.svg`} alt='d'/>
                            </div>
                        )
                    })}                    
                </div>
            </div>

            <div className={`${style.reel} ${sShine ? style.shine : null}`}>
                <div className={isGiring ? styles[Math.floor(Math.random() * styles.length)] : style.steel}>
                {secondN.map(symbol => {
                        return(
                            <div key={symbol.id} id={`secondReel${symbol.id}`} className={style.symbol}>
                                <Image   width={100} height={100} src={`slotico/${symbol.value}.svg`} alt='d'/>
                            </div>
                        )
                    })}
                </div>                    
            </div>

            <div className={`${style.reel} ${tShine ? style.shine : null}`}>
                <div className={isGiring ? styles[Math.floor(Math.random() * styles.length)] : style.steel}>
                {thirdN.map(symbol => {
                        return(
                            <div key={symbol.id} id={`thirdReel${symbol.id}`} className={style.symbol}>
                                <Image   width={100} height={100} src={`slotico/${symbol.value}.svg`} alt='d'/>
                            </div>
                        )
                    })}                    
                </div>
            </div>

        </div>

        <div className={style.options}>
            <div>
                <div>
                    <input type='number' placeholder='coint amount' onChange={(e) => {setCointAmount(e.target.value)}}/>
                    <button onClick={() => {isGiring ? null : apiCall()}}>Play</button>
                </div>
                <div>
                    <button onClick={() => reloadSpins()}>Reload Spins</button>
                </div>
            </div>
            <div>
                <h1>your winnings: {prize}</h1><br/>
                <h1>remaining spins: {spins}</h1>
                <h1>Current winning: {currentWinning}</h1>
            </div>
        </div>
    </div>
  )
}
