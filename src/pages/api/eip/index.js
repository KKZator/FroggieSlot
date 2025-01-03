import prisma from "../../../../config/db";
import eipFunction from "../../../../config/eipz"

export default async function switchMethod(req, res){
    const method = req.method
    console.log('Nello switch', method)
    switch(method){
        case 'POST':
            await handlePost(req, res)
            break
        case 'DELETE':
            //await handleDelete(req, res)
        case 'GET':
            //await handleGet(req, res)
            break
        case 'PUT':
            //await handlePut(req, res)
            break
    }
}

async function handlePost(req, res) {
    const {address} = req.body
    console.log("address back", address)
    const result = await prisma.userslot.findUnique({
        where:{
            address: address
        }
    })
    console.log(result)
    const parsed = result['claimableAmount']
    console.log("PARSED",parsed)
    const cosoFinito = await eipFunction(address, parsed)
    console.log(cosoFinito)
    res.json(cosoFinito)
}