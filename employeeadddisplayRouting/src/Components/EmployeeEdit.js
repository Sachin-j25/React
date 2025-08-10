import { Component } from "react";
import React,{useState} from "react";
import { withRouter } from "./withRouter";

class EmployeeEdit extends Component{
    constructor(props){
        super(props);
        let empid = "";
        let empName = "";
        let empsalary = "";
        //console.log(this.props.location.state.employees);
        //const {empid,empName,empsalary} = this.props.location.state.employees;
        if (
        props.location &&
        props.location.state &&
        props.location.state.employees
    ) {
        ({ empid, empName, empsalary } = props.location.state.employees);
    }
        this.state = { empid, empName, empsalary };//This data is visisble in form because we already assign in form wuth the help of value.
        // this.state={
        //     //1st way to write
        //     // empid:this.props.location.state.employees.empid,
        //     // empName:this.props.location.state.employees.empName,
        //     // empsalary:this.props.location.state.employees.empsalary
        //     //This data is visisble in form because we already assign in form wuth the help of value.
        // }
    }

    update=(event)=>{
        event.preventDefault();//This will stop the page from reloading by submit event
        console.log('this is update function');

        if(this.state.empid==="" || this.state.empName==="" || this.state.empsalary===""){
            alert('All Fields are Manditory')
            return;
        }
        this.props.updateEmployeeHandler(this.state); //This will call update Function in app.js

        //To remove the data from the forms
        this.setState({empid:"",empName:"",empsalary:""});
        this.props.navigate('/'); //This will redirect to home page after updating the employee
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
                <button type="submit" variant="primary" onClick={this.update}>Update Employee</button>
            </form>
        )
    }
}

export default withRouter(EmployeeEdit);