//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined


function firstRecurringCharacter(input) {
  const setOfValues = new Set()
  for (let i = 0 ; i < input.length; i++) {
    if(setOfValues.has(input[i])) {
      return input[i]
    }
    setOfValues.add(input[i]);
  }


  //return input.find( val => setOfValues.has(val) ? true : setOfValues.add(val))
}

console.log(firstRecurringCharacter([2,5,1,2,3,5,1,2,4]))
console.log(firstRecurringCharacter([2,1,1,2,3,5,1,2,4]))
console.log(firstRecurringCharacter([2,5,5,2,3,5,1,2,4]))

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2