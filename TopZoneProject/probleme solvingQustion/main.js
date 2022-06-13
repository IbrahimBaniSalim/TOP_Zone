const sayHallo = function () {
  return "hallo";
};
sayHallo();

const myAge = function (age) {
  return age;
};
myAge(18);

const incremantOne = function (num) {
  return num + 1;
};
incremantOne(23);
const greet = function (name) {
  return name + "halloo";
};
greet("ibrahim");

const double=function(num){
return num*num
}
double(5);
const fullName=function(Fname,Lname){

    return Fname+Lname ;
}
fullName("hmam","ibrahiem")
const average=function(a,b){
    return (a+b)/2
}
average(20,25);
const square=function(num){
return num*num
}
const cube=function(num){
return num *num *num;
}

const totalBill= function(param1,param2,param3){
return (param2*param1+param1)+param3;
}
const ageInHours=function(num){
  return num*365*24;
}
const randomNumber = function () {
  return Math.random();
};

const toLowerOrUpperCase = function (string, strCase) {
  if (strCase==="lower"){
    return string.toLowerCase();
  }
  else{
    return string.toUpperCase();
  }
};
let to="";
const addToList = function (toDo) {
to=to+toDo;
 return to;
};

const addToArray=function(arr,str){
 arr.push(str)
 return arr;
}
const sliceArray = function (array, startVal, endVal) {
  const startIndex = array.indexOf(startVal);
  let endIndex = array.indexOf(endVal);
 return array.slice(startIndex,endIndex)
};
const isPalindrome = function (string) {
  string=string.split("").join("")
  return string===string.split("").reverse().join("");

};
const arrayMiddle = function (array) {
  middle=Math.ceil(array.indexOf(array.length/2))
  return array[middle]
};
const persone={name:"ibrakem",age:25}