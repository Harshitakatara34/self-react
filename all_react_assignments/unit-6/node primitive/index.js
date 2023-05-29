const fs = require("fs");

// complete the following fubctions
  
function isNumber(num) {
    let message;
    if(typeof num==="number"){
        message=`it is a Number.`
    }else{
        message=`it is Not a Number.`
    }
    fs.writeFileSync("test.txt",message)
}
 
function isStr(str) {
   let message;
   if(str==="masai"){
    message=`it is a String.` 
   }else if(str=="10"){
     message=`it is Not a String.` 
   }
   fs.writeFileSync("test.txt",message);
}

function isArray(arr) {
    let message;
    if(Array.isArray(arr)){
     message=`it is a Array.` 
    }else{
      message=`it is Not a Array.` 
    }
    fs.writeFileSync("test.txt",message);
}

function isObj(obj) {
    // let ans=Object.prototype.toString.call(obj) === '[object Object]';
   let message;
    if(typeof obj=="object" && !Array.isArray(obj)){
        message=`this is a object.`
    }else{
        message=`this is not a object.`
    }
    fs.writeFileSync("test.txt",message);
}

function cls() {
   let data= fs.readFileSync("test.txt","utf-8");
    if(data){
        fs.unlinkSync("test.txt");
    }
}

// Export All the functions
module.exports={isNumber,isStr,isArray,isObj,cls}
