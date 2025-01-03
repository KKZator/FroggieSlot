import prisma from "../../../../config/db";
//import authenticateJWT from "../../../../config/autentication";


/*  async function checked(req, res) {
    authenticateJWT(req, res, switchMethod(req, res));
} */
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
            //await handlePut(req, res)
    }
}


async function handleGet(req, res){
    const lastLottery = await prisma.lottery.aggregate({
        _max:{
            idlottery: true,
        }
    })
    console.log('last lottery', lastLottery['_max']['idlottery'])
    const response = await prisma.lotterywinningnumbers.findMany({
        select:{
            winningNumber: true,
        },
        where: {
            idLottery: lastLottery['_max']['idlottery'],
        }
    })
    res.json(response)
}