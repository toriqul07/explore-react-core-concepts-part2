
import './App.css'
import Counter from './Counter';
import Team from './Team';
import Users from './Users';
import Friends from './Friends';

function App() {
  function handleClick(){
    alert('button Clicked');
  }
const handleClick2 = () =>{
  alert('button 2 clicked');
}

const addToFive = (num) =>{
  alert(num+5);
}
  return (
    <>
      <h3>React core concepts 2</h3>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      {/* <button onClick={handleClick}>Click me</button> */}
      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick2}>Click2</button>
      <button onClick={() =>{alert('third Clicked')}}>third</button>
      {/* vejailla */}
      <button onClick={() => addToFive(3)}>Four</button>
    </>
  )
}

export default App
