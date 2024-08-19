export default function(){
//Rest
//Lab-1
console.log('----Lab1----')
let multiNum = (...rest) =>{
    let result = 1;
    for(let a of rest){
        result *= a;
    }
    return result;
}
console.log(multiNum(4));
console.log(multiNum(4,5,5));
console.log(multiNum(3,3,2,5));


//Lab-2
console.log('----Lab2----')
let filterOutOdds = (...num) =>{
    return (num.filter(item => item%2 ==0));
    }
console.log(filterOutOdds(1,2,3,4,5,6));
console.log(filterOutOdds(2,4,5,12,13,18));


//Lab-3
console.log('----Lab3----')
let mergeObjects = (...obj) =>{
    let mergeObj = Object.assign(...obj);
    return mergeObj;
}
console.log(mergeObjects({name : 'john'},{age : 17},{address : 'thailand'}));
console.log(mergeObjects({name : 'john'},{age : 17},{address : 'thailand'},{name : 'Sarah',favoriteColor : 'Green'}));

//Spread Syntax
//Lab-4
console.log('----Lab4----')
const nums1 = [1, -2, 3, 4];
const nums2 = [8, 3, -8, 1];
let numarr = [5,...nums1,-6,-1,...nums2]
console.log(numarr)
console.log(numarr.reduce((pre,cur)=>{
  return pre += cur;
},0))


//Lab-5
console.log('----Lab5----')
const thirdNumPow = (arr1) =>{
    let newArr = [...arr1];
    newArr[3] = newArr[3]**2;
    return newArr
}
const arr1 = [3,5,6,8,5,2,9]
console.log(thirdNumPow(arr1));
console.log(arr1);


//Lab-6
console.log('----Lab6----')
function hobbyInfo(fname,sname,...rest){
    let info = {
        name : fname,
        surname : sname,
        hobby : [...rest],
        'total hobby' : rest.length
    }
    return info
}
let hobbyLab6 = hobbyInfo('Nuttavich','Siri','Football','Game','Cartoon');
console.log(hobbyLab6);


//Lab-7
console.log('----Lab7----')
const doubleAndReturnArgs= (numArr,...rest) =>{
    return [...numArr,...rest.map(num => num*2)]
}
console.log(doubleAndReturnArgs([1, 2, 3], 4, 4)); 
// expexted result: [1, 2, 3, 8, 8]
console.log(doubleAndReturnArgs([2], 10, 4)); 
// expexted result: [2, 20, 8]


//Lab-9
console.log('----Lab9----')
const cloneArray =(inpArr)=> [...inpArr];
console.log(cloneArray(arr1));
console.log(arr1);
console.log(cloneArray(arr1) == arr1);


//Lab-10
console.log('----Lab10----')
const cloneObject = (obj) =>{
    return {...obj}
}
console.log(cloneObject(hobbyLab6))
console.log(cloneObject(hobbyLab6) == hobbyLab6)
}