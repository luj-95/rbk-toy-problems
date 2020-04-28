

//  //creat a new array the push every new element inside it


function each(array, func) {
     for (var i = 0; i < array.length; i++) {
         func(array[i],i)
     }
 }
function indexedExponentials(numbers) {
  var powerArray=[]
  each (numbers,function (element,index ){ 
    
    powerArray.push( Math.pow(element,index))
});
return powerArray

}
indexedExponetials ([7,9,2,6]) //→ [1,9,4,216]


/*Write a function called evenIndexedOddNumbers when given an array of numbers as a parameter, returns a new array of only odd numbers with even indices*/


function evenIndexedOddNumbers(numbers) {
  var oddArray=[]
  each(numbers,function(element,index){
    if(element%2!==0&&index%2===0){
      oddArray.push(element)

    }
  });

  return oddArray
}
evenIndexedOddNumbers([1,3,3,4,7,10]) //→ [1,3,7]




function evenIndexedEvenLength(strings) {
  var strArray=[]
    each(strings,function(element,index){
      if(element.length%2===0&&index%2===0){ 
strArray.push(element)
      }
    })
    return strArray

}

evenIndexedEvenLength(['lion','tiger','cat','dog','bird','fish']) //→ [‘lion’,’bird’]

evenIndexedEvenLength(['Ahmad','Yaser','Mays','Zak']) //→ [‘Mays’]

