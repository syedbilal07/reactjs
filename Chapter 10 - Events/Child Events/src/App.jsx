import React from 'react';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: 'Initial Data'
        }
        this.updateState = this.updateState.bind(this);
    };
    updateState(){
        this.setState({data: 'Data Updated From Child Component'});
    }
    render(){
        return(
            <div>
                <Content myDataProps = {this.state.data}
                updateStateProps = {this.updateState}></Content>
            </div>
        );
    }
}
class Content extends React.Component{
    render(){
        return(
            <div>
                <button onClick = {this.props.updateStateProps}>Update State</button>
                <h4>{this.props.myDataProps}</h4>
            </div>
        );
    }
}

export default App;