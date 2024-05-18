let a = {
  name : 1,
  age : 18
}

let b = [1,2,3,4,5]

for(let property in a)
{
  console.log(property + ":" + a[property]);
}