const money = 200;
const toPay = 400;
const bankCard = false;
const checkM = true;

if(money >= toPay) {
    console.log('you can pay')
} else if(bankCard) {
    console.log('You can pay with your card')
} else if(checkM) {
    console.log('you can use a check')
}
else {
    console.log('Not enough')
}
