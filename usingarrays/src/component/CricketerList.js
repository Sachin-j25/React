
const CricketerList = (props) =>{
    return (
        <div>
            <ul>
                {props.arr.map( (x,index) => <li key={index}> {x} </li>)}
                {/* {nameArr.map(x => <li> {x} </li> )} *2nd way/  }

                {/* <li>{nameArr[0]}</li>
                <li>{nameArr[1]}</li>
                <li>{nameArr[2]}</li>
                <li>{nameArr[3]}</li>
                <li>{nameArr[4]}</li> */}
            </ul>
        </div>
    )
}

export default CricketerList;