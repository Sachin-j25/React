import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import EmployeeList from './Components/EmployeeList';
import EmployeeListUpdated from './Components/EmployeeListUpdated';
import EmployeeAdd from './Components/EmployeeAdd';
import EmployeeEdit from './Components/EmployeeEdit';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  //emparr key we want to use for storing data.
  const LOCAL_STORAGE_EMPARR = 'emparr';
  //We are not able to change the state here so we are changing syntax.
  // let emparr=[
  //   {empid:1, empName:'Sachin', empsalary:20000},
  //   {empid:2, empName:'Sourav', empsalary:30000},
  //   {empid:3, empName:'Rohit', empsalary:40000},
  //   {empid:4, empName:'Virat', empsalary:50000},
  //   {empid:5, empName:'Mahendra', empsalary:60000}
  // ];

  // const[emparr, setEmparr] = useState([]); We can declare like this we can assign empty array.

  //New Syntax with state --> Since we want to modify the array we need to use it as state in functional component.
  //useState hook is used for creating state object property.

  //use State will return a variable and a function
  const[emparr, setEmparr] = useState([]);

  //useEffect accepts a function and a object and it calls the function when
  //the state of 2nd parameter changes.
  //since our 2nd parameter is empty array which is constant and hence this 
  //will get executed only once when the the array is empty '[]' ar last
  useEffect(()=>{
    const arr = JSON.parse(localStorage.getItem(LOCAL_STORAGE_EMPARR));
    if(arr){
      setEmparr(arr);
    }else{
      console.log('Array Not Found');
    }
  },[]);

  //When emparr array changes then we want to overwrite value in localstorage
  //at that time this use effect will get executed
  useEffect(()=>{
    if(emparr.length !== 0){
      localStorage.setItem(LOCAL_STORAGE_EMPARR, JSON.stringify(emparr))
    }
  },[emparr]);
  //When emparr is updating then it is updating local storahe

const removeEmp=(eid)=>{
  const newarr = emparr.filter((emp)=>{
      return emp.empid !== eid;
  });
  //we dont want to create a new array we want to override the old array
  setEmparr(newarr);
}

const updateEmp=(emp)=>{
  setEmparr(emparr.map( (e) => {
    return e.empid === emp.empid?{...emp}:e;
    //This will check if the empid of the employee object matches with the empid of
    //the employee object in the array, if it matches then it will return the updated employee
    //else it will return the employee object as it is.
  }))
}
//emp --> emp (probably the updated employee object).
//empid --> The object which is come from array
//If e.empid matches emp.empid, it should replace that employee’s data with the updated one.

  //It is used to add one employee object into state emparr
  const addEmployee=(ob)=>{
    let newemparr = [...emparr,{...ob}];
    //Now we have to override the old array with new array to change the value of array
    setEmparr(newemparr)
    //... - It is known as spread operator. It is used to copy of the whole array(emparr) into the newemparr.
  };

  return (
    <div className="App">
      <Header/>
      <Router>
          <Routes>
            <Route path="/" element={<EmployeeListUpdated employees={emparr} removeHandler={removeEmp} />} />
            <Route path="/addEmployee" element={<EmployeeAdd addEmployeeHandler={addEmployee} />} />
             <Route path="/edit/:empid" element={<EmployeeEdit updateEmployeeHandler={updateEmp} />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
