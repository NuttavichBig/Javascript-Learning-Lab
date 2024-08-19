export default function(){
//Destructuring
//Lab-11
console.log('----Lab11----')
let [first, second, third] = ['Maya', 'Marisa', 'Chi'];
console.log(first); // * Maya
console.log(second); // ** Marisa
console.log(third); // *** Chi


//Lab-12
console.log('----Lab12----')
let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
  'Raindrops on roses',
  'whiskers on kittens',
  'Bright copper kettles',
  'warm woolen mittens',
];
console.log(raindrops); // * Raindrops on roses
console.log(whiskers); // ** whiskers on kittens
console.log(aFewOfMyFavoriteThings); // *** ['Bright copper kettles','warm woolen mittens']


//Lab-13
console.log('----Lab13----')
let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]];
console.log(numbers); // * [10,30,20]


//Lab-14
console.log('----Lab14----')
let facts = { numPlanets: 8, yearNeptuneDiscovered: 1846 };
let { numPlanets, yearNeptuneDiscovered } = facts;
console.log(numPlanets); // * 8
console.log(yearNeptuneDiscovered); // ** 1846


//Lab-15
console.log('----Lab15----')
let planetFacts = {
  numPlanets2: 8,
  yearNeptuneDiscovered2: 1846,
  yearMarsDiscovered2: 1659
};
let { numPlanets2, ...discoveryYears } = planetFacts;
console.log(discoveryYears); // * {yearNeptuneDiscovered: 1846,yearMarsDiscovered: 1659}


//Lab-16
console.log('----Lab16----')
function getUserData({ firstName, favoriteColor = 'green' }) {
  return `Your name is ${firstName} and you like ${favoriteColor}`;
}
console.log(getUserData({ firstName: 'Alejandro', favoriteColor: 'purple' })); // *Your name is Alejandro and you like purple
console.log(getUserData({ firstName: 'Melissa' })); // ** Your name is Melissa and you like green
console.log(getUserData({})); // *** Your name is undefined and you like green


//Lab-17
console.log('----Lab17----')
let guest = 'Jane';
let admin = 'Pete';
[admin,guest] =[guest,admin]; 
console.log(guest);
console.log(admin);


//Lab-18
console.log('----Lab18----')
function checkAge({firstName,lastName,age}){return age >= 18?`Hello ${firstName} ${lastName}`: `ไม่มีสิทธิ์เข้าใช้งาน`;}
const Lab18ex1 = {
    firstName : 'John',
    lastName : 'Doe',
    age : 18
}
const Lab18ex2 = {
    firstName : 'Sarah',
    lastName : 'Mass',
    age : 15
}
console.log(checkAge(Lab18ex1));
console.log(checkAge(Lab18ex2));


//Lab-19
console.log('----Lab19----')
let userLab19 = {
    name: 'John',
    years: 27
  };
  
let {name,
    years,
    isAdmin = false
} = userLab19;
console.log(name,years,isAdmin);


//Lab-21
console.log('----Lab21----')
let arr21 = [1, [2, [[[3, 4], 5], 6]]];
let [a21, [b21, [[[c21, d21], e21], f21]]] = arr21
console.log(a21,b21,c21,d21,e21,f21);


//Lab-22
console.log('----Lab22----')
const obj22 = { prop: 5, prop2: 10 };
let {prop :a22,prop2:b22} = obj22
console.log(a22,b22);


//Lab-23
console.log('----Lab23----')
// let a, b;
// { a, b } = {a: 1, b: 2};
console.log('Error')


//Lab-24
console.log('----Lab24---')
const [, , , a24, b24] = [1, 2, 3];
console.log(a24,b24)


//Lab-25
console.log('----Lab25---')
const q = { prop: 5, prop2: [10, 100] };
let {prop:x,prop2:[,y]} = q;
console.log(x,y)


//Lab-26
console.log('----Lab26---')
const q2 = {
    prop: 'Hello',
    prop2: {
      prop2: {
        nested: ['a', 'b', 'c']
      }
    }
  };
let {
    prop : x2,
    prop2:  {
        prop2:{
            nested:[,y2,]
        }
    }
} = q2
console.log(x2,y2);


//Lab-27
console.log('----Lab27---')
const names = [
    { firstName: 'John', lastName: 'Doe' },
    { firstName: 'Jack', lastName: 'Dann' },
    { firstName: 'Joe', lastName: 'Dunne' }
  ];
for(let x of names){
    let {firstName:fName,lastName:lName} = x;
    console.log(`${fName} ${lName}`);
}

//Lab-28
console.log('----Lab28---')
const users = [
    { user: "Name1" },
    { user: "Name2", age: 2 },
    { user: "Name2" },
    { user: "Name3", age: 4 }
  ];
  for(let x of users){
    let {user,age = 'unknow'} = x;
    console.log(`${user} ${age}`);
  }
  
  
}
