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
App.defaultProps = {
    header: 'Header From Default Props',
    content: 'Header From Default Props'
}

export default App;