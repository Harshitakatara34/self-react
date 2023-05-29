const fs=require("fs")




// this isz asynchronous in nature 
// fs.readFile("./text.txt","utf-8",(err,data)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log(data)
//     }
// })
// console.log("Bye!!")


// const data=fs.readFileSync("./text.txt","utf-8")
// console.log(data)

// by using utf-8 it will convert the ascii code readable 
// in case of synchronous there will be no callback 
// readFileSync is synchronous 
// readFile is asynchronous








// reading async
// const data=fs.readFileSync("./text.txt","utf-8")

// fs.writeFile("./text.txt","i am",(err)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log("harshi")
//     }
// })

// it will overwrite that is previously written in text file this thing will not work in case of readfile.



// fs.appendFile("./text.txt","\nharshi",(err)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log("added")
//     }
// })


fs.writeFile("./text.txt","mohitjii",(err)=>{
    if(err){
        console.log("no")
    }
    else{
        console.log("yes")
    }
})


fs.appendFile("./text.txt", "\n This is me third time wrinting in the file\n",(err)=>{
if(err){
console.log("Cannot be appended")
console.log(err)
} else {
console.log("Data has been appended in the file")
}
})