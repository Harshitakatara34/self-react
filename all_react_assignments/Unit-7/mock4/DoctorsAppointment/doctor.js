
    document.getElementById("submit-form").addEventListener("click", async function addDoctor() {
        let name = document.getElementById("name").value;
        let image = document.getElementById("image").value;
        let specialization = document.getElementById("category").value;
        let experience = document.getElementById("experience").value;
        let location = document.getElementById("location").value;
        let date = document.getElementById("date").value;
        let slots = document.getElementById("slots").value;
        let fee = document.getElementById("fees").value;

        let obj = {
            name: name,
            image: image,
            specialization: specialization,
            experience: experience,
            location: location,
            date: date,
            slots: slots,
            fee: fee
        };

        try {
            let response = await fetch("https://doctors-n4qb.onrender.com/appointments", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(obj)
            });

            if (response.ok) {
                alert("Doctor added successfully!");
             getdata()
            } else {
                alert("Doctor registration failed.");
            }
        } catch (error) {
            console.log(error);
        }
    });
    async function getdata(){
let data=await fetch("https://doctors-n4qb.onrender.com/appointments")
let res=await data.json()
DisplayData(res)
    }
    getdata()
    function DisplayData(data){
    let tbody= document.querySelector("tbody").innerHTML=""
     data.map((el,i)=>{
        let tr=document.createElement("tr")
    let td1=document.createElement("td")
    td1.innerText=el.name
    let td2=document.createElement("td")
    td2.innerText=el.specialization
    let td3=document.createElement("td")
    td3.innerText=el.experience
    let td4=document.createElement("td")
    td4.innerText=el.location
    let td5=document.createElement("td")
    td5.innerText=el.slots
    let td6=document.createElement("td")
    td6.innerText="Edit"
    let td7=document.createElement("button")
    td7.innerText="Delete"
    td7.addEventListener("click", () => deletedoctor(el.id));

    let td8=document.createElement("button")
    td8.innerText="Appointments"
    td8.addEventListener("click",()=>appoints(el.id))
    tr.append(td1,td2,td3,td4,td5,td6,td7,td8)
    document.querySelector("tbody").append(tr)
     })
  
  
    }
    function appoints(){
        window.location.href="appoints.html"
    }
    async function deletedoctor(id) {
    console.log(id);
    let data = await fetch("https://doctors-n4qb.onrender.com/appointments");
    let res = await data.json();
    console.log(res);
    let filteredData = res.filter((el) => {
        return el.id !== id;
    });
    DisplayData(filteredData);
}

getdata();
