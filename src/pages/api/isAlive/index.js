import prisma from "../../../../config/db";


export default async function switchMethod(req, res){
    const method = req.method
    console.log('Nello switch', method)
    switch(method){
        case 'POST':
            //await handleAdd(req, res)
        case 'DELETE':
            //await handleDelete(req, res)
        case 'GET':
            await handleGet(req, res)
            break
        case 'PUT':
            await handlePut(req, res)
            break
    }
}

async function handlePut(req, res) {
    const {isAlive} = req.body
    console.log(Number(isAlive))
    const result = await prisma.isalive.update({
        where: {
            id: 1
        },
        data: {
            vivo: Number(isAlive)
        }
    })
    res.json(result)
}

async function handleGet(req, res) {
    const result = await prisma.isalive.({
        where: {
            id: 1,
        },
        select: {
            vivo: true,
        }
    })
    res.json(result)
}