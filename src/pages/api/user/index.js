import prisma from "../../../../config/db";

export default async function switchMethod(req, res){
    const method = req.method   
    switch(method){
        case 'POST':
            await handleAdd(req, res)
            break
        case 'DELETE':
            await handleDelete(req, res)
            break
        case 'GET':
            await handleGet(req, res)
            break
        case 'PUT':
            await handlePut(req, res)
            break
    }
}


async function handleAdd(req, res) {
    //console.log(req)
    const {address} = req.body
    const result = await prisma.user.create({
        data: {
            userAddress : address
        }
    })
    //console.log(result)
    res.json(result)
}

async function handleDelete(req, res) {
    const {addressToDel} = req.body
    const result = await prisma.user.delete({
        where: {
            userAddress: addressToDel,
        }
    })
    res.json(result)
}

async function handleGet(req, res) {
    const result = await prisma.user.findMany()
    //console.log(result)
    //console.log(res)
    res.send([result])
}

async function handlePut(req, res) {
    const {addressToUpdate, newValue} = req.body
    const result = await prisma.user.update({
        where: {
            userAddress: addressToUpdate
        },
        data: {
            userAddress: newValue
        }
    })
    //console.log(result, res) 
    res.json(result)
}