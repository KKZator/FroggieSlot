import React from 'react'
import { useState } from 'react';
import Layout from '@/components/Layout';
import style from '@/styles/HomePage.module.sass'
import { Input, Button, Dropdown  } from '@nextui-org/react';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
import { useSigner, useAccount } from 'wagmi';
import { ethers } from 'ethers';
import { erc20ABI } from 'wagmi';

export default function cotractInteraction() {
    const [ticketTobuy, setTicketToBuy] = useState(0)
    const [addressz, setAddress] = useState()

    const [packToBuy, setPackToBuy] = useState()
    const abi = require('../../config/abi.json')
    const {data: signer} = useSigner()
    const {isConnected, address} = useAccount()

    async function buyTicket(){
        if(!isConnected){
            console.log('please connect')
            return
        }
        if(ticketTobuy > 10){
            console.log('cannot buy more than 10 tickets')
            return
        }
        try{
        const c = new ethers.Contract('0x054adCe06323eE07d83e36A8d0A6E09d0c6f7682', abi, signer)
        let buyTick = await c.buyTicket(ticketTobuy)
        await buyTick.wait()
        }catch(error){
            console.log(error)
        }
        
    }

    async function mint(){
        try{
            const c = new ethers.Contract('0x396878b922CDD9F8F7A6d0E5A1244D277708d47F', abi, signer)
            await c.mintTo(addressz, '1000000000000')
        } catch(error){
            console.log(error)
        }
    }

    async function claim(){
        try{
            const c = new ethers.Contract('0x054adCe06323eE07d83e36A8d0A6E09d0c6f7682', abi, signer)
            await c.claimWinner()
        }catch(error){
            console.log(error)
        }
    }

    async function buyPack(){
        if(!isConnected){
            console.log('please connect')
            return
        }
        try{    
            const c = new ethers.Contract('0x054adCe06323eE07d83e36A8d0A6E09d0c6f7682', abi, signer)
            c.getSpins(packToBuy)
        } catch(error){
            console.log(error)
        }
    }

    async function packApprove(){
        try{
            const c = new ethers.Contract('0x396878b922CDD9F8F7A6d0E5A1244D277708d47F', erc20ABI, signer)
            await c.approve('0x054adCe06323eE07d83e36A8d0A6E09d0c6f7682', '1000000000000')
        }catch(error){
            console.log(error)
        }
    }

    async function claimSlot(){
        try{
        const body = {address}
        const res = await fetch(`api/eip`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body)
        })
        const data = await res.json()
        console.log(data)
        const c = new ethers.Contract('0x054adCe06323eE07d83e36A8d0A6E09d0c6f7682', abi, signer)
        let tx = await c.howMuchWonAndSend(data)
        await tx.wait()
    } catch(error){
        console.log(error)
    }
    }

  return (
    <Layout>
        <div className={style.container}>
            <Input placeholder='address' onChange={(e) => setAddress(e.target.value)}/>
            <Button onClick={() => mint()}>MINT Token</Button>
        </div>
        <div className={style.container}>Lottery
            <Input type='number' placeholder='How many ticket to buy' onChange={(e) => {
                if(e.target.value > 10) {
                    console.log('Troppi biglietti')
                    e.target.value = 0
                } else {
                    setTicketToBuy(e.target.value)
                }
            }}/>
            <Button onClick={()=> buyTicket()}>BUY</Button>
            <br/>
            <br/>
            <br/>
            <Button onClick={() => claim()}>CLAIM</Button>

        </div>
        <div className={style.container}>Slot
            <Dropdown>
            <Dropdown.Button flat>BuyPack</Dropdown.Button>
                <Dropdown.Menu aria-label="Static Actions" onAction={(key) => setPackToBuy(key)}>
                    <Dropdown.Item key="5">5 spins</Dropdown.Item>
                    <Dropdown.Item key="10">10 Spins</Dropdown.Item>
                    <Dropdown.Item key="15">15 Spins</Dropdown.Item>                    
                </Dropdown.Menu>
            </Dropdown>
            <Button onClick={() => packApprove()}>Approve</Button>
            <Button onClick={() => buyPack()}>BUY PACK</Button>
            <br/>
            <br/>
            <br/>
            <Button onClick={() => claimSlot()}>CLAIM</Button>
        </div>
    </Layout>
    
  )
}
