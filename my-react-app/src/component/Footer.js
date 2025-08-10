import React from "react";

// const Footer=(props)=>{
//     return(
//         <div>
//             <h2>All Rights Are Seserved</h2>
//         </div>
//     )
// }

class Footer extends React.Component{
    constructor(props){
        super();
        this.state={
            id:props.id,
            name:props.name
        }
    }
    render(){
        return(
            <div>
                <h2>All Rights Are Seserved</h2>
                {this.state.id}----{this.state.name}
                {this.props.id}----{this.props.name}
            </div>
        )
    }
}
export default Footer;