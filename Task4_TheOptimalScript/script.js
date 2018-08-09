class Cube{
    constructor(price, weight){
        this.price = price;
        this.weight = weight;
    }
}

let listCubes = [];
let limitWeight = 15;

function generateCubes(num){
    for(let i = 0; i < num; i++){
        let price = +Math.floor(Math.random() * 40).toFixed();
        let weight = +Math.floor(Math.random() * 10).toFixed();
        listCubes.push(new Cube( price, weight));
    }
};

function bruteForce( limit, list ) {
    let limitWeight = limit;
    let priceMax = 0;
    let listItems = list;
    for( let set = 0; set < Math.pow(2,list.length); set++){
        let priceCurrent = 0;
        let weightCurrent = 0;
        for( let j = 0; j < list.length; j++){
            let mask = 1 << j;
            if((mask & set) > 0){
                priceCurrent += listItems[j].price;
                weightCurrent += listItems[j].weight;
            }
        }
        if(weightCurrent <= limitWeight && priceCurrent > priceMax){
            priceMax = priceCurrent;
        }

    }
}

generateCubes(30);
bruteForce(limitWeight, listCubes);