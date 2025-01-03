import React from 'react'
import { useState, useEffect } from 'react'
import RaffleHeader from '@/components/froggieComponent/RaffleHeader'
import FroggieTicket from '@/components/froggieComponent/FroggieTicket'
import PreviousTicket from '@/components/froggieComponent/PreviousTickets'
import style from '@/styles/FroggieRaffle.module.sass'
import FroggieLayout from '@/components/froggieComponent/FroggieLayout'
import Image from 'next/image'
export default function FroggieRaffle(){

    return(
        <FroggieLayout>
            <div className={style.raffleContainer}>
                
                <RaffleHeader />  
                <div className={style.currentTicket}>
                    <div className={style.titleCont}>
                        <h3>YOUR LOTTERY TICKETS</h3>
                    </div>
                    <div className={style.currentTDisplayer}>
                        <FroggieTicket ticketNumbers={[1,2,3,4,5,6]}/>
                        <FroggieTicket ticketNumbers={[7,8,9,10,11,12]}/>
                        <FroggieTicket ticketNumbers={[13,14,15,16,17,18]}/>
                    </div>
                </div> 

                <div className={style.previousTicket}>
                    <div className={style.titleCont}>
                        <h3>PREVIOUS TICKETS</h3>
                    </div>
                    <div className={style.currentTDisplayer}> 
                        <PreviousTicket ticketNumbers={[19,20,21,22,23,24]} winningTicket={true} prize={1000}/>
                        <PreviousTicket ticketNumbers={[25,26,27,28,29,30]} winningTicket={false} />
                        <PreviousTicket ticketNumbers={[31,32,33,34,35,36]} winningTicket={false}/>
                        
                    </div>
                </div>  
                
            </div>
        </FroggieLayout>
    )
}