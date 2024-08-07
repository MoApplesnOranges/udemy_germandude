import React, {Component} from "react";
import { CtxConsumer } from "../App";
class Footer extends Component{
    state = {
        name: "Will",
        age: 35,
        isLogin: true
    }

    createAlert(){
        alert("You clicked!");
    }
    // componentDidMount(){
    //     this.setState({name: "MyName"});
    // }
    // componentWillUnmount(){
    //     unsubscribe
    // }

    changed = evt => {
        console.log('changed', evt.target.value)
        this.setState({name: evt.target.value})
        console.log(this.state.name)
    }
    render(){
        const animals = ["cat", "dog", "horse"];
        return (
            <div>
            {animals.map(animal => {
                    return (
                        <div key={animal}>
                            <h1>{animal}</h1>
                            </div>
                    );
            })}
            </div>
        )
        {/* {this.state.isLogin? (
            <React.Fragment>
            <h2 onClick={this.props.myalert}>{this.props.trademark}</h2>
        <input value={this.state.name} onChange={this.changed.bind(this)}type="text" />
        </React.Fragment>): "no"} */}
    }
}

export default Footer;
