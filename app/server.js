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
    updateall(e) {
        e.preventDefault;
        this.setState({ url: 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime' });

    }
    update30(e) {
        e.preventDefault;
        this.setState({ url: 'https://fcctop100.herokuapp.com/api/fccusers/top/recent' });

    }
    //function to get data
    toggleTable(u) {
        console.log("in function");
        axios.get(u).then(function (response) {
            this.setState({ data: response.data });
        }.bind(this));
    }
    componentWillMount() {
        //request to the web site
        this.toggleTable(this.state.url);
    }


    render() {
        // console.log(this.state.data)
        this.toggleTable(this.state.url);

        return (
            <table className="table">
                <thead><tr>
                    <th>No.</th>
                    <th>Name</th>
                    <th><button onClick={this.update30.bind(this)}>
                        30 days</button></th>
                    <th><button onClick={this.updateall.bind(this)}>
                        All time</button></th>
                </tr></thead>
                <Table user={this.state.data} />
            </table>
        )
    }
}

ReactDOM.render(
    <Chart />, document.getElementById('root')
)
