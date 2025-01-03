
import React from 'react'
import { useState } from 'react';
import Layout from '@/components/Layout';
import style from '@/styles/HomePage.module.sass'
import { Input, Button } from '@nextui-org/react';

export default function ticketCrud() {
    const [lotteryId, setLotteryId] = useState()
    const [firstNumber, setFirstNumber] = useState()
    const [secondNumber, setSecondNumber] = useState()
    const [thirdNumber, setThirdNumber] = useState()
    const [fourthNumber, setFourthNumber] = useState()
    const [fifthNumber, setFifthNumber] = useState()
    const [sixthNumber, setSixthNumber] = useState()

    const handleAdd = async e => {
        try{
            const body = {lotteryId, firstNumber, secondNumber, thirdNumber, fourthNumber, fifthNumber, sixthNumber}
            await fetch(`api/ticket`, {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            })
        } catch(error){
            console.log(error)
        }
    }
  return (
    <Layout>
        <div className={style.container}>
        <Input 
          label="Lottery Id" 
          type="number" 
          onChange={(e) => setLotteryId(e.target.value)}
        />
        <Input 
          label="Ticket  Number" 
          type="number" 
          onChange={(e) => setFirstNumber(e.target.value)}
        />
        <Input 
          label="Ticket Number" 
          type="number" 
          onChange={(e) => setSecondNumber(e.target.value)}
        />
        <Input 
          label="Ticket Number" 
          type="number" 
          onChange={(e) => setThirdNumber(e.target.value)}
        />
        <Input 
          label="Ticket Number" 
          type="number" 
          onChange={(e) => setFourthNumber(e.target.value)}
        />
        <Input 
          label="Ticket Number" 
          type="number" 
          onChange={(e) => setFifthNumber(e.target.value)}
        />
        <Input 
          label="Ticket Number" 
          type="number" 
          onChange={(e) => setSixthNumber(e.target.value)}
        />
        <Button onClick={() => handleAdd()}>Create lottery ticket</Button>
        </div>
    </Layout>
  )
}
