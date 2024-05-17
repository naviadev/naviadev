function * gen(){
  yield ()=>{console.log("1")}
  yield ()=>{console.log("2")}
  yield ()=>{console.log("3")}
  yield ()=>{console.log("4")}
}

let genFunc = gen();

let i = genFunc.next().value()

 


//  --------------
// * 배열 ForEach 방식


let a = ()=>{console.log("1")}
let b = ()=>{console.log("2")}
let c = ()=>{console.log("3")}
let d = ()=>{console.log("4")}

const funcController = [a,b,c,d];

// funcController.forEach(element => {
//   element()
// });