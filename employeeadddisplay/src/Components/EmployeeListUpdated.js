import EmployeeCard from './EmployeeCard';

// The main aim of this file creation is we dont want to show the data in table format that why we created this file.

const EmployeeListUpdated=(props)=>{
    console.log(props)
    const renderEmployee=()=>{ 
        return props.employees.map((emp,index)=>{
            //EmployeeCard is a component which we are using to display the employee details one by one.
            return <EmployeeCard deleteHandler={deleteById} employees = {emp} key={emp.empid}></EmployeeCard>
        })
    }

    const deleteById=(empid)=>{
        props.removeHandler(empid);
    }

    return(
        <div className="container">
          <div className='row'>
            <div className='col-sm-12 col-md-6'>
                {/* <img src="./images.jpg"></img> */}
                {/* <img src={process.env.SRC_URL+"/images.jpg"}></img> */}

                
                {/* <img src={image} alt="Employee" class="rounded float-start" />  */}
                {/* This is new way i am using to display the image using chatgpt method*/}
            </div>
            <div className='col-sm-12 col-md-9'>
            <h3>From Employee List Component</h3>
            {renderEmployee()}
            </div>
        </div>
        </div>
    );
}

export default EmployeeListUpdated;