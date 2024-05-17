// const db = require('better-sqlite3')
import db from "better-sqlite3"
import http from 'http'
import fs from 'fs'
import PATH from 'path'
import { dbManager } from "./Database/DatabaseController.js"


// const http = require('http')
// const fs = require('fs')
// const PATH = require('path')
// // const { send } = require('process')
// const dbManager = require('./Database/DatabaseController')




http.createServer((req,res)=>{

  if(req.method === "GET"){

    if(req.url.includes("/check")){
      checkData(req, res)
    }
    else{
      sendFile(req,res)
    }
  }


  else if(req.method == "POST"){
    postUserInfo(req, res)
  }

}).listen(3000, ()=>{console.log('on')})




function sendFile(req, res){
  let filePath = getFilePath(req.url)
  let ext = getExtension(filePath)
  let contentType = geeContentType(ext)
  

  fs.readFile(filePath, (error, data)=>{
    if(error){
      res.writeHead(404, {"Content-Type" : "text/html"})
      res.end(error)
    }else{      
      res.writeHead(200, {"Content-Type" : contentType})
      res.end(data)
    }
  })

}

function getFilePath(url){
  if(url === "/"){
    return "./public/index.html"
  }else{
    return "./public"+url
  }
}

function getExtension(path){
  let ext = PATH.extname(path)
  return ext.toLowerCase()
}

function geeContentType(ext){
  if(typeContainer.hasOwnProperty(ext)){
    return typeContainer[ext]
  }else{
    return 'text/plain'
  }
}

const typeContainer = {
  ".html" : "text/html; charset=utf-8",
  ".css" : "text/css",
  ".js" : "application/javascript",
  ".json" : "application/json",
  ".ico" : "image/x-con"
}



function checkData(req,res){
  let splitArr = req.url.split('/check/')
  let target
  let value
  let boolean

  [target, value] = splitArr[1].split('/')
  
  if(target === "name"){
    boolean = checkDatabase(value)
  }else{

  }
  
  if(boolean){
    res.writeHead(200)
    res.end()
  }else{
    res.writeHead(404)
    res.end()
  }
}




function checkDatabase(value){
  let name = decodeURI(value)
  let selectM = new dbManager();
  
  let obj = selectM.checkStudent(name)

  if (obj != undefined && obj.name != null){
    return true;
  }
  else{
    return false;
  }
}


function postUserInfo(req,res){
  let body
  req.on('data', (data)=>{
    console.log(data)
    body += data
  })

  req.on('end', async ()=>{
    let i = body.split("undefined")
    let obj = await JSON.parse(i[1])
    
    let dbM = new dbManager();
    
    dbM.updateInfo(obj);
    
  })

  
}