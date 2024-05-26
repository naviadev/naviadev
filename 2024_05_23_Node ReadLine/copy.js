const readLine = require('node:readline')
const { stdin: input, stdout: output } = require('node:process')
const rl = readLine.createInterface({ input, output })
const fs = require('fs')
const json = require('./pokemon.json')

const convert = JSON.parse(fs.readFileSync('./pokemon.json'))



let quiz = ()=>{
  let number = convert.length
  let randNumber = Math.floor(Math.random() * number);
  rl.question(`도감번호 - ${randNumber + 1}은 ? : `, (answer)=>{
    answer === convert[randNumber] ? 
    (()=>{
      console.log(`와 ~ ${answer} 아시는구나~`)
      rl.close()
    })() : 
    (()=>{
      console.log(`정답 : ${convert[randNumber]}`)
      console.log("다시")
      quiz()
    })()
  })
}

quiz()

rl.question("포켓몬스터 이름 작성해주세요 :", function(answer){
  let data = [];
  pokemonData.forEach((element) => {
    if(answer === element) {
      data.push(element);
      readLine.close();
    }
  });
  console.log(data);
  if(data.length === 0) {
    console.log("포켓몬스터가 존재하지 않습니다.");
  } else {
    console.log("포켓몬스터가 존재합니다.");
    fs.writeFile('./log.json', JSON.stringify(data), 'utf-8', (error)=>{})
  }
  readLine.close();
});