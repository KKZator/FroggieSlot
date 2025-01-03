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
            await handleAdd(req, res)
            break
        case 'DELETE':
            await handleDel(req, res)
            break
        case 'GET':
            await handleGet(req, res)
            break
        case 'PUT':
            await handlePut(req, res)
            break
    }
}

async function handleAdd(req, res){
    const {slotUser, claimableAmount, remainingSping, totalBoughtSpins, totalWinningAmount,ticketid} = req.body
    console.log("ttappo+_+++???")
    assert(JsCrypto.AES.decrypt(ticketid, process.env.SECRET).toString(JsCrypto.Utf8) === process.env.NOTSECRET, 'No priviliges')
    const result = await prisma.userslot.create({
        data:{
            address: slotUser,
            claimableAmount: claimableAmount.toString(),
            remainingSpins: Number(remainingSping),
            totalBoughtSpins: Number(totalBoughtSpins),
            totalWinningAmount: totalWinningAmount
        }
    })
    res.json(result)
}

async function handleDel(req, res) {
    const {slotAddressDel} = req.body
    const result = await prisma.userslot.delete({
        where: {
            address: slotAddressDel,
        }
    })
    res.json(result)
}

async function handleGet(req, res) {
    const {userAddress} = req.query
    console.log("Address backend",  userAddress)
    const result = await prisma.userslot.findUnique({
        where: {
            address: userAddress
        }
    })
    res.json(result)
}   

async function handlePut(req, res) {
    const {addresToup, valueToUpdate1, valueToUpdate2, valueToUpdate3, valueToUpdate4, isListener,ticketid} = req.body
    assert(JsCrypto.AES.decrypt(ticketid, process.env.SECRET).toString(JsCrypto.Utf8) === process.env.NOTSECRET, 'No priviliges')
    let result
    if(isListener){
        const quantiCeNha = await prisma.userslot.findUnique({
            where: {
              address: addresToup,
            },
          });
        const remainingSpins = Number(quantiCeNha.remainingSpins);
        result = await prisma.userslot.update({
            where: {
                address: addresToup,
            },
            data: {
                remainingSpins: Number(valueToUpdate3)+remainingSpins,
            }
        })
    }else{
        result = await prisma.userslot.update({
        where: {
            address: addresToup,
        },
        data: {
            claimableAmount: valueToUpdate1.toString(),
            totalWinningAmount: valueToUpdate2.toString(),
            remainingSpins: Number(valueToUpdate3),
            totalBoughtSpins: Number(valueToUpdate4),
        }
    })
    }
    
/*     switch(colToChange){
        case 'address':
            console.log('sono in addres')
            const result = await prisma.userslot.update({
                where: {
                    address: addresToup,
                },
                data: {
                    address: valueToUpdate,
                }
            })
            break
        case 'claimableAmount':
            resultz = await prisma.userslot.update({
                where: {
                    address: addresToup,
                },
                data: {
                    claimableAmount: valueToUpdate.toString(),
                }
            })
            break
        case 'totalWinningAmount':
            resultz = await prisma.userslot.update({
                where: {
                    address: addresToup,
                },
                data: {
                    totalWinningAmount: valueToUpdate.toString(),
                }
            })
            break
        case 'remainingSpins':
            resultz = await prisma.userslot.update({
                where: {
                    address: addresToup,
                },
                data: {
                    remainingSpins: Number(valueToUpdate),
                }
            })
            break
        case 'totalBoughtSpins':
            resultz = await prisma.userslot.update({
                where: {
                    address: addresToup,
                },
                data: {
                    totalBoughtSpins: Number(valueToUpdate),
                }
            })
            break
        default:
            resultz = await prisma.userslot.update({
                where: {
                    address: addresToup,
                },
                data: {
                    colToChange: valueToUpdate.toSrtring(),
                }
            })
            break
    } */
    res.json(result)
}