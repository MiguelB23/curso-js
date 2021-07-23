// switch Case

const paymentMethod = 'cash';

switch(paymentMethod) {
    case 'cash':
        console.log(`You've paid with ${paymentMethod}`);
        break;
    case 'check':
        console.log(`You've paid with ${paymentMethod}`);
        break;
    default:
        console.log('Your payment Method is not allowed')
        break;
}