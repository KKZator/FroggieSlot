import prisma from "../../../../config/db";


export default async function switchMethod(req, res){
    const method = req.method
    console.log('Nello switch', method)
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
            //await handlePut(req, res)
    }
}

async function handleAdd(req, res) {
    const {startDateTime, endDateTime, firstNumber, secondNumber, thirdNumber, fourthNumber, fifthNumber, sixthNumber} = req.body
    //console.log("DATE TIME",startDateTime, endDateTime)
    const result = await prisma.lottery.create({
        data: {
            startdate: new Date(startDateTime).toISOString(),
            enddate: new Date(endDateTime).toISOString(),
            lotterywinningnumbers : {
                create: [{winningNumber: firstNumber},
                        {winningNumber: secondNumber},
                        {winningNumber: thirdNumber},
                        {winningNumber: fourthNumber},
                        {winningNumber: fifthNumber},
                        {winningNumber: sixthNumber}],
            }
        }
    })
    res.json(result)
}

async function handleDelete(req, res) {
    const {lotteryToDelete} = req.body    
    const result = await prisma.lottery.delete({
         where: {
            idlottery: Number(lotteryToDelete)
        }
    })
    res.json(result)    
}

async function handleGet(req, res) {
    const result = await prisma.lottery.findMany()
    //console.log(result)
    //console.log(res)
    res.send([result])
}

