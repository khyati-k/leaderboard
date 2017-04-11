import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Table from './component/table.js';

//component that will get data
class Chart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            url: 'https://fcctop100.herokuapp.com/api/fccusers/top/recent'
        }
    }
update(e){
this.setState({u:'https://fcctop100.herokuapp.com/api/fccusers/top/alltime'});

}
    componentWillMount() {
        //request to the web site
        axios.get(this.state.url).then(function (response) {
            this.setState({ data: response.data });
        }.bind(this));
    }

    render() {
        // console.log(this.state.data)
        return (
            <table className="table">
                <thead><tr>
                    <th>No.</th>
                    <th>Name</th>
                    <th><button onClick={this.update.bind(this)}>30 days</button></th>
                    <th>Alltime</th>
                </tr></thead>
                <Table user={this.state.data} />
            </table>
        )
    }
}

ReactDOM.render(
    <Chart />, document.getElementById('root')
)
