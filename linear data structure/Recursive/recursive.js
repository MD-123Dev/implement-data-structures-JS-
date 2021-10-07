

let sum = function(x){

  if(x<0){
       return -1;

  }
  else{
     return (x + sum(x - 1 ));
  }
}

console.log(sum(20));