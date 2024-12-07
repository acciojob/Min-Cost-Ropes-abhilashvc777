function mincost(arr)
{ 
//write your code here
	const length = arr.length
	let total_cost = 0;
	arr.sort(function(a,b){return a-b})
	for(let i=0; i<length-1; i++){
		let sum = 0;
		for(let j=0; j<2; j++){
			sum=sum+arr[j]
		}
		total_cost = total_cost+sum
    arr.splice(0,2,sum)
    arr.sort(function(a,b){return a-b;});
 }
	// return the min cost
	return total_cost
}
// mincost([2, 3, 4, 6])
module.exports=mincost;
