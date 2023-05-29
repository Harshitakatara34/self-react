// Write code for the Progress page here 
let data=JSON.parse(localStorage.getItem("priority-list"))||[]
displayTable(data)

function displayTable(data){
    document.querySelector("tbody").innerHTML=""
    data.forEach((el,index)=>{
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
        let add=document.createElement("td")
        add.innerText="Add"
        add.addEventListener("click",()=>{
            data=data.filter((el,i)=>{
                return index!=i
            })
            displayTable(data)
            localStorage.setItem("priority-list",JSON.stringify(data))
            
            let donelist=JSON.parse(localStorage.getItem("done-list"))||[]
            donelist.push(el)
            localStorage.setItem("done-list",JSON.stringify(donelist))
        })
        row.append(name,desc,start,end,select,add)
        document.querySelector("tbody").append(row)
    })
}