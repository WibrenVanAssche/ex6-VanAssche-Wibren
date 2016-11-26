var accounts = [
    {name: 'Wibren', balance: 40},
    {name: 'roro', balance: 0}
];
//***********************************create account************************************************
function createaccount (naam, bedrag){
    var account= {};
    account.name= naam;
    account.balance=bedrag;
    accounts.push(account);
};
//***************************************deposit***************************************************
function deposit (naam, bedrag){
    if ( typeof bedrag === 'number'){
        for (i =0; i<accounts.length; i++){
            if (accounts[i].name === naam){
                accounts[i].balance += bedrag;
                break
            }
        }
    }
    else {
        console.log("geef een geldig nummer")
    }
}

//test deposit
//deposit('Wibren',20);
//deposit(Wibren','m')


//****************************************withdraw******************************************************
function withdraw (naam, bedrag){
    if ( typeof bedrag === 'number'){
        for (i =0; i<accounts.length; i++){
            if (accounts[i].name === naam){
                if(accounts[i].balance > bedrag){
                accounts[i].balance -= bedrag;
                }
                else{
                    console.log("ontoereikend saldo")
                }
                break
            }
            
        }
    }
    else {
        console.log("geef een geldig nummer")
    }
}
//voorbeeld dat op toledo staat doet volgens mij niet wat het moet doen. deposit werkt en valideert

//test withdraw
/*
withdraw('Wibren',20);
withdraw('roro','m');
withdraw('roro',5);
 */

//************************************anonieme getBalance***************************************************
//Add a function that returns a anonymous function that returns the balance from the given account
function getBalance (){
     
     return function (naam){
       for(i = 0; i<accounts.length; i++){
        if(accounts[i].name === naam){
            console.log("De balans van " + accounts[i].name +" = " + accounts[i].balance)
            break;  }
       }
     }
}

//test anonieme functie

var balance = getBalance();
balance('Wibren');

//********************************************************************************************



//console.log(accounts);

