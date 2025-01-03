
var weightedRandom = require('weighted-random'); //lib for weightedRandom


let symbolz = [ //array of obj weight-symbol
    {weight: 6, name: 'gFrog'},
    {weight: 8, name: 'bar'},
    {weight: 10, name: 'diamond'},
    {weight: 11, name: 'heart'},
    {weight: 12, name: 'watermelon'},
    {weight: 13, name: 'chip1'}
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
    let deveAvecce = calculateAndPrintWinProbabilities() // list string co i nomi
    console.log(deveAvecce)
    fr[1].value = deveAvecce[0]
    sr[1].value = deveAvecce[1]
    tr[1].value = deveAvecce[2]  
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
    if (fr[1].value == 'gFrog' && fr[1].value === sr[1].value && fr[1].value === tr[1].value ) {
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





const symbolsss = [
    { name: 'gFrog', probability: 3 },
    { name: 'diamond', probability: 7 },
    { name: 'bar', probability: 15 },
    { name: 'heart', probability: 25},
    { name: 'watermelon', probability: 35 },
    { name: 'chip1', probability: 40 },
];


function calculateAndPrintWinProbabilities() {


    // Calculate the total probability
    const totalProbability = symbolsss.reduce((sum, symbol) => sum + symbol.probability, 0);

    // Generate a random number between 0 and 1
    const randomValues = [Math.random(), Math.random(), Math.random()]; // Generate 3 random values

    // Calculate the weighted random indexes based on probabilities
    const selectedSymbols = [];

    for (let i = 0; i < 3; i++) {
        let cumulativeProbability = 0;
        for (const symbol of symbolsss) {
        cumulativeProbability += symbol.probability / totalProbability;
        if (randomValues[i] <= cumulativeProbability) {
            selectedSymbols.push(symbol);
            break; // Move to the next random value
        }
        }
    }

    // Print the selected symbols
    for (const symbol of selectedSymbols) {
        console.log(`Selected symbol: ${symbol.name}`);
    }
    return [selectedSymbols[0].name, selectedSymbols[1].name , selectedSymbols[2].name];
}