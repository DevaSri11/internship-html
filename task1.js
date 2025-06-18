let arr=['apple','banana','orange','jackfruit','pomegranate'];
arr.push('strawberry');
arr.shift();
console.log(arr.length);
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}
console.log(arr.reverse());
let num=[1,3,4,5,6,7];
let s=0;
for(let i=0;i<num.length;i++){
    s+=num[i];
}
console.log('Sum: '+s);