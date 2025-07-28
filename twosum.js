const arr = [2,7 ,11,15]
const twoSum = (array, target) => {

  for (let i = 0; i < array.length; i++) {
    for (let j= i+1 ;j < array.length; j++) {
      if(array[i]+ array[j]=== target){
        return [i,j]
      }
    }
  }

} 
console.log(twoSum(arr, 9))