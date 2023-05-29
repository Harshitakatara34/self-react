// Write code related to Done page here
let data=JSON.parse(localStorage.getItem("done-list"))||[]

displayTable(data)

function displayTable(data){
document.querySelector("tbody").innerHTML=""
data.forEach((el)=>{
    let row=document.createElement("tr")
        let name=document.createElement("td")
        name.innerText=el.name
        let desc=document.createElement("td")
        desc.innerText=el.desc
        let start=document.createElement("td")
        start.innerText=el.start
        let end=document.createElement("td")
        end.innerText=el.end
        let select=document.createElement("td")
        select.innerText=el.select
        row.append(name,desc,start,end,select,add)
        document.querySelector("tbody").append(row)
})
}