module.exports = function getZerosCount(number) {
  var count = 0,
i  = 5;

while(number/i != 0){

count+=Math.floor(number/i);

   i=i*5;

   }
return count;
}
