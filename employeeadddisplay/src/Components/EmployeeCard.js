import {PersonCircle,Trash, PenFill} from 'react-bootstrap-icons';

const EmployeeCard = (props)=>{
    return(
        <div className="container border-bottom">
        <div className="row">
            <div className='col-md-1'>
                <PersonCircle></PersonCircle>
            </div>
            <div className='col-md-7 text-left'>
                <span>{props.employees.empid}</span>&nbsp;&nbsp;&nbsp;
                <span>{props.employees.empName}</span>&nbsp;&nbsp;&nbsp;
                <span>{props.employees.empsalary}</span>&nbsp;&nbsp;&nbsp;
            </div>
            <div className='col-md-2'>
                <PenFill/>
            </div>
            <div className='col-md-2' onClick={()=>props.deleteHandler(props.employees.empid)}>
                <Trash/>
            </div>
        </div>
    </div>
    );
}

export default EmployeeCard;