//add your js code here
let base="https://jsonmock.hackerrank.com/api/football_matches"
function filter(year,team1,team2){
    let url=`${base}?year=${year}`
    if(team1){
url+=`&team1=${team1}`
    }
    if(team2){
        url+=`&team2=${team2}`
            }
    fetch(url).then((res)=>res.json())
    .then((data)=>{
        console.log(data)
        let match=data.data
        console.log(match)
        const tbody=document.querySelector("tbody")
        tbody.innerHTML="";
        match.forEach((el,i)=>{
            console.log(el)
           
            let row=document.createElement("tr")
            row.innerHTML=`
            <td>${el.competition}</td>
            <td>${el.year}</td>
            <td>${el.round}</td>
            <td>${el.team1}</td>
            <td>${el.team2}</td>
            <td>${el.team1goals}</td>
            <td>${el.team2goals}</td>
           `
            tbody.appendChild(row)
        })
    })
    .catch((err)=>console.log(err))
}
document.addEventListener("DOMContentLoaded",()=>{
    let year=document.getElementById("year")
    let team1=document.getElementById("team1")
    let team2=document.getElementById("team2")

year.addEventListener("change",()=>{
    const y=year.value
    const t1=team1.value
    const t2=team2.value
    filter(y,t1,t2)
})
team1.addEventListener("change",()=>{
    const y=year.value
    const t1=team1.value
    const t2=team2.value
    filter(y,t1,t2)
})
team2.addEventListener("change",()=>{
    const y=year.value
    const t1=team1.value
    const t2=team2.value
    filter(y,t1,t2)
})
filter(year.value,team1.value,team2.value)
})