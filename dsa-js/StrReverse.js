const stringToReverse = "Welcome to the new world mr. Anderson"

function reverseString(str) {
  let strBuf = [];
  for (let i = str.length -1; i >= 0; i--) {
    strBuf.push(str[i]);
  }
  return strBuf.join("");

}

//console.log(reverseString(stringToReverse));