const http = require("http");
const fs = require("fs");
const cowsay=require("cowsay");
const server = http.createServer((req, res) => {
    if (req.url == "/") {
        res.setHeader("Content-type", "text/html")
        // creating a new file for employees 
        res.end("<h1>WELCOME TO EMPLOYEE MANAGEMENT SYSTEM</h1>")
    }
    else if (req.url == "/writefile") {
        fs.writeFile("employee.txt", "Employee names are as follows:", (err) => {
            if (err) {
                console.log(err)
            }
        })

        fs.readFile("employee.txt", "utf-8", (err, data) => {
            if (err) {
                res.end(err)
            } else {
                res.setHeader("Content-type", "text/html")
                res.write("<h1>Data has been written in the file</h1>")
                res.end();
            }
        })
    }
    else if (req.url==="/enternames"){
        const Arr=["Aman","Albert", "Varun","Rajat","Nrupul"];
        // Enter the names in the files 
        Arr.forEach((el)=> {
            fs.appendFile("employee.txt",`\n${el}`,(err,data)=>{
                if(err){
                    res.end(err);
                }
            })
        })
        // read the files and Show on UI
        fs.readFile("employee.txt", "utf-8", (err, data) => {
            if (err) {
                res.end(err)
            } else {
                res.setHeader("Content-type", "text/html")
                res.write("<h1>All the names added in the file</h1>")
                res.end();
            }
        })
    }
    else if (req.url==="/alldetails"){
        fs.readFile("employee.txt","utf-8",(err,data)=>{
            if(err){
                req.end(err);
            }else{
                res.write(cowsay.say({
                    text : `${data}`,
                    e : "oO",
                    T : "W"
                }))
                res.end();
            }
        })
    }
    // logic for deleting the file
    else if (req.url==="/delete"){
         fs.unlink("employee.txt",(err)=>{
            if(err){
                res.end(err);
            }else{
                res.end("File has been deleted successfully ! ")
            }
         })
    }
})

server.listen(7700, () => {
    console.log("Server has started at 7700")
})