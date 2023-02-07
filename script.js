   let a = prompt(`Type the number below`);
   let b = prompt(`Type one more number`);
   let max;
   function maxNumber (a, b){
      if (a > b) {
         return a;
      }
      else if (b > a) {
         return b;
      }
      else {
         return `a=b`;
      }
   }
   alert (maxNumber(a, b));

let c = prompt('Enter a number');
   function convertNubmer(c){
      return -(c);
   }
   alert(convertNubmer(c));

let number = prompt('enter a number');
let count = prompt('one more number, please');
function three(number, count){
for(let i = 0; i < count; i++){
   number +=3;
}
return number;
}
alert(three(+number, +count));

let metric = prompt('Enter `m` or `cm`');
let km = prompt('Enter value of km');
let m;
let cm;
function KmToM(km){
   return km * 1000;

      // m = km * 1000;
      // return m;
   }
function KmToCm(km){
   return km * 100000;

      // cm = km * 100000;
      // return cm;
   }
function getMetric(metric, km, m, cm){
switch(metric){
   case `m` :
      return m(km);
      break;
   case `cm` :
      return cm(km);

}
}
alert(getMetric(metric, km, KmToM, KmToCm));