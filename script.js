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

