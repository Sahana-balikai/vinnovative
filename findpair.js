function findpair(arr,key){
  console.log("calling")
  console.log(arr)
  console.log(key)
  var c
  var b []
  for(var i=0;i<arr.lenght-1;i++){
    c=i+1;
    if(arr[i]+arr[c]==key){
      b.push(arr[i])
      b.push(arr[c])
      return b
      
    }
  }
}

var arr=[3,9,2,5,6,7]
var key=11
console.log(findpair(arr,key))