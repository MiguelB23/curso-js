const authentic = false;
const canPay = true;

const cash = 300;
const creditCard = 300;
const available = cash + creditCard;
const toPay = 600;

// console.log(authentic || canPay ? 'Can Pay' : 'Cant pay');

// if(cash >= toPay || creditCard >= toPay || availabe >=toPay) {
//     if (cash >= toPay) {
//         console.log('You payed with cash');
//     } else {
//         console.log('You payed with another method')
//     }
// } else {
//     console.log('Not enough funds')
// }

console.log(authentic ? canPay ? 'Está autenticado y puede pagar' : 'sI ESTA AUTENTIC PERO NO PUEDE PAGAR' : 'nO ESTá autenticado')