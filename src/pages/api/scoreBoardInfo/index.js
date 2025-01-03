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
    const {cat} = req.query
    let data; 
    if(cat==='daily'){
        data =  [
            {
                'gameName': 'slot',
                'address': '0x...1AbC',
                'hour': '14:48',
                'betAmo': '2',
                'multiplier': '3x',
                'won': '6'
            },
            {
                'gameName': 'slot',
                'address': '0x...1AbC',
                'hour': '14:48',
                'betAmo': '2',
                'multiplier': '3x',
                'won': '6'
            },
            {
                'gameName': 'slot',
                'address': '0x...1AbC',
                'hour': '14:48',
                'betAmo': '2',
                'multiplier': '3x',
                'won': '6'
            },
            {
                'gameName': 'slot',
                'address': '0x...1AbC',
                'hour': '14:48',
                'betAmo': '2',
                'multiplier': '3x',
                'won': '6'
            },
            {
                'gameName': 'slot',
                'address': '0x...1AbC',
                'hour': '14:48',
                'betAmo': '2',
                'multiplier': '3x',
                'won': '6'
            }
        ]
        
    }  else if (cat==='weekly'){
        data = [
            {
                'gameName': 'slot',
                'address': '0x...1AbC',
                'hour': '14:48',
                'betAmo': '2',
                'multiplier': '3x',
                'won': '6'
            },
            {
                'gameName': 'slot',
                'address': '0x...1AbC',
                'hour': '14:48',
                'betAmo': '2',
                'multiplier': '3x',
                'won': '6'
            },
            {
                'gameName': 'slot',
                'address': '0x...1AbC',
                'hour': '14:48',
                'betAmo': '2',
                'multiplier': '3x',
                'won': '6'
            },
            {
                'gameName': 'slot',
                'address': '0x...1AbC',
                'hour': '14:48',
                'betAmo': '2',
                'multiplier': '3x',
                'won': '6'
            },
            {
                'gameName': 'slot',
                'address': '0x...1AbC',
                'hour': '14:48',
                'betAmo': '2',
                'multiplier': '3x',
                'won': '6'
            },{
                'gameName': 'slot',
                'address': '0x...1AbC',
                'hour': '14:48',
                'betAmo': '2',
                'multiplier': '3x',
                'won': '6'
            },
            {
                'gameName': 'slot',
                'address': '0x...1AbC',
                'hour': '14:48',
                'betAmo': '2',
                'multiplier': '3x',
                'won': '6'
            },
            {
                'gameName': 'slot',
                'address': '0x...1AbC',
                'hour': '14:48',
                'betAmo': '2',
                'multiplier': '3x',
                'won': '6'
            },
            {
                'gameName': 'slot',
                'address': '0x...1AbC',
                'hour': '14:48',
                'betAmo': '2',
                'multiplier': '3x',
                'won': '6'
            },
            {
                'gameName': 'slot',
                'address': '0x...1AbC',
                'hour': '14:48',
                'betAmo': '2',
                'multiplier': '3x',
                'won': '6'
            }
        ]
    } else if( cat ==='monthly'){
        data = [
            {
                'gameName': 'slot',
                'address': '0x...1AbC',
                'hour': '14:48',
                'betAmo': '2',
                'multiplier': '3x',
                'won': '6'
            },
            {
                'gameName': 'slot',
                'address': '0x...1AbC',
                'hour': '14:48',
                'betAmo': '2',
                'multiplier': '3x',
                'won': '6'
            },
            {
                'gameName': 'slot',
                'address': '0x...1AbC',
                'hour': '14:48',
                'betAmo': '2',
                'multiplier': '3x',
                'won': '6'
            },
            {
                'gameName': 'slot',
                'address': '0x...1AbC',
                'hour': '14:48',
                'betAmo': '2',
                'multiplier': '3x',
                'won': '6'
            },
            {
                'gameName': 'slot',
                'address': '0x...1AbC',
                'hour': '14:48',
                'betAmo': '2',
                'multiplier': '3x',
                'won': '6'
            },
            {
                'gameName': 'slot',
                'address': '0x...1AbC',
                'hour': '14:48',
                'betAmo': '2',
                'multiplier': '3x',
                'won': '6'
            },
            {
                'gameName': 'slot',
                'address': '0x...1AbC',
                'hour': '14:48',
                'betAmo': '2',
                'multiplier': '3x',
                'won': '6'
            },
            {
                'gameName': 'slot',
                'address': '0x...1AbC',
                'hour': '14:48',
                'betAmo': '2',
                'multiplier': '3x',
                'won': '6'
            },
            {
                'gameName': 'slot',
                'address': '0x...1AbC',
                'hour': '14:48',
                'betAmo': '2',
                'multiplier': '3x',
                'won': '6'
            },
            {
                'gameName': 'slot',
                'address': '0x...1AbC',
                'hour': '14:48',
                'betAmo': '2',
                'multiplier': '3x',
                'won': '6'
            },
            {
                'gameName': 'slot',
                'address': '0x...1AbC',
                'hour': '14:48',
                'betAmo': '2',
                'multiplier': '3x',
                'won': '6'
            },
            {
                'gameName': 'slot',
                'address': '0x...1AbC',
                'hour': '14:48',
                'betAmo': '2',
                'multiplier': '3x',
                'won': '6'
            },
            {
                'gameName': 'slot',
                'address': '0x...1AbC',
                'hour': '14:48',
                'betAmo': '2',
                'multiplier': '3x',
                'won': '6'
            },
            {
                'gameName': 'slot',
                'address': '0x...1AbC',
                'hour': '14:48',
                'betAmo': '2',
                'multiplier': '3x',
                'won': '6'
            },
            {
                'gameName': 'slot',
                'address': '0x...1AbC',
                'hour': '14:48',
                'betAmo': '2',
                'multiplier': '3x',
                'won': '6'
            }
        ]
    }
    res.json(data)
}