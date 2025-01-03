import { ethers } from "ethers"

export default async function eipFunction(usrAddrs,amntWon){
    const RPC = 'https://rpc-mumbai.maticvigil.com'
    const provider = new ethers.providers.JsonRpcProvider(RPC)
    let relayerz = new ethers.Wallet(process.env.PKY_Relayer, provider)// .env pkey
    let mintNonce = 0 // da contratto
    let domn = {
        name: "FRGST_Diam",
        version: "1",
        verifyingContract: process.env.Diamondz_address,
        chainId: process.env.CHAINID,
    }
    console.log('SONO DOMN0x3C85055ACDC59d963EE72fD993f361aC0d88e1F1',domn)
let types = {
    eip712_slotData: [
            { name: "user", type: "address" },
            { name: "amountWon", type: "uint256" },
            { name: "mintNonce", type: "uint256" }
        ]
    }

    const voucher = { user: usrAddrs, amountWon: amntWon, mintNonce: mintNonce }
    console.log("VOUCHER", voucher)
    const signature = await relayerz._signTypedData(domn, types, voucher)
    
    console.log("SIGNATURE", signature)
    let cosoFinito = { user: usrAddrs, amountWon: amntWon, mintNonce: mintNonce,signature: signature}
    return cosoFinito 
}