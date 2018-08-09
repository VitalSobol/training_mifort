class Cube {
    constructor(price, weight) {
        this.price = price;
        this.weight = weight;
    }
}

let maxPriceForCSV = [{
    'cubes': '',
    'BF': '',
    'GA': '',
    'Tree': '',
    'DP': '',
}];

function generateCubes(countElements, limitWeight) {
    let listCubes = [];
    maxPriceForCSV[0]['cubes'] = countElements;
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
    maxPriceForCSV[0]['BF'] = priceMax;
}

const limitWeight = 15;
let listCubes = generateCubes(5, limitWeight);
bruteForce(limitWeight, listCubes);

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