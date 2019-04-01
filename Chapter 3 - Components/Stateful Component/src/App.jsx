import React from 'react';

class App extends React.Component{
    constructor(){
        super();

        this.state = {
            data:[
                {
                    "id":1,
                    "name":"Bilal",
                    "age":"24"
                },
                {
                    "id":2,
                    "name":"Huzaifa",
                    "age":"19"
                },
                {
                    "id":3,
                    "name":"Hasan",
                    "age":"24"
                }
            ]
        }
    }
    render(){
        return(
            <div>
                <Header />
                    <table>
                        <tbody>
                        {this.state.data.map((person, i) => <TableRow key = {i} data = {person} />)}
                        </tbody>
                    </table>
            </div>
        );
    }
}
class Header extends React.Component{
    render(){
        return(
          <h1>Heading</h1>
        );
    }
}
class TableRow extends React.Component{
    render(){
        return(
            <tr>
                <td>{this.props.data.id}</td>
                <td>{this.props.data.name}</td>
                <td>{this.props.data.age}</td>
            </tr>
        );
    }
}
export default App;