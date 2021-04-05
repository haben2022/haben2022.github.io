"use strict";
/**
 *
 * @returns{Object} returns bank acount
 */
function makeAcount() {
  const transactionsDB = [
    { customerId: 1, customerTransactions: [100, 50, -40] },
    { customerId: 2, customerTransactions: [105, 10, -10] },
    { customerId: 3, customerTransactions: [35, -5, 55] },
  ];
  const bank = {}
  bank.getBalance = function (id) {
    const customer = transactionsDB.find((customer) => customer.customerId === id);
   return customer.customerTransactions.reduce((sum,item)=>sum+item,0)
  };
  bank.getCustomer = function (id) {
    const customer = transactionsDB.find((customer) => customer.customerId === id);
    return customer;
  };
  bank.debit = function (id, amount) {
    let currentBalance = bank.getBalance(id);
     if (currentBalance < amount){
         return "you do not have that much balance";
     }
        else{  
            bank.saveTransactions(id,-amount)
        return "good"
    }
  };
  bank.credit = function (id, amount) {
      
          bank.saveTransactions(id,amount)
          return "good"
    };
  bank.saveTransactions=function(id ,amount){
      let customer=bank.getCustomer(id)
      customer.customerTransactions.push(amount)
  }
  bank.overAllBalance=function(){
      let totalBalance=0
      for(let cust of transactionsDB){
          totalBalance+=cust.customerTransactions.reduce((sum,bal)=>sum+bal,0)
      }
      return totalBalance;
  }
  return bank
}
let banks = makeAcount();



console.log(banks.debit(1,6)+" debited $6");
console.log(banks.credit(1,45)+" credited $45")
console.log(banks.getCustomer(3));
console.log(banks.getBalance(3));
console.log(banks.overAllBalance());
