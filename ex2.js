var accounts = [
    {name: 'Wibren', balance: 0},
    {name: 'roro', balance: 0}
];

function createaccount (naam, bedrag){
    var account= {};
    account.name= naam;
    account.balance=bedrag;
    accounts.push(account)
};

createaccount("test",20);

console.log(accounts);

