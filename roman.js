function solution(roman){
  // complete the solution by transforming the 
  // string roman numeral into an integer 
 var decoder = {
     I: 1,
     V: 5,
     X: 10,
     L: 50,
     C: 100,
     D: 500,
     M: 1000
  }

  var sum = 0;
  console.log("input: " + roman);
  for (var i = 0; i<= roman.length-1; i++){
    console.log(sum);
    if ( roman[i] == roman[i+1]){
        sum += decoder[roman[i]] + decoder[roman[i+1]];
        i++;
    }
    else if (decoder[roman[i]] < decoder[roman[i+1]]){
      sum +=  decoder[roman[i+1]] - decoder[roman[i]];
      i++
    }
    else{
      sum += decoder[roman[i]];
    }
  }
  console.log("The sum is " + sum);
  return sum;
}
