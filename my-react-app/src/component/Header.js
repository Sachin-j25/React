//Trying New Way to write the functional component

//const
import './Header.css';
// function Header(props){
//     return(
//         <h1>Hii Sachin</h1>
//     )
// }

const Header=(props)=>{
    console.log(props);
    return(
        <div>
            <h2>Hii {props.name}</h2>
            <h3>{props.email}</h3>
        </div>
    )
}

export default Header;