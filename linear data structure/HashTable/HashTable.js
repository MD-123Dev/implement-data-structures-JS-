function HashTable(size) {
 this.size = size;
 this.keys = this.initArray(size);
 this.values = this.initArray(size);
 this.limit = 0;
 }

     //**add alemnt  */
    HashTable.prototype.put = function(key, value) {
        if (this.limit >= this.size) throw 'hash table is full'


        var hashedIndex = this.hash(key);
        

        while (this.keys[hashedIndex] != null) {
        hashedIndex++;

        hashedIndex = hashedIndex % this.size;

        }
        this.keys[hashedIndex] = key;
        this.values[hashedIndex] = value;
        this.limit++;
    }

    //**get  */
    HashTable.prototype.get = function(key) {
        var hashedIndex = this.hash(key);

        while (this.keys[hashedIndex] != key) {
        hashedIndex++;

        hashedIndex = hashedIndex % this.size;

        }
        return this.values[hashedIndex];
    }

    //**hashing  */
    HashTable.prototype.hash = function(key) {
        // Check if int
        if (!Number.isInteger(key)) throw 'must be int';
        return key % this.size;
        }

        //*** */
        HashTable.prototype.initArray = function(size) {
        var array = [];
        for (var i = 0; i < size; i++) {
        array.push(null);
        }
        return array;
    }

 var exampletable = new HashTable(13);
 exampletable.put(7, "hi"); //**key + value  */
 exampletable.put(20, "hello");
 exampletable.put(33, "sunny");
 exampletable.put(46, "weather");
 exampletable.put(59, "wow");
 exampletable.put(72, "forty");
 exampletable.put(85, "happy");
 exampletable.put(98, "sad");

  exampletable.hash(7);
  
 console.log(exampletable.get(7));