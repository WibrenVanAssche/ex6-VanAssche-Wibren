var accounts = [{ name: 'roro', balance: 50 }]

var Account = function(naam, balans){
    this.name = naam;
    this.balance = balans;
}

Account.prototype = {
    deposit: function(bedrag){
    if ( typeof bedrag === 'number'){
        this.balance +=bedrag;      //herschreven van corige oefening
    }
    else {
        console.log("geef een geldig nummer")
        }
    },

    withdraw: function(bedrag){
    if ( typeof bedrag === 'number'){
        if (this.balance > bedrag){
        this.balance -= bedrag;  } 
        else {console.log("Saldo ontoereikend")}//herschreven van corige oefening
    }
    else {
        console.log("geef een geldig nummer")
        }
    }
}

//***************************************************************************

/*function createaccount (naam, bedrag){
    var account= {};
    account.name= naam;
    account.balance=bedrag;
    accounts.push(account);
}
*/
function getBalance (){
     
     return function (naam){
       for(i = 0; i<accounts.length; i++){
        if(accounts[i].name === naam){
            console.log("De balans van " + accounts[i].name +" = " + accounts[i].balance)
            break;  }
       }
     }
}


function createaccountmetvar (vari){
    accounts.push(vari);
}
    

//createaccount("Wibren", 30);
var test = new Account ("Jerre", 23);
createaccountmetvar(test);
console.log(accounts);
test.deposit(2);
var balance = getBalance();
console.log(accounts);
balance('Jerre');  
balance('roro')

    
  

     

