export default function (){
//Class
//Lab-1
console.log('----Lab1----')
class Calculator {
  constructor(init = 0){
    this.value = init
  }
  add(num){
    this.value += num;
  }
  subtract(num){
    this.value -= num;
  }
  multiply(num){
    this.value *= num;
  }
  divide(num){
    this.value /= num;
  }
  show(){
    console.log(`This value = ${this.value}`);
  }
}
let ftry = new Calculator(10);
ftry.show();
ftry.add(20);
ftry.show();
ftry.multiply(10);
ftry.show();
ftry.divide(30);
ftry.show();
ftry.subtract(5);
ftry.show();

//Lab-2
console.log('----Lab2----')
class Sale {
  constructor(_name,_amount,_price){
    this.name = _name;
    this.amount = _amount;
    this.price = _price;
  }
  calcPrice(){
    return this.amount*this.price;
  }
}
class Beverage extends Sale{}
let bev1 = new Beverage('Pepsi',3,19);
console.log(bev1.calcPrice());
console.log(bev1.amount);
console.log(bev1.price);

}