const usersEnteredVal = prompt ("Please, enter the Fibanaci number") 
const usersNumFiba = parseInt(((usersEnteredVal >= 1) 
    && (parseInt(usersEnteredVal)%usersEnteredVal===0)) 
    ? usersEnteredVal:(alert ("You are entered a wrong number, programm will start with Number 1 now."),1));

alert (" Method 1. Solution N 1 (For - my version) is :   " + methodFibaFor(usersNumFiba) + "  (rabit(s))");
alert (" Method 1. Solution N 2 (For - classic) is :   " + methodFibaForClassic(usersNumFiba) + "  (rabit(s))"); 
alert (" Method 2. Solution N 3 (Arr) is :   " + methodFibaArr(usersNumFiba) + "  (rabit(s))");
alert (" Method 3. Solution N 4 (Recur) is :   " + methodFibaRec(usersNumFiba) + "  (rabit(s))");

function methodFibaFor (usersNumFiba){
    let firstFibTmp=1; 
    let secondFibTmp=1;
    
// в цьому циклі за один захід розраховуються відразу два новихзначення ряду Фіба, тому циклів 2 рази меньше
// проста перевірка на парність для ідентифікації яке число на вивід і скільки цмклів потрібно 

    for (let i = 0; i < parseInt(usersNumFiba%2===0 ? (usersNumFiba/2):((usersNumFiba+1)/2))-1; i++){
        firstFibTmp = firstFibTmp + secondFibTmp;
        secondFibTmp = firstFibTmp + secondFibTmp;
    }
    return usersNumFiba%2!==0 ? firstFibTmp:secondFibTmp;
}   


function methodFibaArr (usersNumFiba){
    let fibaArr = [1,1];
    for (let i = 0; i < usersNumFiba-2; i++){
        fibaArr.push(fibaArr[i]+fibaArr[i+1]);
    }
    return fibaArr.pop();
}   

let n = usersNumFiba;
function methodFibaRec (n){
    if (n == 1 || n == 2) {
        return 1;
    }
    else {
        return  methodFibaRec(n-1) + methodFibaRec(n-2);
    }
}

function methodFibaForClassic (usersNumFiba){
    let firstFibTmp=1; 
    let secondFibTmp=1;
    
    for (let i = 3; i <= usersNumFiba; i++){
        [firstFibTmp, secondFibTmp] = [secondFibTmp, firstFibTmp+secondFibTmp]; 
        }
        return secondFibTmp;
}   


