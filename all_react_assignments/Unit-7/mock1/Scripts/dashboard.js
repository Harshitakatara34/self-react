// Write code related to dashboard page here

const data=JSON.parse(localStorage.getItem("task-list"))||[]

displayTable(data)

  
    function displayTable(formdata){
        let total=document.querySelector("#task-count")
        total.textContent=data.length
        document.querySelector("tbody").innerHTML=""
      formdata.forEach((el,index)=>{
        // const tabledata=document.querySelector("tbody")
        let tr=document.createElement("tr")
        let td1=document.createElement("td")
        td1.innerText=el.name
        let td2=document.createElement("td")
        td2.innerText=el.desc
        let td3=document.createElement("td")
        td3.innerText=el.start
        let td4=document.createElement("td")
        td4.innerText=el.end
        let td5=document.createElement("td")
        td5.innerText=el.select
        let td6=document.createElement("td")
        td6.innerText="Add"
      td6.addEventListener("click",()=>{
        filterdata=data.filter((el,i)=>{
            return index!=i
        })
        displayTable(filterdata)

        localStorage.setItem("task-list",JSON.stringify(data))

        let priorlist=JSON.parse(localStorage.getItem("priority-list"))||[]
     priorlist.push(el)
     localStorage.setItem("priority-list",JSON.stringify(priorlist))

    })
        tr.append(td1,td2,td3,td4,td5,td6)
        document.querySelector("tbody").append(tr)
      })

       
    }
    let priority=document.querySelector("#filter")
    priority.addEventListener("change",(e)=>{
        let filter=e.target.value
        if(filter==""){
            displayTable(data)
        }
        else{
            let filtered=data.filter((el)=>{
                return el.select==filter
            })
            displayTable(filtered)
        }
    })




