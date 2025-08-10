// import React from 'react';
// import image from './images.jpg';

// const EmployeeList=(props)=>{
//     console.log(props)
//     const renderEmployee=()=>{ return(
//         props.employees.map((emp,index)=><tr key={index}>
//             <td>{emp.empid}</td>
//             <td>{emp.empName}</td>
//             <td>{emp.empsalary}</td>
//         </tr>)
//     )}
//     return(
//         <div className="container">
//           <div className='row'>
//             <div className='col-sm-12 col-md-6'>
//                 {/* <img src="./images.jpg"></img> */}
//                 {/* <img src={process.env.SRC_URL+"/images.jpg"}></img> */}

                
//                 <img src={image} alt="Employee" class="rounded float-start" /> 
//                 {/* This is new way i am using to display the image using chatgpt method*/}
//             </div>
//             <div className='col-sm-12 col-md-9'>
//             <h3>From Employee List Component</h3>
//             <table className="table table-dark table-striped" border={2}>
//                 <thead>
//                 <tr>
//                     <th>Employee Id</th>
//                     <th>Employee Name</th>
//                     <th>Employee Salary</th>
//                 </tr>
//                 </thead>
//                 <tbody>
//                     {renderEmployee()}
//                 </tbody>
//             </table>
//             </div>
//         </div>
//         </div>
//     );
// }

// export default EmployeeList;