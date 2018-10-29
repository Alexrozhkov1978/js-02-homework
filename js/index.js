const usersEnteredVal = prompt ("Please, enter the Fibanaci number") 
const usersNumFiba = parseInt(((usersEnteredVal >= 1) && (parseInt(usersEnteredVal)%usersEnteredVal===0)) ? usersEnteredVal:(alert ("You are entered a wrong number, programm will start with Number 1 now."),1));

alert (" Method 1. Solution N 1 (For) is :   " + methodFibaFor(usersNumFiba) + "  (rabit(s))"); 
alert (" Method 2. Solution N 2 (Arr) is :   " + methodFibaArr(usersNumFiba) + "  (rabit(s))");
alert (" Method 3. Solution N 3 (Recur) is :   " + methodFibaRec(usersNumFiba) + "  (rabit(s))");

function methodFibaFor (){
    let firstFibTmp=1; 
    let secondFibTmp=1;
    const j = parseInt(usersNumFiba%2===0 ? (usersNumFiba/2):((usersNumFiba+1)/2));
    for (let i = 0; i < j-1; i++){
        firstFibTmp = firstFibTmp + secondFibTmp;
        secondFibTmp = firstFibTmp + secondFibTmp;
    }
    return usersNumFiba%2!==0 ? firstFibTmp:secondFibTmp;
}   

function methodFibaArr (){
    let fibaArr = [1,1];
    for (let i = 0; i < usersNumFiba-2; i++){
        fibaArr.push(fibaArr[i]+fibaArr[i+1]);
    }
    return fibaArr.pop();
}   

let n = usersNumFiba;
function methodFibaRec (n){
    if (n == 1 || n == 2) return 1;
    else return  methodFibaRec(n-1) + methodFibaRec(n-2);
}
