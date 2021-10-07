///***Linear Search */

function searchAlgo(array,n){
     
   for(var i=0; i<array.length; i++) {

       if (array[i]==n) {
           return true;
        }
}
 return false;
}


 console.log(searchAlgo([1,2,3,4,5,6,7,8,9], 6)); 


