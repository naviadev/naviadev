import {names} from "./basic-data.js";


export class NodeManager{
  
  constructor(){

  this.childArr = [];
  this.parent = document.getElementById('root');  

  // * 생성자를 통해 노드를 생성, html 텍스트를 data.js에서 가져와 삽입
  
    for (let i =0; i < names.length; i++){
      this.childArr[i] = document.createElement('div');
      this.childArr[i].innerHTML = names[i];
      this.parent.appendChild(this.childArr[i]);
    } 


  }
  
}