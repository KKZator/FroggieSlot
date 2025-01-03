import React from 'react'
import { useState } from 'react';
import Layout from '@/components/Layout';
import style from '@/styles/HomePage.module.sass'
import { Input, Button } from '@nextui-org/react';

export default function buyTicketCrud() {
    const [buyer, setBuyer] = useState()
    const [idLottery, setIdLottery] = useState()
    const [firstNumber, setFirstNumber] = useState()
    const [secondNumber, setSecondNumber] = useState()
    const [thirdNumber, setThirdNumber] = useState()
    const [fourthNumber, setFourthNumber] = useState()
    const [fifthNumber, setFifthNumber] = useState()
    const [sixthNumber, setSixthNumber] = useState()
    const [winningNumbers, setWinningNumbers] = useState()
    
    
    const handleAdd = async e => {
        try{
            const body = {buyer, idLottery, winningNumbers, firstNumber, secondNumber, thirdNumber, fourthNumber, fifthNumber, sixthNumber}
            await fetch(`api/buyTicket`, {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            })
        }catch(error){
            console.log(error)
        }
    }

    const handleGet = async e => {
        try{
            await fetch(`api/buyTicket`, {
                method: "GET",
                headers: {"Content-Type": "application/json"},
            }) 
            }catch(error){
                console.log(error)
            }
    }
    

  return (
    <Layout>
        <div className={style.container}>
        <Input label='address' onChange={(e) => setBuyer(e.target.value)}/>
        <Input 
          label="idLottery" 
          type="number" 
          onChange={(e) => setIdLottery(e.target.value)}
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
        <Input 
          label="Winning Numbers" 
          type="number" 
          onChange={(e) => setWinningNumbers(e.target.value)}
        />
        <Button onClick={() => handleAdd()}>BUY TICKET</Button>
    </div>
    <div className={style.container}>
        <Button onClick={() => handleGet()}>GET</Button>
    </div>
    </Layout>
  )
}
