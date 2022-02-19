//import { useState } from 'react';
//import User from './User.js'; ////js koymayı unutma hata veriyor cd ilk-uygulama
import './App.css';
import Counter from "./components/Counter";
function App() {
  
  return (
  <div className="App">
<Counter />
  </div>);
}

export default App;

/*
import { useState } from 'react';
import User from './User.js'; ////js koymayı unutma hata veriyor cd ilk-uygulama
function App() {
  const [name,setName] = useState("Hoşgeldiniz");
  const [friend, setFriend] =useState(["Ali","Ayşe"]);
  return (
    <div>
      <User name ="Ferhat"/>
      <h2>{name}</h2>
      <button onClick={()=>setName("Merhaba")}>Click Butn</button>
      <br/>
      {friend.map((friend,index)=>(<div key={index}>{friend}</div>))}
    </div>
  );
}

export default App;

*/
