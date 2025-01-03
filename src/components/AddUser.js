import React from 'react'
import { useState } from 'react'
import style from '@/styles/HomePage.module.sass'
import { Input, Button } from '@nextui-org/react';

export default function AddUser() {
    const [address, setAddress] = useState('')

    const handleAdd = async e =>{
        //e.preventDefault()
        console.log('??')
        try {
            const body = { address };
            console.log(JSON.stringify(body))
            await fetch(`/api/user`, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body),
            });
            //await Router.push("/drafts");
        } catch (error) {
            console.error(error);
        }
    }
  return (
    
        <div className={style.container}>userCRUD
            <Input placeholder='heyhey' onChange={(e) => setAddress(e.target.value)}/>
            <Button onClick={() => handleAdd()}>Add User</Button>
        </div>
        
   
  )
}
