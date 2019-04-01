import React from 'react';

class App extends React.Component{
    render(){
        return(
            <div>
                <h1>{this.props.header}</h1>
                <h3>{this.props.content}</h3>
            </div>
        );
    }
}

export default App;