function mincost(arr)
{ 
//write your code here
const arr1 = arr.sort(function(a,b){return a-b})
	let sum=arr1[0]+arr[1]
	for(let i=2; i<=arr1.length-1; i++){
       for(let j=0; j<=i; j++){
		   sum = sum+arr1[j]
	   }
	}
// return the min cost 
	return sum
}
module.exports=mincost;
