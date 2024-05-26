const readLine = require('node:readline')

const { stdin: input, stdout: output } = require('node:process')

const rl = readLine.createInterface({ input, output })

let score = 90;

rl.question('ㅎㅇ : ', (answer) => {
  answer === "ㅎㅇ" || answer === "안녕" || answer === "하이" || answer ?
  a(() => { console.log('그래'); rl.close(); }) :
  a(() => {
    rl.question('대답 : ', (answer2) => {
      answer2 === "ㅎㅇ" || answer2 === "안녕" || answer2 === "하이" ?
      a(() => { console.log('그래'); rl.close(); }) :
      a(() => {
        rl.question('? :', (answer3) => {
          answer3 === "?" ?
          a(() => { console.log('ㅇ'); rl.close() }) :
          a(() => { console.log(";"); rl.close() })
        })
      })
    })
  })
})

score > 90 ? console.log("A+") : score > 80 ? console.log("B+") : score >= 60 ? console.log("C+") : console.log("D++")


function a(callback) {
  callback()
}