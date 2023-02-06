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