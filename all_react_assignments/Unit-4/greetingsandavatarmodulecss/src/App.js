// import logo from './logo.svg';
import './App.css';
// import Avatar from "./components/Avatar.jsx"
//creating function greetings
// importing greeting.jsx here
import Greetings from "./components/Greetings.jsx";
function Button(d){
  console.log(d);
  const{handlebuttonclick,name}=d;
  console.log(name)
  // const  {text,name}=props;
  return <button onClick={handlebuttonclick}>{name}</button>
}
const squarredArr=[1,2,3,4,5].map((el)=><li>{el*2}</li>)
//[React.createElement("ul",{},el)]
let users=[
  {
    id:1,
    name:"khushi",

  },
  {
    id:2,
   
    name:"moto",
  

  },
];
const userAvatar=users.map((user)=>
  <p>{user.name}</p>)






function App() {
  const handlebuttonclick=()=>{ 
    console.log("button")
  }
  console.log(squarredArr)
  console.log(userAvatar)
  return (
    <div className="App">
      <ul>{squarredArr}</ul>
     {userAvatar}
      {/* <Avatar src=""name="harshi"rounded={false}/>
      <Avatar src=""name="mohit" rounded={true}/> */}
      <h1>hello</h1>
      <Greetings/>
      {1+2===3?"yes":"no"}
      <Button name="ji"
      handlebuttonclick={handlebuttonclick}/>
    </div>
  );
  }
  // we can pass string,boolean,number,arrays,objectsand also function
  // we Can't use if else condition in place of ternary because ternary return something either true or false 
export default App;
// key=[user.id]// this key should be unique to get rid off error that should have uniqye keys