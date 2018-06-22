module.exports = checkBrackets;
let brackets = {
    ')' : '(',
    ']' : '[',
    '>' : '<'
};
function checkBrackets(inputString){
    let stack = [];
    for (let i = 0; i <= inputString.length; i++){
        if( inputString[i] === '(' ||  inputString[i] === '[' ||  inputString[i] === '<'){
            stack.push(inputString[i]);
        }
        if( brackets[inputString[i]]){
            if(brackets[inputString[i]] !== stack.pop()){
                return 0;
            }
        }
    }
    if(stack.length){
        return 0;
    }
    return 1;
}
