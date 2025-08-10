import './App.css';
import Header from './component/Header';
import CricketerList from './component/CricketerList';

function App() {
  var nameArr = ["Sachin", "Rahul", "Dhoni", "Rohit", "Virat", "SKY", "Boom-Boom"]
  return (
    <div>
      <Header/>
      {/* If you want to use array at multiple places then we have to pass through the props. */}
      {/* We are passing the data to the child component from parent component. Child component for ex is CricketerList */}
      <CricketerList arr={nameArr}/>
    </div>
  );
}

export default App;
