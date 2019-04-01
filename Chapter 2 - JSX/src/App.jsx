import React from 'react';

class App extends React.Component{
    render() {
        var i = 1;
        var myStyle = {
            fontSize: 100,
            color: '#FF0000'
        }
        return (
            <div>
                <h1>Header</h1>
                <h2>Content</h2>
                <p>This is the content!!!</p>
                <p data-myattribute = "para">This is my attribute paragraph</p>
                <p>1 + 1 = {1 + 1}</p>
                <h1>Value Of var Is : {i === 1 ? 'True' : 'False'}</h1>
                <p style = {myStyle}>This Is Red</p>
            </div>
        );
    }
}
export default App;