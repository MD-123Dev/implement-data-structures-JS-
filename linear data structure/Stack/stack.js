//**algo is complete  */
class Stack {
    constructor(){
        this.data = [];
        this.top = 0;
    }
    /**add elemnt in stack */
    push(element) { 
      this.data[this.top] = element;
      this.top = this.top + 1;
    }
    /**size stack  */
   length() {
      return this.top;
   }
   /**get top element of stack  */
   peek() {
      return this.data[this.top-1];
   }
   //**Check if is empty  */
   isEmpty() {
     return this.top === 0;
   }

    /**delete elemnt in stack */
   pop() {
    if( this.isEmpty() === false ) {
       this.top = this.top -1;
       return this.data.pop(); // removes the last element
     }
   }

   /***print element in stack  */
   print() {
      var top = this.top - 1; // because top points to index where new    element to be inserted
      while(top >= 0) { // print upto 0th index
          console.log(this.data[top]);
           top--;
       }
    }
   
}