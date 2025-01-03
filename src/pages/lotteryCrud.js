import React from 'react'
import { useState } from 'react';
import Layout from '@/components/Layout';
import style from '@/styles/HomePage.module.sass'
import { Input, Button } from '@nextui-org/react';

export default function lotteryCrud() {
    //create lottery
    const [startDate, setStartDate] = useState()
    const [endDate, setEndDate] = useState()
    const [startTime, setStartTime] = useState()
    const [endTime, setEndTime] = useState()
    const [firstNumber, setFirstNumber] = useState()
    const [secondNumber, setSecondNumber] = useState()
    const [thirdNumber, setThirdNumber] = useState()
    const [fourthNumber, setFourthNumber] = useState()
    const [fifthNumber, setFifthNumber] = useState()
    const [sixthNumber, setSixthNumber] = useState()
    //delete
    const [lotteryToDelete, setLotteryToDelete] = useState()

    const handleAdd = async e => {
        let startDateTime = startDate + ' ' + startTime 
        let endDateTime = endDate + ' ' + endTime 
        //console.log(startDateTime, endDateTime)
        try{
            const body = {startDateTime, endDateTime, firstNumber, secondNumber, thirdNumber, fourthNumber, fifthNumber, sixthNumber}
            //console.log(JSON.stringify(body))
            await fetch(`api/lottery`, {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            })
        } catch (error) {
            console.error(error);
        }
    }

    const handleDelete = async e => {
        try{
            const body = {lotteryToDelete}
            await fetch('/api/lottery', {
                method: 'DELETE',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            })
        } catch (error) {
            console.log(error)
        }
    }

    const handleGet = async e => {
        try{
            const value = await fetch('/api/lottery', {
                method: "GET",
                headers: {"Content-Type": "application/json"},
            })
            const data = await value.json()
            //setRetrieverdAddress(data[0])
            console.log(data[0])
        } catch (error) {
            console.log(error)
        }    
    }

    const latestNumber = async e => {
      const token = jwt.sign({relayer}, process.env.JWT_SECRET)
      try{
        const value = await fetch('/api/winningNumber', {
          method: "GET",
          headers: {"Content-Type": "application/json", "Authorization": `Bearer ${token}`},
        })
        const data = await value.json()
        console.log(data)
      }catch (error) {
        console.log(error)
    }    
    }

  return (
    <Layout>
        <div className={style.container}>
        <Input 
        placeholder='start date'
          width="186px" 
          label="Date" 
          type="date" 
          required
          onChange={(e) => setStartDate(e.target.value)}
        />
         <Input 
            placeholder='start time'
          width="186px" 
          label="Time" 
          type="time" 
          onChange={(e) => setStartTime(e.target.value)}
        />

        <Input 
        placeholder='end date'
          width="186px" 
          label="Date" 
          type="date" 
          required
          onChange={(e) => setEndDate(e.target.value)}
        />
         <Input 
         placeholder='end time'
          width="186px" 
          label="Time" 
          type="time" 
          onChange={(e) => setEndTime(e.target.value)}
        />
        <Input 
          label="Winning  Number" 
          type="number" 
          onChange={(e) => setFirstNumber(e.target.value)}
        />
        <Input 
          label="Winning Number" 
          type="number" 
          onChange={(e) => setSecondNumber(e.target.value)}
        />
        <Input 
          label="Winning Number" 
          type="number" 
          onChange={(e) => setThirdNumber(e.target.value)}
        />
        <Input 
          label="Winning Number" 
          type="number" 
          onChange={(e) => setFourthNumber(e.target.value)}
        />
        <Input 
          label="Winning Number" 
          type="number" 
          onChange={(e) => setFifthNumber(e.target.value)}
        />
        <Input 
          label="Winning Number" 
          type="number" 
          onChange={(e) => setSixthNumber(e.target.value)}
        />

            <Button onClick={() => handleAdd()}>Create Lottery</Button>
        </div>

        <div className={style.container}>
            <Input type='number' required placeholder='insert id lottery to delete'
            onChange={(e) => setLotteryToDelete(e.target.value)} />
            <Button onClick={() => handleDelete()}>Delete Lottery</Button>
        </div>

        <div className={style.container}>
            <Button onClick={() => handleGet()}>GET lotteries</Button>
        </div>

        <div className={style.container}>
            <Button onClick={() => latestNumber()}>latestNumber</Button>
        </div>
    </Layout>
  )
}

