let bracketsExample = '()(){}[{()}]()';
let brackets = {
    ')' : '(',
    ']' : '[',
    '}' : '{'
};

function correctBrackets(inputString){
    let stack = [];
    for (let i = 0; i <= inputString.length; i++){
        if( inputString[i] === '(' ||  inputString[i] === '[' ||  inputString[i] === '{'){
            stack.push(inputString[i]);
        }
        if( brackets[inputString[i]]){
            if(brackets[inputString[i]] === stack[stack.length - 1]){
                stack.pop();
            } else {
                return console.log(false);
            }
        }
    }
    if(stack.length){
        return console.log(false);
    }
    return console.log(true);
}

correctBrackets(bracketsExample);