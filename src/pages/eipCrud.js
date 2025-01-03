import React from 'react'
import { useState } from 'react';
import Layout from '@/components/Layout';
import style from '@/styles/HomePage.module.sass'
import { Input, Button } from '@nextui-org/react';

export default function lotteryCrud() {
    const [address, setAddress] = useState('')
    const handleGetEip = async e => {
        try{
            const body = {address}
            const res = await fetch(`api/eip`, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            })
            const data = await res.json()
            console.log(data)
        }catch(error){
            console.log(error)
        }
    }

    return(
        <Layout>
            <div className={style.container}>
                <Input placeholder='insert address' onChange={(e) => {setAddress(e.target.value), console.log(e.target.value)}}/>
                <Button onClick={() => handleGetEip()}>GET EIP</Button>
            </div>
        </Layout>
    )
}