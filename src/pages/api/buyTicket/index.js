
import prisma from "../../../../config/db";
const JsCrypto = require("jscrypto");
const assert = require('assert')
export default async function switchMethod(req, res){
    const method = req.method
    console.log('Nello switch', method)
    switch(method){
        case 'POST':
            await handleAdd(req, res)
            break
        case 'DELETE':
            //await handleDelete(req, res)
        case 'GET':
            await handleGet(req, res)
            break
        case 'PUT':
            //await handlePut(req, res)
    }
}

async function handleAdd(req, res) {
    const {buyer, idLottery, winningNumbers, firstNumber, secondNumber, thirdNumber, fourthNumber, fifthNumber, sixthNumber, ticketid} = req.body
    ////
    assert(JsCrypto.AES.decrypt(ticketid, process.env.SECRET).toString(JsCrypto.Utf8) === process.env.NOTSECRET, 'No priviliges')
    const existingUser = await prisma.user.findUnique({
        where: { userAddress: buyer },
      });
      
      if (!existingUser) {
        const updatedUser = await prisma.user.create({
          data: { userAddress: buyer },
        });
    }
      ////
    const ticket = await prisma.lotteryticket.create({
        data: {
            idLott: Number(idLottery),
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
    console.log(ticket)
   
    const {idlotteryTicket} = ticket

    const result = await prisma.userboughtticket.create({
        data: {
            userAdd: buyer,
            idTicket: idlotteryTicket,
            winningNumbers: winningNumbers
        }
    })
    
    const alreadyParticiping = await prisma.userlotteryparticipation.findMany({
        where:{            
            participantAddress: buyer,
            participatedLottery: Number(idLottery)            
        }
    })
    //console.log(alreadyParticiping, typeof alreadyParticiping)
    if(alreadyParticiping.length === 0 || !alreadyParticiping) {
        //console.log("Lo aggiungo")
        await prisma.userlotteryparticipation.create({
            data: {
                participantAddress: buyer,
                participatedLottery: Number(idLottery) 
            }
        })
    }
    res.json(result)
    console.log("SISI FINITA FUNZIONE DEL POST E TORNATA LA RES")
}

async function handleGet(req, res) {
    const winners = []
    const winnersThreeNumbers = await prisma.userboughtticket.findMany({
        select: {
            userAdd: true
        },
        where: {
            winningNumbers: '3'
        }
    })
    winners.push(winnersThreeNumbers)
    console.log("WINNER 3 NUMERI", winnersThreeNumbers)
    //console.log(winners)
    const winnersFourNumbers = await prisma.userboughtticket.findMany({
        select: {
            userAdd: true
        },
        where: {
            winningNumbers: '4'
        }
    })
    winners.push(winnersFourNumbers)
    console.log("WINNERS 4 NUMERI", winnersFourNumbers)
    //console.log(winners)
    const winnersFiveNumbers = await prisma.userboughtticket.findMany({
        select: {
            userAdd: true
        },
        where: {
            winningNumbers: '5'
        }
    })
    winners.push(winnersFiveNumbers)
    console.log('WINNER 5 NUMERI', winnersFiveNumbers)
    //console.log(winners)
    const winnersSixNumbers = await prisma.userboughtticket.findMany({
        select: {
            userAdd: true
        },
        where: {
            winningNumbers: '6'
        }
    })
    winners.push(winnersSixNumbers)
    console.log("WINNER 6 NUMERI", winnersSixNumbers)
    console.log(winners)
    res.json(winners)
}