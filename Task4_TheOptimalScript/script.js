class Cube {
    constructor(price, weight) {
        this.price = price;
        this.weight = weight;
    }
}

class CSV {
  constructor(){
    this.cubesP = '';
    this.BFp = '';
    this.GAp = '';
    this.Tp = '';
    this.DPp = '';
    this.cubesT = '';
    this.BFt ='';
    this.GAt = '';
    this.Tt = '';
    this.DPt = '';
  }
}
const limitWeight = 15;
let maxPriceForCSV = [];

function generateCubes(countElements, limitWeight, iteration) {
    let listCubes = [];
    maxPriceForCSV[iteration] = new CSV();
    maxPriceForCSV[iteration]['cubesP'] = countElements;
    maxPriceForCSV[iteration]['cubesT'] = countElements;
    for (let i = 0; i < countElements; i++) {
        let price = +Math.floor(Math.random() * 100);
        let weight = +Math.floor(Math.random() * (limitWeight + 1));
        listCubes.push(new Cube(price, weight));
    }
    return listCubes;
}

function bruteForce(limit, list) {
    let limitWeight = limit;
    let priceMax = 0;
    let listItems = list;
    for (let set = 0; set < Math.pow(2, list.length); set++) {
        let priceCurrent = 0;
        let weightCurrent = 0;
        for (let j = 0; j < list.length; j++) {
            let mask = 1 << j;
            if ((mask & set) > 0) {
                priceCurrent += listItems[j].price;
                weightCurrent += listItems[j].weight;
            }
        }
        if (weightCurrent <= limitWeight && priceCurrent > priceMax) {
            priceMax = priceCurrent;
        }

    }
    return priceMax;
}

function convertArrayOfObjectsToCSV(args) {
    let result, ctr, keys, columnDelimiter, lineDelimiter, data;

    data = args.data || null;
    if (data == null || !data.length) {
        return null;
    }

    columnDelimiter = args.columnDelimiter || ';';
    lineDelimiter = args.lineDelimiter || '\n';

    keys = Object.keys(data[0]);

    result = '';
    result += keys.join(columnDelimiter);
    result += lineDelimiter;

    data.forEach(function (item) {
        ctr = 0;
        keys.forEach(function (key) {
            if (ctr > 0) result += columnDelimiter;

            result += item[key];
            ctr++;
        });
        result += lineDelimiter;
    });

    return result;
}

function downloadCSV(args) {
    let data, filename, link;

    let csv = convertArrayOfObjectsToCSV({
        data: maxPriceForCSV
    });
    if (csv == null) return;

    filename = args.filename || 'export.csv';

    if (!csv.match(/^data:text\/csv/i)) {
        csv = 'data:text/csv;charset=utf-8,' + csv;
    }
    data = encodeURI(csv);

    link = document.createElement('a');
    link.setAttribute('href', data);
    link.setAttribute('download', filename);
    link.click();
}

function startExperiment(){
  let iteration = 0;
  for(let i = 5; i <= 20; i = i + 5){
    let listCubes = generateCubes(i, limitWeight, iteration);

    let BFt0 = performance.now();
    maxPriceForCSV[iteration]['BFp'] = bruteForce(limitWeight, listCubes);
    let BFt1 = performance.now();
    maxPriceForCSV[iteration]['BFt'] = (BFt1 - BFt0).toFixed();

    iteration++;
  }
  downloadCSV({ filename: "cubes.csv" });
}