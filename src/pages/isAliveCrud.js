import React from 'react'
import { useState } from 'react';
import Layout from '@/components/Layout';
import style from '@/styles/HomePage.module.sass'
import { Input, Button, Switch } from '@nextui-org/react';

export default function isAliveCrud() {
    const [isAlive, setIsAlive] = useState(true)
    console.log('isAlive', Number(isAlive))
    
    const handleModifyStatus = async e => {
        try{
            const body = {isAlive}
            await fetch(`api/isAlive`, {
                method: 'PUT',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            })
        } catch (error) {
            console.error(error);
        }
    }

    const handleGetStatus = async e => {
        try{
            const value = await fetch(`/api/isAlive`, {
                method: 'GET',
                headers: {"Content-Type": "application/json"},
            })
            const data = await value.json()
            console.log(data)
        } catch (error) {
            console.log(error)
        }
          
    }

  return (
    <Layout>
        <div className={style.container}>
            <Switch checked={true} onChange={() => setIsAlive(!isAlive)}/>
            <Button onClick={() => handleModifyStatus()}>ModifyStatus</Button>
            </div>
            <div className={style.container}>
                <Button onClick={() => handleGetStatus()}>GET is Alive</Button>
            </div>
        </Layout>

  )
}
