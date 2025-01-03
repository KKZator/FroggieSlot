import React from 'react'
import { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import style from '@/styles/HomePage.module.sass'
import { Input, Button, Dropdown } from '@nextui-org/react';


export default function userCRUD() {
    const [address, setAddress] = useState('')
    //const [retrievedAddress, setRetrieverdAddress] = useState([])
    const [addressToDel, setAddressToDel] = useState('')
    const [addressToUpdate, setAddressToUpdate] = useState('')
    const [newValue, setNewValue] = useState('')

    //slot crud
    const [slotUser, setSlotuset] = useState('')
    const [claimableAmount, setClaimableAmout] = useState('')
    const [remainingSping, setRemainingSpins] = useState('')
    const [totalBoughtSpins, setBoughtSpins] = useState('')
    const [totalWinningAmount, setTotalWinningAmoung] = useState('')
    const [slotAddressDel, setSlotAddressDel] = useState('')
    const [addToSeatch, setAddToSearch] = useState('')
    const [colToChange, setColToChange] = useState('')
    const [valueToUpdate, setValueToUpdate] = useState()
    const [addresToup, setAddressToup] = useState()
    useEffect  (() => {console.log('colToChange', colToChange)}, [colToChange] )
    const handleAdd = async e =>{
        //e.preventDefault()
        console.log('??')
        try {
            const body = { address };
            //console.log(JSON.stringify(body))
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

    const handleDel = async e => {
        try{
            const body = {addressToDel}
            console.log(JSON.stringify(body))
            await fetch('/api/user', {
                method: "DELETE",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            })
        } catch (error) {
            console.log(error)
        }
    }

    const handleGet = async e => {
        try{
            const value = await fetch('/api/user', {
                method: 'GET',
                headers: {"Content-Type": "application/json"},
            })
            const data = await value.json()
            //setRetrieverdAddress(data[0])
            console.log(data[0])
            //console.log('resp ',value)
        } catch (error) {
            console.log(error)
        }        
    }

    const handlePut = async e => {
        try{
            const body = {addressToUpdate, newValue}
            const value = await fetch('/api/user', {
                method: 'PUT',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            })
        } catch (error) {
            console.log(error)
        } 
    }

    const handleAddSlot = async e => {
        try{
            const body = {slotUser, claimableAmount, remainingSping, totalBoughtSpins, totalWinningAmount}
            const value = await fetch('/api/userSlot', {
                method: "POST", 
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            })
        } catch (error){
            console.log(error)
        }
    }

    const handleDeleteSlotUset = async e => {
        try{
            const body = {slotAddressDel}
            const value = await fetch('/api/userSlot', {
                method: "DELETE",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            })
        } catch (error) {
            console.log(error)
        }
    }

    const handleGetSlotUser = async e => {
        try{
            const body = {addToSeatch}
            const value = await fetch(`/api/userSlot?userAddress=${addToSeatch}`, {
                method: "GET",
                headers: {"Content-Type": "application/json"}
            })
            const d = await value.json()
            console.log(d)
        } catch (error) {
            console.log(error)
        }
    }

    const handlePutSlotUser = async e => {
        try{
            const body = {addresToup, colToChange, valueToUpdate}
            const value = await fetch(`api/userSlot`, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            })
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <Layout>
        <div className={style.container}>userCRUD
            <Input placeholder='address to add' onChange={(e) => setAddress(e.target.value)}/>
            <Button onClick={() => handleAdd()}>Add User</Button>
        </div>

        <div className={style.container}>
            <Input placeholder='address to del' onChange={(e) => setAddressToDel(e.target.value)} />
            <Button onClick={() => handleDel()}>Delete</Button>
        </div>

        <div className={style.container}>
            
            <Button onClick={() => handleGet()}>Get Users</Button>
        </div>

        <div className={style.container}>
            <Input placeholder='address to update' onChange={(e) => setAddressToUpdate(e.target.value)} />
            <Input placeholder='new value' onChange={(e) => setNewValue(e.target.value)} />
            
            <Button onClick={() => handlePut()}>Modify</Button>
        </div>

        <div className={style.container}>user Slot CRUD
            <Input placeholder='address to add' onChange={(e) => setSlotuset(e.target.value)}/>
            <Input placeholder='claimableAmount' onChange={(e) => setClaimableAmout(e.target.value)}/>
            <Input placeholder='setRemainingSpins' onChange={(e) => setRemainingSpins(e.target.value)}/>
            <Input placeholder='setBoughtSpins' onChange={(e) => setBoughtSpins(e.target.value)}/>
            <Input placeholder='setTotalWinningAmoung' onChange={(e) => setTotalWinningAmoung(e.target.value)}/>
            <Button onClick={() => handleAddSlot()}>Add User</Button>
        </div>

        <div className={style.container}>
            <Input placeholder='address to del' onChange={(e) => setSlotAddressDel(e.target.value)} />
            <Button onClick={() => handleDeleteSlotUset()}>Delete</Button>
        </div>

        <div className={style.container}>
        <Input placeholder='address to del' onChange={(e) => setAddToSearch(e.target.value)} />
            <Button onClick={() => handleGetSlotUser()}>Get Users</Button>
        </div>

        <div className={style.container}>
        <Dropdown>
      <Dropdown.Button flat>Trigger</Dropdown.Button>
      <Dropdown.Menu aria-label="Static Actions" onAction={(key) => {setColToChange(key)
                                                                        console.log("Valuer", key)}}>
        <Dropdown.Item key="address" value="address">Address</Dropdown.Item>
        <Dropdown.Item key="claimableAmount" value="claimableAmount">ClaimableAmount</Dropdown.Item>
        <Dropdown.Item key="remainingSpins" value="remainingSpins">remainingSpins</Dropdown.Item>
        <Dropdown.Item key="totalBoughtSpins" value="totalBoughtSpins">totalBoughtSpins</Dropdown.Item>
        <Dropdown.Item key="totalWinningAmount" value="totalWinningAmount">totalWinningAmount</Dropdown.Item>
        
      </Dropdown.Menu>
    </Dropdown>
    <Input placeholder='value to up' onChange={(e) => setValueToUpdate(e.target.value)} />
    <Input placeholder='address to up' onChange={(e) => setAddressToup(e.target.value)} />
            <Button onClick={() => handlePutSlotUser()}>Get Users</Button>
        </div>
    </Layout>
  )
}
