export default function(){
//Static Method
//Lab-1
console.log('----Lab1----')
const isArray = (inpArr) => Array.isArray(inpArr);
console.log(isArray('Yoo'))
console.log(isArray(['Please','Help','Me','Im','Under','Water']))


//Object keys, values, entries
//Lab-1
console.log('----Lab1----')
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

console.log((Object.values(salaries)).reduce((p,c)=>{
  return p+c;
},0))


//Lab-2
console.log('----Lab2----')
let checkEmptyObj = (obj) => Object.entries(obj).length == 0
console.log(checkEmptyObj({name:'Pon',
age : 15}));
}