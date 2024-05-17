// const DATABASE = require('better-sqlite3')
// const data = require('./data.json')
import DATABASE from 'better-sqlite3'

import data from './data.json' with { type: "json" };

export class dbManager{
  constructor(){
    this.db = new DATABASE("./Database/summoner.db",  { verbose: console.log })
  }
  insertStudent(){
    let key = Object.keys(data);
    for(let i = 0; i< key.length; i++){
      const pre = this.db.prepare(`insert into Student (name) values (?)`)
      pre.run(data[key[i]])
    }
  }
  checkStudent(name){
    const pre = this.db.prepare(`SELECT * FROM Student where name = ?`)
    let result = pre.get(name)
    return result
  }

  updateInfo(obj){
    let {name, password, email, phoneNumber} = obj 
    name = `'${name}'`
    const pre = this.db.prepare(`UPDATE Student SET password = ?, email = ?, phoneNumber = ? WHERE name = ` + name)
    pre.run(password, email, phoneNumber)
  }
}


