import { Component } from "react";
import React,{useState} from "react";

class EmployeeAdd extends Component{
    constructor(props){
        super();
        this.state={
            empid:"",
            empName:"",
            empsalary:""
        }
    }

    add=(event)=>{
        event.preventDefault();//This will stop the page from reloading by submit event
        //This lines are for validation
        if(this.state.empid==="" || this.state.empName==="" || this.state.empsalary===""){
            alert('All Fields are Manditory')
            return;
        }
        this.props.addEmployeeHandler(this.state); //This will call addEmployee Function in app.js
        //To remove the data from the forms
        this.setState({empid:"",empName:"",empsalary:""});
    }
    render(){
        return (
            <form>
                <div class="mb-3">
                    <label for="employeeId" class="form-label">Employee Id</label>
                    <input type="text" class="form-control" id="employeeId" aria-describedby="Employe Id" 
                    placeholder="Employee Id" value={this.state.empid} onChange={(event)=>this.setState({empid:event.target.value})}/>
                </div>
                <div class="mb-3">
                    <label for="employeeName" class="form-label">Employee Name</label>
                    <input type="text" class="form-control" id="employeeName" aria-describedby="EmployeeName" 
                    placeholder="Employee Name" value={this.state.empName} onChange={(event)=>this.setState({empName:event.target.value})}/>
                </div>
                <div class="mb-3">
                    <label for="employeeSalary" class="form-label">Salary</label>
                    <input type="text" class="form-control" id="employeeSalary" 
                    placeholder="Employee Salary" value={this.state.empsalary} onChange={(event)=>this.setState({empsalary:event.target.value})}/>
                </div>
                <button type="submit" variant="primary" onClick={this.add}>Submit</button>
            </form>
        )
    }
}

export default EmployeeAdd;