let  arr1=[1,2,3,4,5,6,7,8];
Array.prototype.even= function(){
        return this.filter((item) =>(item%2===0));
}
Array.prototype.add= function(){
 return this.filter((item) =>(item%2!==0));
}



let temp=arr1.even();

console.log(temp);

arr1= [1,2,3,4,5,6,7,8];

temp=arr1.add();

console.log(temp);