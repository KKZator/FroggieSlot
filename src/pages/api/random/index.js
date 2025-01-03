var weightedRandom = require('weighted-random'); //lib for weightedRandom


let symbolz = [ //array of obj weight-symbol
    {weight: 0.5, name: 'beer'},
    {weight: 9.5, name: 'cake'},
    {weight: 15, name: 'cheese'},
    {weight: 25, name: 'donut'},
    {weight: 50, name: 'hamburger'}
]


export default async function switchMethod(req, res){ //request handler
    const method = req.method
    //console.log('Nello switch', method)
    switch(method){
        case 'POST':
            //await handleAdd(req, res)
        case 'DELETE':
            //await handleDelete(req, res)
        case 'GET':
            await handleGet(req, res)
        case 'PUT':
            //await handlePut(req, res)
    }                      
}

async function handleGet(req, res){
    const {tokenAmount} = req.query //retrieving the bet amount
    let fr = shuffleArray() //creating new reels
    let sr = shuffleArray()
    let tr = shuffleArray()
    //console.log({fr, sr, tr})   
    //varaibles for response 
    let won = 0;
    let couple = false
    let third = false

    //logic for 2 winning symbols

    /* if(fr[0].value === sr[0].value || fr[0].value === tr[0].value || sr[0].value === tr[0].value) {
        won = tokenAmount * 10;
        console.log(`2 uguali ${won}`)
        couple = fr[0].value === sr[0].value ? 'firstAndSecond' : ( fr[0].value === tr[0].value ?  "firstAndThird" :(sr[0].value === tr[0].value ? 'secondAndThird' : false))
    }  */

    //logic for 3 winning symbols
    if (fr[0].value === sr[0].value && fr[0].value === tr[0].value) {
        //calculating the prize
        won = tokenAmount * 100;
        //console.log(`3 uguali ${won}`)
        third = true
    }
    //data for response
    let data = {
        fNum: fr,
        sNum: sr,
        tNum: tr,
        prize: won,
        /* couple: couple, */ 
        third: third 
    }
    res.json(data)
}


//creates new reels using the weighted random to chose which symbols to display
function shuffleArray() {
    let tempArr = []
    var weights = symbolz.map( function(symbol) {
        return symbol.weight
    })
    //console.log({weights})    
    for(let i = 0; i < 30; i++){    
        var selectionIndex = weightedRandom(weights)
        //console.log({selectionIndex})
        let symbol = {
            id: i,
            value: symbolz[selectionIndex].name
        }
        tempArr.push(symbol)
    }
    return tempArr
}