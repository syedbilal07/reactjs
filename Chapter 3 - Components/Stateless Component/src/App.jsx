import React from 'react';

class App extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <Content/>
            </div>
        );
    }
}

class Header extends React.Component{
    render(){
        return(
            <div>
                <h1>This Is Header</h1>
            </div>
        );
    }
}

class Content extends React.Component{
    render(){
        return(
            <div>
                <h1>This Is Content</h1>
                <p>This Is Some Content</p>
            </div>
        );
    }
}

export default App;