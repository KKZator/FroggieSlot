import prisma from "../../../../config/db";


export default async function switchMethod(req, res){
    const method = req.method
    console.log('Nello switch', method)
    switch(method){
        case 'POST':
            await handleAdd(req, res)
        case 'DELETE':
            //await handleDelete(req, res)
        case 'GET':
            //await handleGet(req, res)
        case 'PUT':
            //await handlePut(req, res)
    }
}

async function handleAdd(req, res) {
    const {lotteryId, firstNumber, secondNumber, thirdNumber, fourthNumber, fifthNumber, sixthNumber} = req.body
    const result = await prisma.lotteryticket.create({
        data: {
            idLott: Number(lotteryId),
            ticketnumbers: {
                create:[
                    {number: Number(firstNumber)},
                    {number: Number(secondNumber)},
                    {number: Number(thirdNumber)},
                    {number: Number(fourthNumber)},
                    {number: Number(fifthNumber)},
                    {number: Number(sixthNumber)},
                ]
            }
        }
    })
    res.json(result)
}