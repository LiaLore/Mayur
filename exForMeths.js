// filter() ---> array.filter(function(currentValue,index,arr),thisValue);
const apartNums = [123,5,11,10,89,32,54];
const result = apartNums.filter((apart)=>{
    return apart <= 100;
});
console.log("filter:", result.sort((a,b)=>{return a-b}));

// forEach() ---> array.forEach(function(currentValue,index,arr),thisValue)
const picture = ['picture','picture','picture','picture'];
picture.forEach((item,index,arr)=>{
    arr[index] = item + '-' + (index+1); 
})
console.log("forEach:", picture);

// map() ---> array.map(function(element,index,array){},this);
const streetNum = [1,2,3,4,5,6,7,8,9,10];
const streetRes = streetNum.map((element)=>{
    return "165/Wolfstreet/ " + element +",  Zip code: 11324";
});
console.log(streetRes);

// concat() ----> array1.concat(array2,array3);

// sort() ----> array.sort(compareFunction);
// spred ooperator ---> array1.concat(...array2, ...array3);



