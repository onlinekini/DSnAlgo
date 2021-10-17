// Create hashtable

class HashTable {

  constructor(size) {
    this.data = new Array(size);
  }

   _hash(key) {
    let hash = 0;
    for (let i =0; i < key.length; i++){
        hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash;
  }

  set (key, value) {
    let pos = this._hash(key); //position in the array
    if (!this.data[pos]) {
      this.data[pos] = []
    }
    this.data[pos].push([key, value])
    //console.log(this.data)
    return pos;
  }

  get (key) {
    let pos = this._hash(key); //position in the array
    if (this.data[pos]) {
      if (this.data[pos].length > 0) {
        for (let i = 0; i < this.data[pos].length; i++) {
          if(this.data[pos][i][0] === key) {
            return this.data[pos][i][1];
          }
        }
      }
    } else {
      "undefined"
    }
  }

  keys() {
    let arrOfKeys = []
    for (let i = 0 ; i < this.data.length; i++) {
      if (this.data[i]) { //if not undefined, then it is an array
        for (let j = 0; j < this.data[i].length; j++) {
          arrOfKeys.push(this.data[i][j][0]);
        }
      }
    }
    return arrOfKeys
  }

}

const myHashTable = new HashTable(2);
myHashTable.set('grapes', 10000)
console.log(myHashTable.get('grapes'))
myHashTable.set('apples', 9)
myHashTable.set('pomogranates', 100)
myHashTable.set('mangoes', 200)
myHashTable.set('watermelon', 25)
console.log(myHashTable.get('apples'))
console.log(myHashTable.get('monkey'))
console.log(myHashTable.keys())