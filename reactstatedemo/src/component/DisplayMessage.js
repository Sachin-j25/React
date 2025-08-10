import { Component } from "react";

class DisplayMessage extends Component{
    constructor(){
        super();
        this.state={
            msg:"This is Initial State", name: "", address: ""
        }
        //If we use old way of writing functionthe button object will be consider as 'this'
        //Inside function but we want to use the class object as 'this'
        //so add the following line to find the class object as 'this'
        // this.changeMessage=this.changeMessage.bind(this);
    }

    //Old Syntax
    // changeMessage(){
    //     this.setState({
    //         msg:"This is Changed State"
    //     })
    // }

    //New Syntax
    changeMessage=()=>{
        this.setState({
            msg:"This is Changed State"
        })
    }
    render(){
        return(
            <div>
                {/* Two way binding of variable in ReactJS */}
                Name : <input type="text" name="nm" value={this.state.name} onChange={(event)=>this.setState({name:event.target.value})}></input><br/>
                Address : <input type="text" name="address" value={this.state.address} onChange={(event)=>this.setState({address:event.target.value})}></input><br/>
                {this.state.msg}<br/>
                {this.state.name}<br/>
                {this.state.address}<br/>
                <button type="button" name="btn" value='click' onClick={this.changeMessage}>Change The Message</button>
                {/* onClick{stateUpdate{}}  --> If we write onclick like this then the function gets called imidiatly we we reload the page. */}
                {/* When we have to pass the data to the onClick event then we have to follow the below syntax */}
                {/* onclick={(event)=>this.changeMessage} */}

                {/* onClick={this.changeMessage} */}
                {/* When we dont have to pass the data to the event then we have to follow the above syntax */}
            </div>
        );
    }
}

export default DisplayMessage;