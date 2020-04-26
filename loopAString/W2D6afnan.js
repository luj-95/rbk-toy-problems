// function cube(x) { 
//        return x * x * x; 
//  } 

var cube = function (x) {
    return x * x * x
  }
  //  // 2. 
  //  function fullname(first, last) { 
  //        return first + ' ' + last; 
  //  } 
  var fullName=function(first,last) {
    return first + " " +last;
  }
  
  //  // 3. 
  //  function power(base, exp) { 
  //        if (exp === 0) { 
  //        return 1; 
  //        } 
  //        return base * power(base, exp - 1); 
  //  } 
  var power=function(base,exp) {
    if (exp === 0) { 
          return 1; 
         } 
        return base * power(base, exp - 1); 
  
  }
  
  //  // 4. 
  //  function sumCubes(numbers) { 
  //        var total = 0; 
  //        for (var i = 0; i < numbers.length; i++) { 
  //              total = total + cube(numbers[i]); 
  //        } 
  //        return total; 
  //  }
  var sumCubes=function(numbers) {
    var total = 0; 
   for (var i = 0; i < numbers.length; i++) { 
              total = total + cube(numbers[i]); 
         } 
         return total; 
   }
    
    
  
  function each(array, func) {
    for(var i=0;i<array.length; i++) {
      return func( array[i])
        }
      
  }
  var x=[1,2,3]
   var sum=0;
  function sumSquares(numbers) {
   
    for(var i =0; i<numbers.length;i++) {
      sum=sum+(numbers[i]*numbers[i])
  
    }
    return sum
  }
  // function sumCubes(numbers) {
  //    var total = 0; 
  //        for (var i = 0; i < numbers.length; i++) { 
  //              total = total + cube(numbers[i]; 
  //        } 
  //        return total;   
  // }
  
  // sumSquares([2,4,8]) -> 584
  // sumSquares([3,1,5])
  var total=0
  var x=[1,2,3]
  function each(array, func) {
    for(var i=0;i<array.length; i++) {
      func( array[i])
        }
  
  }
  
  var sumCubes= function(numbers) {  
  each (numbers,function(num){
     total = total + num*num*num  
  })
  return total
   }
   var pro=1
  
   function productLoop(numbers) {
       for(var i=0 ; i<numbers.length;i++){
           pro=pro*numbers[i]
       }
       return pro
    
  }
  
  // productLoop([5,2,7]) -> 70
  // productLoop([20,2,3,54]) -> 6480
  
  
  
  function each(array, func) {
    for(var i=0;i<array.length; i++) {
      func( array[i])
        }
  
  }
  var product=1
  var productEach= function(numbers) {  
  each (numbers,function(num){
     product *= num  
  })
  return product}
  // Write a function called cubeArray, that takes an array of numbers as a parameter and returns an array of all numbers cubed using for loop;then, refactor it to use each
  // var arr2=[]
  // function cubeArray(numbers) { 
  //     for(var i=0 ; i<numbers.length;i++){
  //          pro=numbers[i]*numbers[i]*numbers[i]
  //          arr2.push(pro)
  //      }
  //   return arr2
  // }
  
  // cubeArray([2,4,6]) -> [8,64,216]
  /*var arr3=[]
  var pro=1
  var cubeArray = function(numbers){
  each (numbers , function(num){
  pro=num*num*num
  arr3.push(pro)
  })
  return arr3
  }*/
  //  Write a function called oddsArray that takes an array of numbers as a parameter and returns an array of odds numbers only.
  var arr4=[]
  var oddsArray = function (numbers) {  
  each(numbers,function(num){
  
      if (num % 2 ==! 0){
      arr4.push(num)}
      })
  return arr4
  }
  
  // oddaArray([8,4,7,5,9,2,1]) -> [7,5,9,1]
  
  // Write a function called sumByMultiplied4 that takes an array as a parameter and returns the sum of all elements multiplied by four.
  var sum1 =0
  var sumByMultiplied4=function (numbers){
      each(numbers,function(num){
          sum1=sum1+num
  
      })
      return sum1 *4
  }
   //Write a function sumByFunction that accepts two parameters: an array of numbers and a function. The function will be invoked upon each element in the array, and its result will be used to compute the sum.
  var sum2=0
  var sumByFunction = function (numbers, func) {
   each (numbers,function(num) {
       sum2= sum2 + func(num)
        
   })
  
  return sum2
   }
  
   var numbers = [1,2,3,4]
  // sumByFunction(numbers, square) -> 30
  // sumByFunction(numbers, cube) -> 100
  
  //  su(number){return number * 4;}) -> 40mByFunction(numbers, function 
  // Write a function called productBy that works like sumByFunction, but for the product.
  var pro2=1
  var productBy=function(numbers,func){
      each(numbers,function(num){
         pro2=pro2 * func(num)
      })
      return pro2
  
  }
  // Write a function called doubleAll that takes an array of numbers as a parameter and returns an array of all those numbers doubled.
  var arr6=[]
  var doubleAll=function(numbers){
      each(numbers,function(num){
           arr6.push(num*num)
      })
      return arr6
  }
  
  // Write a function called halfAll that takes an array of numbers as a parameter and returns an array of all those numbers halved (divided by two).
  var halfAll=function (numbers){
      each(numbers,function(num){
          arr6.push(num/2)
      })
      return arr6
  }
  // Write a function called uppercaseAll that takes an array of strings as a parameter and returns an array of all those strings transformed to upper case. You can use toUpperCase to convert a string to the upper case.
  
  // 'hello, world'.toUpperCase();-> “HELLO”, “WORLD”
  var uppercaseAll=function (strings){
      each(strings,function(str){
         arr6.push( str.toUpperCase())
              })
              return arr6
  }
  //You should at this point notice a similarity between all of the above functions, as well as the cubeAll function. These functions all define what we call mappings; that is, they map from one value to another.
  
  // doubleAll maps from an array of numbers to an array of doubled numbers // [1, 2, 3, 4] => [2, 4, 6, 8] 
  // halfAll maps from an array of numbers to an array of halved numbers 
  // [1, 2, 3, 4] => [0.5, 1, 1.5, 2]
  
  
  // Write a function map that takes two parameters: an array and a function that, when applied to a single element, produces a new element. map should return an array of all elements in the input array transformed using the input function. Your function should work like this:
  
   function map(array, f) { 
     return array.map(f)
      } 
  //  map ([1,2,3,4], function(x) { 
  //        return x * 2; 
  //  });  
  //  // => [2, 4, 6, 8]
  
  // Complete the invocations of map below to produce the desired output (you'll need to replace ??? with a function
  
  map(['hello', 'world'], function(x){
      return x.toLowerCase(x)
  }); // => ['HELLO', 'WORLD']map(['HelLo', 'WorLD'], ???); // => ['hello', 'world']
  map(['the', 'quick', 'brown', 'fox', 'jumped'], function(x){
       return x.length
  }); // => [3, 5, 5, 3, 6]
  var people = [
        {name: {first: 'Grace', middle: 'B.', last: 'Hopper'}, age: 85},
        {name: {first: 'Adele', last: 'Goldstine'}, age: 43},
        {name: {first: 'Ada', last: 'Lovelace'}, age: 36},
        {name: {first: 'Hedy', middle: 'E.', last: 'Lamarr'}, age: 85},
        {name: {first: 'Ruchi', last: 'Sanghvi'}, age: 34}
  ];
  
  map( people, function(x){
       var y = x.name
  return y.first +' '+ y.last
  
  });
  
  
  
  
   // => ['Grace B. Hopper', 'Adele Goldstine', 'Ada Lovelace', 'Hedy E. Lamarr', 'Ruchi Sanghvi']
  map(people, function(x){
      var y = x.name
      return y.first +' '+y.last +' '+'is'+' '+x.age
  
  }); 
  // => ['Grace B. Hopper is 85', 'Adele Goldstine is 43', 'Ada Lovelace is 36', 'Hedy E. Lamarr is 85', 'Ruchi Sanghvi is 34']
  
  //Write a function called arrayOfMultiplesOf3 that takes an array of numbers as a parameter and returns an array of only the numbers that are multiples of three.
  map(numbers , function (x){
     
      if (x % 3 ==! 0){
  
     return x
      } 
  
      })

