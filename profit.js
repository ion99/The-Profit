function processData(input) {
  let arr = input.split('');
  let arr1 = arr.slice();
  let prices = (arr.splice(arr.indexOf('\n')+1, parseInt(arr[0]) * 2 - 1 )).filter(function(x){ return x !== ' '}).map(function(x){
    return parseInt(x);
  });
  let profit = arr1.splice(arr1.lastIndexOf('\n') - (parseInt(arr1[2]) * 2 - 3)).filter(function(x){ return x !== '\n'}).map(function(x){
    return parseInt(x);
  });
  profit.forEach(function(x){
    let result = [];  
    for (let i = 0; i < prices.length; i++){
      for (let j = i + 1; j < prices.length; j++){
        if(prices[j] - prices[i] === x) { result.push([i+1,  j+1,  j-i]) }
      }
    }
    if (result.length){
      console.log(result.reduce(function(a,b){ if (b[2] <= a[2]) {return b} else return a})[0],  result.reduce(function(a,b){ if (b[2] <= a[2]) {return b} else return a})[1]);
    } else { 
      console.log(-1);
    }
  })
} 