const user = true;
const canPay = true;

// if(user ) {
//     console.log('you are registered');
// } else if(canPay) {
//     console.log('you can pay')
// }

// if (user && canPay) {
//     console.log('you can pay')
// } else {
//     console.log('you cant pay')
// }

if (user && canPay) {
    console.log('welcome, you can pay')
} else if(!user && !canPay){
    console.log('you cant pay')
} else if(!canPay) {
    console.log('not enough money')
} else if(!user) {
    console.log('please, sign in')
}