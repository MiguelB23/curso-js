const cash = 300;
const creditCard = 300;
const available = cash + creditCard;
const toPay = 600;

if(cash >= toPay || creditCard >= toPay || available >= toPay) {
    console.log('you can pay')
} else {
    console.log('sorry, you cant pay')
}